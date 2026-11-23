// Google Cloud TTS (Chirp 3 HD) narration for lesson videos.
// Reads lessons/<id>.narr.json and writes one MP3 per beat to audio/<id>/<lang>/<n>.mp3
// plus a manifest audio/<id>.<lang>.json that the lesson player loads.
// Runs in GitHub Actions. Auth: keyless (google-github-actions/auth) or GOOGLE_TTS_API_KEY.
// env: LESSONS = "bnd1,bnd2" or "all" · LANGS = "en,ko,zh" · VOICE = Chirp3-HD-Aoede · FORCE = 1 to redo
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const { GOOGLE_TTS_API_KEY } = process.env;
const VOICE = (process.env.VOICE || "Chirp3-HD-Aoede").trim();
const LANGS = (process.env.LANGS || "en,ko,zh").split(",").map((s) => s.trim()).filter(Boolean);
const LC = { en: "en-US", ko: "ko-KR", zh: "cmn-CN" };
const RATE = 24000, KBPS = 128, GAP = 0.25;

let gAuth = null;
async function headers() {
  const h = { "content-type": "application/json" };
  if (GOOGLE_TTS_API_KEY) return h;
  if (!gAuth) { const { GoogleAuth } = await import("google-auth-library"); gAuth = new GoogleAuth({ scopes: ["https://www.googleapis.com/auth/cloud-platform"] }); }
  const { token } = await (await gAuth.getClient()).getAccessToken();
  h.authorization = `Bearer ${token}`;
  const project = process.env.GCP_PROJECT_ID || (await gAuth.getProjectId().catch(() => ""));
  if (project) h["x-goog-user-project"] = project;
  return h;
}
function pcmFromWav(buf) {
  let i = 12;
  while (i + 8 <= buf.length) {
    const id = buf.toString("ascii", i, i + 4), size = buf.readUInt32LE(i + 4);
    if (id === "data") return buf.subarray(i + 8, Math.min(buf.length, i + 8 + size));
    i += 8 + size + (size % 2);
  }
  return buf.subarray(44);
}
async function synth(voiceName, lang, text) {
  const body = { input: { text }, voice: { languageCode: LC[lang], name: voiceName }, audioConfig: { audioEncoding: "LINEAR16", sampleRateHertz: RATE } };
  for (let attempt = 1; attempt <= 6; attempt++) {
    const qs = GOOGLE_TTS_API_KEY ? `?key=${GOOGLE_TTS_API_KEY}` : "";
    const r = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize${qs}`, { method: "POST", headers: await headers(), body: JSON.stringify(body) });
    if (r.ok) return pcmFromWav(Buffer.from((await r.json()).audioContent, "base64"));
    const msg = await r.text();
    if (r.status === 429 || r.status >= 500) { await new Promise((s) => setTimeout(s, 3000 * attempt)); continue; }
    if (/too long/i.test(msg)) {
      const parts = text.split(/(?<=[，、；：,;:！？!?。.])/).filter(Boolean);
      if (parts.length > 1) { const half = Math.ceil(parts.length / 2); return Buffer.concat([await synth(voiceName, lang, parts.slice(0, half).join("")), await synth(voiceName, lang, parts.slice(half).join(""))]); }
    }
    throw new Error(`Google TTS ${r.status}: ${msg.slice(0, 300)}`);
  }
  throw new Error("Google TTS: too many retries");
}
// Read symbols the way a teacher would say them.
function speakable(t, lang) {
  t = t.replace(/\s*[→⇒]\s*/g, lang === "ko" ? ", " : lang === "zh" ? "，" : ", then ");
  t = t.replace(/[‘’']/g, "");
  return t;
}
function sentences(t) { return t.split(/(?<=[.!?。！？])\s+/).filter(Boolean); }
function mp3(pcm) {
  const r = spawnSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-f", "s16le", "-ar", String(RATE), "-ac", "1", "-i", "pipe:0", "-ar", "44100", "-b:a", `${KBPS}k`, "-f", "mp3", "pipe:1"], { input: pcm, maxBuffer: 1 << 28 });
  if (r.status !== 0) throw new Error("ffmpeg failed: " + r.stderr.toString());
  return r.stdout;
}

const ldir = path.join(ROOT, "lessons");
let ids = (process.env.LESSONS || "all").split(",").map((s) => s.trim()).filter(Boolean);
if (ids.includes("all")) ids = fs.readdirSync(ldir).filter((f) => f.endsWith(".narr.json")).map((f) => f.replace(".narr.json", ""));
const summary = ["## Lesson audio", "", "| Lesson | Lang | Beats | Length |", "|---|---|---|---|"];
for (const id of ids) {
  const { beats } = JSON.parse(fs.readFileSync(path.join(ldir, `${id}.narr.json`), "utf8"));
  for (const lang of LANGS) {
    const voiceName = `${LC[lang]}-${VOICE}`;
    const mfile = path.join(ROOT, "audio", `${id}.${lang}.json`);
    if (process.env.FORCE !== "1" && fs.existsSync(mfile)) { const m = JSON.parse(fs.readFileSync(mfile, "utf8")); if (m.n === beats.length && m.voice === voiceName) { console.log(id, lang, "exists, skipped"); continue; } }
    const out = {}; let total = 0;
    fs.mkdirSync(path.join(ROOT, "audio", id, lang), { recursive: true });
    for (let i = 0; i < beats.length; i++) {
      const text = speakable(beats[i][lang] || beats[i].en, lang);
      const gap = Buffer.alloc(Math.round(GAP * RATE) * 2), parts = [];
      for (const [k, s] of sentences(text).entries()) { if (k) parts.push(gap); parts.push(await synth(voiceName, lang, s)); }
      const pcm = Buffer.concat(parts), dur = +(pcm.length / 2 / RATE).toFixed(2);
      const rel = `${id}/${lang}/${i}.mp3`;
      fs.writeFileSync(path.join(ROOT, "audio", rel), mp3(pcm));
      out[i] = { file: rel, dur }; total += dur;
      console.log(id, lang, i, `${dur}s`);
    }
    fs.writeFileSync(mfile, JSON.stringify({ id, lang, voice: voiceName, n: beats.length, generatedAt: new Date().toISOString(), beats: out }, null, 1));
    summary.push(`| ${id} | ${lang} | ${beats.length} | ${Math.floor(total / 60)}:${String(Math.round(total % 60)).padStart(2, "0")} |`);
  }
}
if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary.join("\n") + "\n");
