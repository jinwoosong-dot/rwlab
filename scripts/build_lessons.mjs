// Builds lessons/<id>.html from lessons/src/<id>.js + lessons/_template.html,
// writes lessons/index.json, and refreshes the VIDS list inside index.html.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const tpl = fs.readFileSync(path.join(ROOT, "lessons", "_template.html"), "utf8");
const srcDir = path.join(ROOT, "lessons", "src");
const ORDER = ["GEN", "BND", "FSS", "WIC", "TRN", "SYN", "CID", "TSP", "COT", "COQ", "INF", "CTC"];
const list = [];
for (const f of fs.readdirSync(srcDir).filter((f) => f.endsWith(".js"))) {
  const ctx = {};
  vm.runInNewContext(fs.readFileSync(path.join(srcDir, f), "utf8").replace(/^(META|L|SC)=/gm, "this.$1="), ctx);
  const { META, L, SC } = ctx;
  // sanity: every beat has all three languages, every quiz has a valid answer
  SC.forEach((s, i) => s.b.forEach((b, j) => {
    const where = `${META.id} scene ${i} beat ${j}`;
    if (b.q) { for (const l of ["en", "ko", "zh"]) { const d = b.q[l]; if (!d || !d.q || !d.e || !d.o || d.o.length !== b.q.en.o.length) throw new Error(where + " quiz " + l); } if (!(b.q.a >= 0 && b.q.a < b.q.en.o.length)) throw new Error(where + " answer"); }
    else for (const l of ["en", "ko", "zh"]) if (!b[l]) throw new Error(where + " missing " + l);
  }));
  const enChars = SC.flatMap((s) => s.b.map((b) => (b.q ? b.q.en.q : b.en).length)).reduce((a, b) => a + b, 0);
  const beats = SC.reduce((a, s) => a + s.b.length, 0);
  const min = Math.max(3, Math.round((enChars / 14 + beats * 0.6 + SC.flatMap((s) => s.b.filter((b) => b.q)).length * 20) / 60));
  let html = tpl.replace("/*TITLE*/", META.title.en).replace("/*META*/", JSON.stringify(META)).replace("/*L*/", JSON.stringify(L)).replace("/*SC*/", JSON.stringify(SC, null, 0).replace(/\},\{"id"/g, '},\n{"id"'));
  fs.writeFileSync(path.join(ROOT, "lessons", `${META.id}.html`), html);
  list.push({ id: META.id, k: META.k, n: META.n, min, t: META.title, d: META.desc });
}
list.sort((a, b) => ORDER.indexOf(a.k) - ORDER.indexOf(b.k) || a.n - b.n);
fs.writeFileSync(path.join(ROOT, "lessons", "index.json"), JSON.stringify(list, null, 1));
const VIDS = {};
for (const v of list) (VIDS[v.k] ||= []).push({ id: v.id, t: v.t, d: v.d, min: v.min });
const ip = path.join(ROOT, "index.html");
let idx = fs.readFileSync(ip, "utf8");
const a = idx.indexOf("const VIDS="), b = idx.indexOf("\n", a);
idx = idx.slice(0, a) + "const VIDS=" + JSON.stringify(VIDS) + ";" + idx.slice(b);
fs.writeFileSync(ip, idx);
console.log(list.map((v) => `${v.id} ${v.min}m`).join(", "));
