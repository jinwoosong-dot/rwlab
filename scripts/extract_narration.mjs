// Pull narration text out of each lessons/<id>.html (the SC array) into lessons/<id>.narr.json.
// One entry per beat, in playback order. Quiz beats narrate the question text.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const dir = path.join(ROOT, "lessons");
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".html") && !f.startsWith("_"))) {
  const id = f.replace(/\.html$/, "");
  const html = fs.readFileSync(path.join(dir, f), "utf8");
  const a = html.indexOf("const SC=");
  const b = html.indexOf("/* ===== Player engine");
  if (a < 0 || b < 0) continue;
  const ctx = {};
  vm.runInNewContext(html.slice(a, b).replace("const SC=", "this.SC="), ctx);
  const beats = [];
  ctx.SC.forEach((s) => s.b.forEach((x) => {
    if (x.q) beats.push({ q: 1, en: x.q.en.q, ko: x.q.ko.q, zh: x.q.zh.q });
    else beats.push({ en: x.en, ko: x.ko, zh: x.zh });
  }));
  fs.writeFileSync(path.join(dir, `${id}.narr.json`), JSON.stringify({ id, beats }, null, 1));
  console.log(id, beats.length, "beats");
}
