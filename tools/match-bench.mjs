// Dug Up — measures answer matching (Feature Spec 09). Two questions, answered with real names:
//   1. False matches: real names that are NOT answers to a prompt (Wikipedia category members, list pages and
//      answers to other prompts). How many does matchAnswer still credit as one of the prompt's answers?
//   2. Recall: typos in the answer names, and Wikipedia redirects to the answers' articles (the names people really
//      use). How many are credited as the right answer?
//
//   node tools/match-bench.mjs                 measure the current js/app.js
//   node tools/match-bench.mjs --app <file>    measure another app.js (e.g. `git show main:js/app.js > old.js`)
//   node tools/match-bench.mjs --fetch         refresh tools/match-bench-data.json from Wikipedia first (~1 min)
//   node tools/match-bench.mjs --show          also list every false match
//
// Offline by default: it reads tools/match-bench-data.json. Built-in modules only.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadGame } from './load-game.mjs';
import { getJSON, sleep } from './rarity.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HTML_FILE = path.join(ROOT, 'index.html');
const DATA_FILE = path.join(ROOT, 'tools', 'match-bench-data.json');
const API = 'https://en.wikipedia.org/w/api.php';
const PAUSE_MS = 200;
const MAX_REDIRECTS = 40;   // per answer; a few articles have hundreds

// Prompts in the benchmark, and where real non-answers come from. Every prompt also gets the other prompts' answers.
const SOURCES = {
  mesogods:  { cats: ['Category:Mesopotamian gods', 'Category:Mesopotamian goddesses', 'Category:Mesopotamian demons', 'Category:Mesopotamian legendary creatures'] },
  greekgods: { cats: ['Category:Greek gods', 'Category:Greek goddesses'] },
  egyptgods: { cats: ['Category:Egyptian gods', 'Category:Egyptian goddesses'] },
  norsegods: { cats: ['Category:Æsir', 'Category:Vanir', 'Category:Jötnar'] },
  wars:      { lists: ['List of wars: before 1000', 'List of wars: 1000–1499', 'List of wars: 1500–1799', 'List of wars: 1800–1899'],
               keep: /\b(War|Wars|Rebellion|Revolt|Uprising|Conquest|Crusade|Invasion|Revolution|Conflict)\b/ },
  naval:     { lists: ['List of naval battles'], keep: /^(Battle|Siege) of|Naval/ },
  rome: {}, engmon: {}, commanders: {}, ww2: {}, scientists: {}, explorers: {}, composers: {}, paintings: {}
};

const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf(k); return i < 0 ? null : (args[i + 1] || ''); };

function load(appFile){
  const html = fs.readFileSync(HTML_FILE, 'utf8');
  const overrides = appFile ? { 'js/app.js': fs.readFileSync(appFile, 'utf8') } : {};
  return loadGame(HTML_FILE, html, overrides);
}

/* ---------- fetching (only with --fetch) ---------- */
// getJSON retries itself; a request that still fails aborts the whole fetch, so the data file is never half-written
async function query(params, collect){
  let cont = null, guard = 0;
  do {
    const p = new URLSearchParams({ format: 'json', formatversion: '2', ...params });
    if (cont) Object.keys(cont).forEach(k => p.set(k, cont[k]));
    const j = await getJSON(API + '?' + p.toString());
    collect(j); cont = j.continue || null;
    guard++; await sleep(PAUSE_MS);
  } while (cont && guard < 40);
}
// canonical title + up to MAX_REDIRECTS redirect names, for each title (50 per request)
async function resolve(titles, withRedirects){
  const out = {};
  for (let i = 0; i < titles.length; i += 50){
    const batch = titles.slice(i, i + 50), norm = {}, red = {}, pages = {};
    const params = { action: 'query', titles: batch.join('|'), redirects: '1' };
    if (withRedirects) Object.assign(params, { prop: 'redirects', rdnamespace: '0', rdlimit: 'max' });
    await query(params, j => {
      const q = j.query || {};
      (q.normalized || []).forEach(x => { norm[x.from] = x.to; });
      (q.redirects || []).forEach(x => { red[x.from] = x.to; });
      (q.pages || []).forEach(pg => { const e = pages[pg.title] || (pages[pg.title] = { missing: !!pg.missing, redirects: [] }); (pg.redirects || []).forEach(r => e.redirects.push(r.title)); });
    });
    batch.forEach(t => { let c = norm[t] || t; c = red[c] || c; const pg = pages[c]; out[t] = pg && !pg.missing ? { canon: c, redirects: pg.redirects.slice(0, MAX_REDIRECTS) } : null; });
  }
  return out;
}
async function fetchData(G){
  const data = { fetched: new Date().toISOString().slice(0, 10), prompts: {} };
  for (const [id, src] of Object.entries(SOURCES)){
    const p = G.PROMPTS.find(x => x.id === id);
    if (!p){ console.warn('unknown prompt', id); continue; }
    const answers = await resolve([...new Set(p.answers.map(a => a.wiki))], true);
    let cands = [];
    for (const c of src.cats || []) await query({ action: 'query', list: 'categorymembers', cmtitle: c, cmnamespace: '0', cmlimit: '500' }, j => { (j.query.categorymembers || []).forEach(m => cands.push(m.title)); });
    for (const l of src.lists || []) await query({ action: 'parse', page: l, prop: 'links' }, j => { ((j.parse && j.parse.links) || []).forEach(x => { if (x.ns === 0 && x.exists && src.keep.test(x.title)) cands.push(x.title); }); });
    cands = [...new Set(cands)].filter(t => !/^List of|^Lists of|disambiguation/i.test(t));
    const canon = await resolve(cands, false);
    data.prompts[id] = { answers, candidates: Object.fromEntries(cands.filter(t => canon[t]).map(t => [t, canon[t].canon])) };
    console.log(`${id}: ${p.answers.length} answers, ${Object.keys(data.prompts[id].candidates).length} candidates`);
  }
  return data;
}

/* ---------- measuring ---------- */
// deterministic typos: delete / swap / neighbour key / double, at a letter position (pos 0 = first letter)
const KB = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
function neighbour(c){ for (let r=0;r<3;r++){ const i = KB[r].indexOf(c); if (i >= 0) return KB[r][i + 1] || KB[r][i - 1]; } return c; }
function typos(s){
  const idx = [...s].map((c, i) => /[a-z]/i.test(c) ? i : -1).filter(i => i >= 0);
  if (idx.length < 5) return [];
  const out = [], mid = idx[Math.floor(idx.length / 2)], late = idx[idx.length - 2];
  out.push({ s: s.slice(0, mid) + s.slice(mid + 1), first: false });                                   // delete
  out.push({ s: s.slice(0, late) + s[late + 1] + s[late] + s.slice(late + 2), first: false });         // swap
  out.push({ s: s.slice(0, mid) + neighbour(s[mid].toLowerCase()) + s.slice(mid + 1), first: false }); // neighbour key
  out.push({ s: s.slice(0, late) + s[late] + s.slice(late), first: false });                           // double
  const f = idx[0];
  out.push({ s: s.slice(0, f) + neighbour(s[f].toLowerCase()) + s.slice(f + 1), first: true });     // first letter
  return out;
}

function measure(G, data, show){
  const tot = { fp: 0, cands: 0, cross: 0, crossN: 0, typo: 0, typoN: 0, typoWrong: 0, first: 0, firstN: 0, red: 0, redN: 0, redWrong: 0 };
  const rows = [], falses = [];
  const allDisplays = G.PROMPTS.flatMap(p => p.answers.map(a => ({ pid: p.id, display: a.display, wiki: a.wiki })));
  for (const id of Object.keys(data.prompts)){
    const p = G.PROMPTS.find(x => x.id === id), d = data.prompts[id];
    if (!p) continue;
    const canonOf = a => (d.answers[a.wiki] && d.answers[a.wiki].canon) || a.wiki;
    const answerCanons = new Set(p.answers.map(canonOf));
    const r = { id, fp: 0, cands: 0, cross: 0, typo: 0, typoN: 0, red: 0, redN: 0 };
    // 1a. Wikipedia non-answers
    for (const [title, canon] of Object.entries(d.candidates)){
      if (answerCanons.has(canon)) continue;            // it IS an answer (under another name): not a false-match test
      const input = title.replace(/\s*\([^)]*\)\s*$/, ''); // players don't type "(god)"
      r.cands++;
      const m = G.matchAnswer(p, input);
      if (m.type === 'ok'){ r.fp++; falses.push(`${id}: "${input}" → ${m.answer.display}`); }
    }
    // 1b. answers to other prompts that are different things
    for (const o of allDisplays){
      if (o.pid === id || p.answers.some(a => a.wiki === o.wiki)) continue;
      const m = G.matchAnswer(p, o.display);
      tot.crossN++;
      if (m.type === 'ok' && m.answer.wiki !== o.wiki){ r.cross++; falses.push(`${id}: "${o.display}" (${o.pid}) → ${m.answer.display}`); }
    }
    // 2a. typos in the display names
    for (const a of p.answers) for (const t of typos(a.display)){
      const m = G.matchAnswer(p, t.s), ok = m.type === 'ok' && m.answer === a;
      if (t.first){ tot.firstN++; if (ok) tot.first++; continue; }
      r.typoN++; if (ok) r.typo++; else if (m.type === 'ok') tot.typoWrong++;
    }
    // 2b. Wikipedia redirects and the article title itself
    for (const a of p.answers){
      const e = d.answers[a.wiki]; if (!e) continue;
      for (const name of [e.canon, ...e.redirects]){
        const input = name.replace(/\s*\([^)]*\)\s*$/, '');
        const m = G.matchAnswer(p, input);
        r.redN++;
        if (m.type === 'ok' && canonOf(m.answer) === e.canon) r.red++;
        else if (m.type === 'ok'){ tot.redWrong++; falses.push(`REDIRECT ${id}: "${input}" (→ ${e.canon}) credited as ${m.answer.display}`); }
      }
    }
    rows.push(r);
    tot.fp += r.fp; tot.cands += r.cands; tot.cross += r.cross; tot.typo += r.typo; tot.typoN += r.typoN; tot.red += r.red; tot.redN += r.redN;
  }
  const pct = (a, b) => b ? (100 * a / b).toFixed(1) + ' %' : '–';
  console.log('prompt          false/Wikipedia   false/other prompts   typos ok          redirects ok');
  for (const r of rows) console.log(`${r.id.padEnd(15)} ${String(r.fp).padStart(4)} / ${String(r.cands).padEnd(9)} ${String(r.cross).padStart(6)}               ${pct(r.typo, r.typoN).padStart(7)} of ${String(r.typoN).padEnd(5)} ${pct(r.red, r.redN).padStart(7)} of ${r.redN}`);
  console.log('—'.repeat(96));
  console.log(`FALSE MATCHES   Wikipedia non-answers: ${tot.fp} of ${tot.cands} (${pct(tot.fp, tot.cands)}) · other prompts' answers: ${tot.cross} of ${tot.crossN}`);
  console.log(`RECALL          typos: ${pct(tot.typo, tot.typoN)} (credited as a wrong answer: ${tot.typoWrong}) · first-letter typos: ${pct(tot.first, tot.firstN)}`);
  console.log(`                redirects: ${pct(tot.red, tot.redN)} (credited as a wrong answer: ${tot.redWrong})`);
  if (show) console.log('\n' + falses.join('\n'));
  return tot;
}

const G = load(opt('--app'));
if (args.includes('--fetch')){
  const data = await fetchData(G);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data) + '\n');
  console.log('wrote', path.relative(ROOT, DATA_FILE));
}
if (!fs.existsSync(DATA_FILE)){ console.error('No benchmark data yet: run with --fetch once.'); process.exit(1); }
measure(G, JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')), args.includes('--show'));
