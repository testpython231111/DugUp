// Dug Up — automated checks (Feature Spec 01).
// Runs the inline scripts of index.html in a Node vm with a minimal DOM stub,
// then verifies the prompt data, answer matching and the daily rotation.
//
//   node tools/check.mjs                    run all checks (same as `npm test`)
//   node tools/check.mjs --write-snapshot   regenerate tools/rotation-snapshot.json
//   node tools/check.mjs --html <file>      check another copy of index.html
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

function loadGame(file){
  const html = fs.readFileSync(file, 'utf8');
  const scripts = [...html.matchAll(/<script(\s[^>]*)?>([\s\S]*?)<\/script>/g)]
    .filter(m => !/\ssrc=/.test(m[1] || ''))
    .map(m => m[2]);
  if (!scripts.some(s => s.includes('const PROMPT_DATA'))) throw new Error('PROMPT_DATA script not found in ' + file);

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
  scripts.forEach((src, i) => vm.runInContext(src, ctx, { filename: `index.html#script${i + 1}` }));
  if (!sandbox.__dugup) throw new Error('window.__dugup test hook was not set — did BOOT fail?');
  // PRACTICE_IDS lives inside the app IIFE; practicePrompts() drops unknown ids, which the length check catches.
  const hook = sandbox.__dugup;
  return { PROMPT_DATA: vm.runInContext('PROMPT_DATA', ctx), PRACTICE_IDS: hook.practicePrompts().map(p => p.id), ...hook };
}

const G = loadGame(HTML_FILE);
// Array.from: arrays made inside the vm have a different Array.prototype, which deepStrictEqual rejects.
const rotation = () => Array.from({ length: SNAPSHOT_DIGS }, (_, i) => Array.from(G.dailyPrompts(i + 1), p => p.id));

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
  const inOrder = Array.from(G.ORDER, i => G.PROMPTS[i].id).filter(id => G.PRACTICE_IDS.includes(id));
  assert.deepEqual(inOrder, []);
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
