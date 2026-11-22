// Dug Up — automated checks (Feature Spec 01).
// Runs the scripts of index.html (inline, and local <script src> files such as js/data/prompts.js and js/app.js)
// in a Node vm with a minimal DOM stub, then verifies the prompt data, answer matching and the daily rotation.
//
//   node tools/check.mjs                    run all checks (same as `npm test`)
//   node tools/check.mjs --write-snapshot   regenerate tools/rotation-snapshot.json
//   node tools/check.mjs --freeze-season    write the next generated rotation season into ROTATION in the data script
//   node tools/check.mjs --html <file>      check another copy of index.html (its script files are read next to it)
//
// Built-in modules only: the site has no npm dependencies and this keeps it that way.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SNAPSHOT_FILE = path.join(ROOT, 'tools', 'rotation-snapshot.json');
const SNAPSHOT_DIGS = 30;
const ROUND_SIZE = 7;
const EPOCH = Date.UTC(2026, 10, 22);  // Dig #1 — must match index.html
const FREEZE_AHEAD_DAYS = 14;          // frozen seasons must reach this far past today

// Adding a category is a deliberate decision (code standards: "eksisterende cat"), so it must be listed here.
const CATEGORIES = [
  'Ancient World', 'Art & Ideas', 'Asia', 'Curiosities', 'Empires', 'Exploration', 'Medieval',
  'Modern History', 'Myths & Legends', 'Places', 'Rogues & Outlaws', 'Rulers', 'Science & Invention',
  'Wars & Battles'
];

const argv = process.argv.slice(2);
const htmlArg = argv.indexOf('--html');
const HTML_FILE = htmlArg !== -1 ? path.resolve(argv[htmlArg + 1]) : path.join(ROOT, 'index.html');

/* ---------- loading index.html without a browser ---------- */

// A value that tolerates any use: every property is another stub, calling or constructing returns a stub,
// and coercion gives 0 / ''. Assigned properties are remembered so `el.x = 1; el.x` behaves.
function chameleon(){
  const props = new Map();
  return new Proxy(function(){}, {
    get(_, k){
      if (k === Symbol.toPrimitive) return hint => (hint === 'number' ? 0 : '');
      if (k === Symbol.iterator) return function*(){};
      if (k === 'then') return undefined; // never look like a Promise
      if (k === 'length') return 0;
      if (!props.has(k)) props.set(k, chameleon());
      return props.get(k);
    },
    set(_, k, v){ props.set(k, v); return true; },
    apply(){ return chameleon(); },
    construct(){ return chameleon(); }
  });
}

// The page's scripts in document order: inline ones, and local src files (relative paths, read from disk next to
// the html). Absolute/remote src (Vercel analytics) is skipped. `overrides` maps a src to replacement source text.
function pageScripts(html, overrides = {}){
  const base = path.dirname(HTML_FILE);
  return [...html.matchAll(/<script(\s[^>]*)?>([\s\S]*?)<\/script>/g)].map((m, i) => {
    const src = ((m[1] || '').match(/\ssrc="([^"]*)"/) || [])[1];
    if (src === undefined) return { name: `index.html#script${i + 1}`, code: m[2] };
    if (/^(\/|[a-z]+:)/i.test(src)) return null;
    return { name: src, file: path.join(base, src), code: src in overrides ? overrides[src] : fs.readFileSync(path.join(base, src), 'utf8') };
  }).filter(Boolean);
}

function loadGame(html, overrides = {}){
  const scripts = pageScripts(html, overrides);
  if (!scripts.some(s => s.code.includes('const PROMPT_DATA'))) throw new Error('PROMPT_DATA script not found');

  const mem = new Map();
  const noop = () => 0;
  const sandbox = {
    console,
    document: chameleon(),
    navigator: chameleon(),
    location: chameleon(),
    performance: { now: () => 0 },
    localStorage: {
      getItem: k => (mem.has(k) ? mem.get(k) : null),
      setItem: (k, v) => { mem.set(k, String(v)); },
      removeItem: k => { mem.delete(k); }
    },
    // Wikipedia is "down": the game must fall back to offline tiers (invariant 7).
    fetch: () => Promise.reject(new Error('offline (test)')),
    AbortController,
    URL, URLSearchParams, TextEncoder, TextDecoder,
    setTimeout: noop, clearTimeout: noop, setInterval: noop, clearInterval: noop,
    requestAnimationFrame: noop, cancelAnimationFrame: noop,
    addEventListener: noop, removeEventListener: noop,
    matchMedia: () => chameleon(),
    Image: function(){ return chameleon(); },
    FontFace: function(){ return chameleon(); },
    AudioContext: function(){ return chameleon(); }
  };
  sandbox.window = sandbox;
  sandbox.self = sandbox;
  const ctx = vm.createContext(sandbox);
  scripts.forEach(s => vm.runInContext(s.code, ctx, { filename: s.name }));
  if (!sandbox.__dugup) throw new Error('window.__dugup test hook was not set — did BOOT fail?');
  // PRACTICE_IDS lives inside the app IIFE; practicePrompts() drops unknown ids, which the length check catches.
  const hook = sandbox.__dugup;
  return {
    PROMPT_DATA: vm.runInContext('PROMPT_DATA', ctx),
    ROTATION: Array.from(vm.runInContext('typeof ROTATION === "undefined" ? [] : ROTATION', ctx), s => Array.from(s)),
    PRACTICE_IDS: hook.practicePrompts().map(p => p.id),
    ...hook
  };
}

const HTML = fs.readFileSync(HTML_FILE, 'utf8');
const G = loadGame(HTML);
// The script that holds the ROTATION literal (js/data/prompts.js); --freeze-season and the add-a-prompt test edit it.
const DATA = pageScripts(HTML).find(s => s.code.includes('const ROTATION = ['));
if (!DATA || !DATA.file) throw new Error('no local <script src> file with const ROTATION = [ found');
// Array.from: arrays made inside the vm have a different Array.prototype, which deepStrictEqual rejects.
const rotationOf = g => Array.from({ length: SNAPSHOT_DIGS }, (_, i) => Array.from(g.dailyPrompts(i + 1), p => p && p.id));
const rotation = () => rotationOf(G);

/* ---------- editing the ROTATION literal (used by --freeze-season and the add-a-prompt test) ---------- */

function rotationBounds(html){
  const start = html.indexOf('const ROTATION = [');
  if (start === -1) throw new Error(`const ROTATION = [ not found in ${DATA.name}`);
  const end = html.indexOf('\n];', start);           // closing bracket of ROTATION
  const lastSeasonEnd = html.lastIndexOf('\n],', end); // closing bracket of the last season
  if (end === -1 || lastSeasonEnd < start) throw new Error('could not parse the ROTATION literal');
  return { start, end, lastSeasonEnd };
}
function seasonLiteral(ids, n, note){
  const rows = [];
  for (let i = 0; i < ids.length; i += ROUND_SIZE) rows.push('  ' + ids.slice(i, i + ROUND_SIZE).map(id => `'${id}'`).join(',') + ',');
  return `\n[ // season ${n} — ${note}\n${rows.join('\n')}\n],`;
}
const todayDig = () => { const d = new Date(); return Math.floor((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - EPOCH) / 86400000) + 1; };

if (argv.includes('--freeze-season')){
  const n = G.FROZEN_SEASONS + 1, ids = Array.from(G.seasonIds(n));
  const src = DATA.code, b = rotationBounds(src);
  const out = src.slice(0, b.end) + seasonLiteral(ids, n, `seed 'dugup-order-v${n}', frozen ${new Date().toISOString().slice(0, 10)}`) + src.slice(b.end);
  fs.writeFileSync(DATA.file, out);
  console.log(`Froze season ${n} (${ids.length} prompts) into ${DATA.file}. Run the checks again.`);
  process.exit(0);
}

if (argv.includes('--write-snapshot')){
  fs.writeFileSync(SNAPSHOT_FILE, JSON.stringify({ digs: rotation() }, null, 2) + '\n');
  console.log(`Wrote ${SNAPSHOT_FILE} (Dig #1–#${SNAPSHOT_DIGS}).`);
  process.exit(0);
}

/* ---------- data ---------- */

test('data: prompt ids are unique, short and lowercase', () => {
  const seen = new Set();
  for (const p of G.PROMPT_DATA){
    assert.match(p.id, /^[a-z0-9]+$/, `bad id "${p.id}"`);
    assert.ok(!seen.has(p.id), `duplicate prompt id "${p.id}"`);
    seen.add(p.id);
  }
});

test('data: every prompt has a known category, a question and answers', () => {
  for (const p of G.PROMPTS){
    assert.ok(CATEGORIES.includes(p.cat), `${p.id}: unknown category "${p.cat}" (add it to CATEGORIES in tools/check.mjs if intended)`);
    assert.ok(p.q && p.q.trim(), `${p.id}: empty question`);
    assert.ok(p.answers.length > 0, `${p.id}: no answers`);
  }
});

test('data: every answer line is tier|Display|Wiki|aliases with tier 1–6', () => {
  for (const p of G.PROMPT_DATA){
    p.list.trim().split('\n').map(l => l.trim()).filter(Boolean).forEach(line => {
      const parts = line.split('|');
      assert.ok(parts.length >= 2 && parts.length <= 4, `${p.id}: malformed line "${line}"`);
      assert.match(parts[0].trim(), /^[1-6]$/, `${p.id}: tier must be 1–6 in "${line}"`);
      assert.ok(parts[1].trim(), `${p.id}: empty display name in "${line}"`);
    });
  }
});

test('data: display names are unique per prompt and Wikipedia titles are not empty', () => {
  for (const p of G.PROMPTS){
    const seen = new Set();
    for (const a of p.answers){
      assert.ok(!seen.has(a.display),`${p.id}: duplicate display "${a.display}"`);
      seen.add(a.display);
      assert.ok(a.wiki && a.wiki.trim() === a.wiki && a.wiki.length > 0, `${p.id}: bad Wikipedia title for "${a.display}"`);
      assert.ok(!a.wiki.includes('{}'), `${p.id}: unfilled wf template for "${a.display}"`);
    }
  }
});

test('data: no alias leads to two different answers in one prompt (unless in the ambiguity map)', () => {
  const clashes = [];
  for (const p of G.PROMPTS){
    const owner = new Map();
    for (const a of p.answers) for (const k of a.keys){
      const prev = owner.get(k.key);
      if (prev && prev !== a && !p.ambMap[k.key]) clashes.push(`${p.id}: "${k.key}" → "${prev.display}" and "${a.display}"`);
      if (!prev) owner.set(k.key, a);
    }
  }
  assert.deepEqual(clashes, []);
});

/* ---------- practice ---------- */

test('practice: PRACTICE_IDS exist and are never in the daily rotation', () => {
  const ids = new Set(G.PROMPTS.map(p => p.id));
  assert.equal(G.PRACTICE_IDS.length, ROUND_SIZE, 'a PRACTICE_IDS entry points to a prompt that does not exist');
  for (const id of G.PRACTICE_IDS) assert.ok(ids.has(id), `practice prompt "${id}" does not exist`);
  const inRotation = G.ROTATION.flat().filter(id => G.PRACTICE_IDS.includes(id));
  assert.deepEqual(inRotation, [], 'practice prompts listed in ROTATION');
});

/* ---------- matching ---------- */

function expectMatch(promptId, input, display){
  const p = G.PROMPTS.find(x => x.id === promptId);
  assert.ok(p, `prompt ${promptId} missing`);
  const r = G.matchAnswer(p, input);
  if (display === null) assert.notEqual(r.type, 'ok', `"${input}" should be rejected in ${promptId}, matched ${r.answer && r.answer.display}`);
  else {
    assert.equal(r.type, 'ok', `"${input}" should match "${display}" in ${promptId}, got ${r.type}`);
    assert.equal(r.answer.display, display, `"${input}" matched the wrong answer in ${promptId}`);
  }
}

test('matching: normalize treats roman numerals, ordinals and digits alike', () => {
  const key = s => G.normalize(s).key;
  assert.equal(key('Henry VIII'), key('henry 8'));
  assert.equal(key('Henry VIII'), key('Henry the Eighth'));
  assert.equal(key('Henry VIII'), key('HENRY 8th'));
  assert.equal(key('Ærø'), key('aero'));
  assert.notEqual(key('Henry VIII'), key('Henry VII'));
});

test('matching: known answers, aliases and typos', () => {
  expectMatch('engmon', 'henry 8', 'Henry VIII');
  expectMatch('engmon', 'King Henry VIII', 'Henry VIII');
  expectMatch('engmon', 'elizabeth 2', 'Elizabeth II');
  expectMatch('engmon', 'Elizabth II', 'Elizabeth II');      // one-letter typo
  expectMatch('engmon', 'bloody mary', 'Mary I');
  expectMatch('engmon', 'lionheart', 'Richard I');
  expectMatch('rome', 'octavian', 'Augustus');
  expectMatch('rome', 'heliogabalus', 'Elagabalus');
  expectMatch('rome', 'Emperor Nero', 'Nero');
  expectMatch('rome', 'marcus aurelis', 'Marcus Aurelius');  // typo
  // Two Demosthenes: the plain name is the famous orator; the general needs a qualifier.
  // ('general' is a stop word, so "demosthenes general" can't tell them apart.)
  expectMatch('greekleaders', 'Demosthenes', 'Demosthenes');
  expectMatch('greekleaders', 'Demosthenes son of Alcisthenes', 'Demosthenes, son of Alcisthenes');
  expectMatch('greekleaders', 'demosthenes pylos', 'Demosthenes, son of Alcisthenes');
});

test('matching: wrong answers are rejected', () => {
  expectMatch('engmon', 'Napoleon', null);
  expectMatch('engmon', 'Henry IX', null);    // digits must match exactly
  expectMatch('rome', 'Cleopatra', null);
  expectMatch('rome', 'Charlemagne', null);
  const p = G.PROMPTS.find(x => x.id === 'rome');
  assert.equal(G.matchAnswer(p, '   ').type, 'amb');
  assert.equal(G.matchAnswer(p, 'the').type, 'amb'); // only stop words
});

/* ---------- rotation (invariant 1) ---------- */

test('rotation: every dig has 7 unique, non-practice prompts', () => {
  for (let n = 1; n <= SNAPSHOT_DIGS; n++){
    const ids = G.dailyPrompts(n).map(p => p.id);
    assert.equal(ids.length, ROUND_SIZE, `dig ${n}`);
    assert.equal(new Set(ids).size, ROUND_SIZE, `dig ${n} repeats a prompt: ${ids.join(', ')}`);
    assert.ok(ids.every(id => !G.PRACTICE_IDS.includes(id)), `dig ${n} contains a practice prompt`);
  }
});

test('rotation: Dig #1–#30 match tools/rotation-snapshot.json', () => {
  assert.ok(fs.existsSync(SNAPSHOT_FILE), 'snapshot missing — run: node tools/check.mjs --write-snapshot');
  const snap = JSON.parse(fs.readFileSync(SNAPSHOT_FILE, 'utf8'));
  const now = rotation();
  for (let i = 0; i < SNAPSHOT_DIGS; i++){
    assert.deepEqual(now[i], snap.digs[i], `Dig #${i + 1} changed — this would change a published daily dig (invariant 1)`);
  }
});

test('rotation: ROTATION only lists known prompts, once per season', () => {
  const ids = new Set(G.PROMPTS.map(p => p.id));
  assert.ok(G.ROTATION.length >= 1, 'ROTATION is missing or empty');
  G.ROTATION.forEach((season, i) => {
    const unknown = season.filter(id => !ids.has(id));
    assert.deepEqual(unknown, [], `season ${i + 1} lists unknown prompt ids (typo, or the prompt was removed)`);
    const dupes = season.filter((id, j) => season.indexOf(id) !== j);
    assert.deepEqual(dupes, [], `season ${i + 1} lists a prompt twice`);
  });
});

test('rotation: every daily prompt is in a frozen season (add new ids to the end of the last season)', () => {
  const listed = new Set(G.ROTATION.flat());
  const missing = Array.from(G.PROMPTS).filter(p => !G.PRACTICE_IDS.includes(p.id) && !listed.has(p.id)).map(p => p.id);
  assert.deepEqual(missing, []);
});

test(`rotation: frozen seasons reach at least ${FREEZE_AHEAD_DAYS} days past today`, () => {
  const frozenDigs = Math.floor(G.ROTATION.flat().length / ROUND_SIZE), need = todayDig() + FREEZE_AHEAD_DAYS;
  assert.ok(frozenDigs >= need, `only Dig #1–#${frozenDigs} are frozen, need #${need} — run: node tools/check.mjs --freeze-season`);
});

test('rotation: adding a prompt at the end of the last season leaves Dig #1–#30 unchanged', () => {
  const src = DATA.code, b = rotationBounds(src);
  const dataEnd = src.lastIndexOf('\n);', b.start); // end of the PROMPT_DATA array
  const dummy = ",\n{id:'zzdummy', cat:'Rulers', q:'Name a test answer', hint:'test', list:`\n1|Test Answer||test\n`}";
  const edited = src.slice(0, dataEnd) + dummy + src.slice(dataEnd, b.lastSeasonEnd) + "\n  'zzdummy'," + src.slice(b.lastSeasonEnd);
  const g = loadGame(HTML, { [DATA.name]: edited });
  assert.ok(g.PROMPTS.some(p => p.id === 'zzdummy'), 'dummy prompt was not added');
  assert.deepEqual(rotationOf(g), rotation());
});

test('rotation: generated seasons are complete and never repeat a prompt across the seam', () => {
  const n = G.FROZEN_SEASONS + 1, prev = Array.from(G.seasonIds(n - 1)), next = Array.from(G.seasonIds(n));
  const daily = Array.from(G.PROMPTS).filter(p => !G.PRACTICE_IDS.includes(p.id)).map(p => p.id).sort();
  assert.deepEqual([...next].sort(), daily);
  const seam = prev.slice(-ROUND_SIZE * 2).filter(id => next.slice(0, ROUND_SIZE * 2).includes(id));
  assert.deepEqual(seam, [], `season ${n} starts with prompts from the end of season ${n - 1}`);
});
