// Dug Up — automated checks (Feature Spec 01).
// Runs the scripts of index.html (inline, and local <script src> files such as js/data/prompts.js and js/app.js)
// in a Node vm with a minimal DOM stub, then verifies the prompt data, answer matching, the daily rotation and rarity.
//
//   node tools/check.mjs                    run all checks (same as `npm test`)
//   node tools/check.mjs --write-snapshot   extend tools/rotation-snapshot.json to today + 14 days (never rewrites a dig)
//   node tools/check.mjs --freeze-season    write the next generated rotation season into ROTATION in the data script
//   node tools/check.mjs --freeze-until 2027-12-31   freeze seasons until they cover that date
//   node tools/check.mjs --add-prompt <id>  put a new prompt into every frozen season that hasn't started yet
//   node tools/check.mjs --html <file>      check another copy of index.html (its script files are read next to it)
//
// Built-in modules only: the site has no npm dependencies and this keeps it that way.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as loadGameMod from './load-game.mjs';
import { rankPrompt } from './rarity.mjs';
import { trimSummary, MAX_LEN, MIN_TIER } from './summaries.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SNAPSHOT_FILE = path.join(ROOT, 'tools', 'rotation-snapshot.json');
const ROUND_SIZE = 7;
const EPOCH = Date.UTC(2026, 10, 22);  // Dig #1 — must match index.html
const FREEZE_AHEAD_DAYS = 14;          // digs up to today + this are locked; frozen seasons must reach past them
const SEAM = ROUND_SIZE * 2;           // --add-prompt keeps new ids out of the first and last two digs of a season

// Adding a category is a deliberate decision (code standards: "eksisterende cat"), so it must be listed here.
const CATEGORIES = [
  'Ancient World', 'Art & Ideas', 'Asia', 'Curiosities', 'Empires', 'Exploration', 'Medieval',
  'Modern History', 'Myths & Legends', 'Places', 'Rogues & Outlaws', 'Rulers', 'Science & Invention',
  'Wars & Battles'
];

const argv = process.argv.slice(2);
const htmlArg = argv.indexOf('--html');
const HTML_FILE = htmlArg !== -1 ? path.resolve(argv[htmlArg + 1]) : path.join(ROOT, 'index.html');

/* ---------- loading index.html without a browser (tools/load-game.mjs) ---------- */

const pageScripts = (html, overrides) => loadGameMod.pageScripts(HTML_FILE, html, overrides);
const loadGame = (html, overrides) => loadGameMod.loadGame(HTML_FILE, html, overrides);

const HTML = fs.readFileSync(HTML_FILE, 'utf8');
const G = loadGame(HTML);
// The script that holds the ROTATION literal (js/data/prompts.js); --freeze-*, --add-prompt and the tests edit it.
const DATA = pageScripts(HTML).find(s => s.code.includes('const ROTATION = ['));
if (!DATA || !DATA.file) throw new Error('no local <script src> file with const ROTATION = [ found');
// Array.from: arrays made inside the vm have a different Array.prototype, which deepStrictEqual rejects.
const rotationOf = (g, n) => Array.from({ length: n }, (_, i) => Array.from(g.dailyPrompts(i + 1), p => p && p.id));

const digOfDate = (y, m, d) => Math.floor((Date.UTC(y, m - 1, d) - EPOCH) / 86400000) + 1;
const todayDig = () => { const d = new Date(); return digOfDate(d.getFullYear(), d.getMonth() + 1, d.getDate()); };
const isoToday = () => new Date().toISOString().slice(0, 10);
const frozenDigsOf = g => Math.floor(g.ROTATION.flat().length / ROUND_SIZE);
const dailyIds = g => Array.from(g.PROMPTS).filter(p => !g.PRACTICE_IDS.includes(p.id)).map(p => p.id);
// Same hash and RNG as js/app.js, so positions picked by --add-prompt are reproducible.
function hashStr(s){ let h = 2166136261 >>> 0; for (let i = 0; i < s.length; i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function mulberry32(a){ return function(){ a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

/* ---------- the rotation snapshot: an append-only record of locked digs (invariant 1) ---------- */

// Digs in the snapshot, and every dig up to today + FREEZE_AHEAD_DAYS, may never change.
const readSnapshot = () => fs.existsSync(SNAPSHOT_FILE) ? JSON.parse(fs.readFileSync(SNAPSHOT_FILE, 'utf8')).digs : [];
const lockedDigsOf = snap => Math.max(snap.length, todayDig() + FREEZE_AHEAD_DAYS);
// The snapshot extended to the locked range; throws if a dig already in it has changed.
function extendSnapshot(g, snap){
  const now = rotationOf(g, lockedDigsOf(snap));
  snap.forEach((dig, i) => { if (JSON.stringify(dig) !== JSON.stringify(now[i])) throw new Error(`Dig #${i + 1} differs from tools/rotation-snapshot.json — a locked dig has changed (invariant 1). Nothing was written.`); });
  return now;
}
const writeSnapshot = digs => fs.writeFileSync(SNAPSHOT_FILE, JSON.stringify({ digs }, null, 2) + '\n');

/* ---------- editing the ROTATION literal ---------- */

// Parses `const ROTATION = [ [ // note \n 'id','id',... \n], ... ];` and refuses anything it can't write back byte for byte.
function readRotation(src){
  const eol = src.includes('\r\n') ? '\r\n' : '\n', head = 'const ROTATION = [';
  const start = src.indexOf(head);
  if (start === -1) throw new Error(`${head} not found in ${DATA.name}`);
  const end = src.indexOf(eol + '];', start);
  if (end === -1) throw new Error('could not find the end of the ROTATION literal');
  const block = src.slice(start + head.length, end);
  const seasons = [...block.matchAll(/\[ \/\/ ([^\r\n]*)\r?\n([\s\S]*?)\r?\n\],/g)]
    .map(m => ({ note: m[1], ids: [...m[2].matchAll(/'([^']*)'/g)].map(x => x[1]) }));
  const r = { src, eol, start, end, head, seasons };
  if (writeRotation(r, seasons) !== src) throw new Error('the ROTATION literal has an unexpected format; edit it by hand or fix the parser');
  return r;
}
function writeRotation(r, seasons){
  const lit = seasons.map(s => {
    const rows = [];
    for (let i = 0; i < s.ids.length; i += ROUND_SIZE) rows.push('  ' + s.ids.slice(i, i + ROUND_SIZE).map(id => `'${id}'`).join(',') + ',');
    return `[ // ${s.note}${r.eol}${rows.join(r.eol)}${r.eol}],`;
  });
  return r.src.slice(0, r.start) + r.head + r.eol + lit.join(r.eol) + r.src.slice(r.end);
}

// Appends generated seasons (exactly what the app would generate): `count` of them, or until they reach `untilDig`.
// `g` must be loaded from `src`, so its generated seasons continue the frozen ones.
function freezeSeasons(src, g, { count = 0, untilDig = 0 }){
  const r = readRotation(src), seasons = r.seasons.map(s => ({ note: s.note, ids: s.ids.slice() })), added = [];
  let frozen = Math.floor(seasons.reduce((n, s) => n + s.ids.length, 0) / ROUND_SIZE);
  while (added.length < count || frozen < untilDig){
    const n = seasons.length + 1, ids = Array.from(g.seasonIds(n));
    if (!ids.length) throw new Error(`season ${n} came out empty`);
    seasons.push({ note: `season ${n} — seed 'dugup-order-v${n}', frozen ${isoToday()}`, ids });
    added.push(n);
    frozen = Math.floor(seasons.reduce((k, s) => k + s.ids.length, 0) / ROUND_SIZE);
  }
  return { src: writeRotation(r, seasons), added, frozenDigs: frozen };
}

// Puts `id` into every frozen season that starts after the locked digs, at a seeded position that keeps it out of
// the first and last SEAM slots (so the no-repeat-across-the-seam rule from Spec 02 still holds).
function addPromptTo(src, id, lockedDigs){
  const r = readRotation(src), seasons = r.seasons.map(s => ({ note: s.note, ids: s.ids.slice() }));
  if (seasons.some(s => s.ids.includes(id))) throw new Error(`"${id}" is already in ROTATION`);
  const lockedPos = lockedDigs * ROUND_SIZE, touched = [];
  let pos = 0;
  seasons.forEach((s, i) => {
    const startPos = pos; pos += s.ids.length;
    if (startPos < lockedPos) return;
    const room = s.ids.length - 2 * SEAM + 1;
    if (room < 1) throw new Error(`season ${i + 1} is too short to take a new prompt`);
    const at = SEAM + Math.floor(mulberry32(hashStr(`dugup-insert-${id}-${i + 1}`))() * room);
    s.ids.splice(at, 0, id);
    touched.push(i + 1);
  });
  if (!touched.length) throw new Error(`no frozen season starts after the locked digs (Dig #${lockedDigs}) — run --freeze-until first`);
  return { src: writeRotation(r, seasons), touched };
}

function cliFail(msg){ console.error(msg); process.exit(1); }

if (argv.includes('--freeze-season') || argv.includes('--freeze-until')){
  const opts = { count: 1 };
  if (argv.includes('--freeze-until')){
    const v = argv[argv.indexOf('--freeze-until') + 1] || '', m = v.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!m) cliFail('usage: node tools/check.mjs --freeze-until YYYY-MM-DD');
    opts.count = 0; opts.untilDig = digOfDate(+m[1], +m[2], +m[3]);
  }
  const res = freezeSeasons(DATA.code, G, opts);
  if (!res.added.length){ console.log(`Frozen seasons already cover Dig #1–#${res.frozenDigs}; nothing to do.`); process.exit(0); }
  fs.writeFileSync(DATA.file, res.src);
  console.log(`Froze season ${res.added.join(', ')} into ${DATA.file}; frozen seasons now cover Dig #1–#${res.frozenDigs}. Run the checks again.`);
  process.exit(0);
}

if (argv.includes('--add-prompt')){
  const id = argv[argv.indexOf('--add-prompt') + 1] || '';
  if (!G.PROMPTS.some(p => p.id === id)) cliFail(`unknown prompt id "${id}" — add the prompt to PROMPT_DATA first`);
  if (G.PRACTICE_IDS.includes(id)) cliFail(`"${id}" is a practice prompt and can never be in the daily rotation (invariant 4)`);
  try{
    const snap = extendSnapshot(G, readSnapshot());
    const res = addPromptTo(DATA.code, id, snap.length);
    const after = rotationOf(loadGame(HTML, { [DATA.name]: res.src }), snap.length);
    if (JSON.stringify(after) !== JSON.stringify(snap)) throw new Error('the insert would change a locked dig — nothing was written');
    writeSnapshot(snap);
    fs.writeFileSync(DATA.file, res.src);
    console.log(`Added "${id}" to season ${res.touched.join(', ')}. Dig #1–#${snap.length} are locked and unchanged. Run the checks again.`);
  }catch(e){ cliFail(e.message); }
  process.exit(0);
}

if (argv.includes('--write-snapshot')){
  try{
    const digs = extendSnapshot(G, readSnapshot());
    writeSnapshot(digs);
    console.log(`Wrote ${SNAPSHOT_FILE} (Dig #1–#${digs.length}).`);
  }catch(e){ cliFail(e.message); }
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

// Spec 09: typos and name variants that must keep working
test('matching: typos and longer names still match', () => {
  expectMatch('greekgods', 'Zues', 'Zeus');                          // swapped letters
  expectMatch('greekgods', 'Posiedon', 'Poseidon');
  expectMatch('composers', 'Betoven', 'Ludwig van Beethoven');      // the answer's length sets the typos allowed
  expectMatch('composers', 'Mozzart', 'Wolfgang Amadeus Mozart');
  expectMatch('composers', 'R. Strauss', 'Richard Strauss');         // initials pick the right Strauss
  expectMatch('mesogods', 'Ereshkigall', 'Ereshkigal');
  expectMatch('naval', 'Battle og Midway', 'Battle of Midway');      // misspelt little word
  expectMatch('naval', 'Batle of Trafalgar', 'Battle of Trafalgar');
  expectMatch('naval', 'Battl of Diu (1509)', 'Battle of Diu (1509)');
  expectMatch('wars', 'Third Punic War', 'Punic Wars');              // one war of a named series
  expectMatch('wars', 'Bucket War', 'War of the Bucket');            // words in another order
  expectMatch('rome', 'Marcus Ulpius Trajan', 'Trajan');             // full name ending in the answer
  expectMatch('engmon', 'Richard I of England', 'Richard I');
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

// Spec 09: real names that are not on the list must not be "corrected" into another answer
test('matching: a different real name is not credited as an answer', () => {
  expectMatch('mesogods', 'Kubaba', null);                           // not Zababa (other first letter)
  expectMatch('mesogods', 'Anzu', null);                             // not Apsu/Abzu (short name, other letter)
  expectMatch('mesogods', 'Abu', null);                              // three letters must be exact
  expectMatch('mesogods', 'Ishtar Gate', null);
  expectMatch('greekgods', 'Dike', null);                            // not Nike
  expectMatch('greekgods', 'Semele', null);                          // not Selene
  expectMatch('greekgods', 'Apollo 13', null);
  expectMatch('wars', 'French Revolutionary Wars', null);            // not the American Revolutionary War
  expectMatch('wars', 'Mexican War of Independence', null);
  expectMatch('wars', 'Cisplatine War', null);                       // not Platine War (whole words only)
  expectMatch('wars', 'Muscovite Civil War', null);                  // not the American Civil War
  expectMatch('wars', 'Thirteen Years War', null);                   // not the Thirty Years' War
  expectMatch('naval', 'Second Battle of the Philippine Sea', null);
  expectMatch('rome', 'Arch of Constantine', null);
  expectMatch('rome', 'Publius Aelius Hadrianus Augustus', null);   // Hadrian's full name, not Augustus
});

/* ---------- rotation (invariant 1) ---------- */

const SNAP = readSnapshot();
const LOCKED = lockedDigsOf(SNAP);
// Frozen seasons with the stream position they start at.
const seasonStarts = rot => { let pos = 0; return rot.map((ids, i) => { const s = { n: i + 1, ids, start: pos }; pos += ids.length; return s; }); };
const futureSeasons = g => seasonStarts(g.ROTATION).filter(s => s.start >= LOCKED * ROUND_SIZE);

test('rotation: every dig has 7 unique, non-practice prompts', () => {
  for (let n = 1; n <= frozenDigsOf(G) + 30; n++){
    const ids = G.dailyPrompts(n).map(p => p.id);
    assert.equal(ids.length, ROUND_SIZE, `dig ${n}`);
    assert.equal(new Set(ids).size, ROUND_SIZE, `dig ${n} repeats a prompt: ${ids.join(', ')}`);
    assert.ok(ids.every(id => !G.PRACTICE_IDS.includes(id)), `dig ${n} contains a practice prompt`);
  }
});

test('rotation: every dig in tools/rotation-snapshot.json is unchanged', () => {
  assert.ok(SNAP.length > 0, 'snapshot missing — run: node tools/check.mjs --write-snapshot');
  const now = rotationOf(G, SNAP.length);
  for (let i = 0; i < SNAP.length; i++){
    assert.deepEqual(now[i], SNAP[i], `Dig #${i + 1} changed — this would change a published daily dig (invariant 1)`);
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

test('rotation: every daily prompt is in a frozen season (run: node tools/check.mjs --add-prompt <id>)', () => {
  const listed = new Set(G.ROTATION.flat());
  assert.deepEqual(dailyIds(G).filter(id => !listed.has(id)), []);
});

test('rotation: every frozen season that has not started holds every daily prompt', () => {
  const daily = dailyIds(G).sort();
  for (const s of futureSeasons(G)) assert.deepEqual([...s.ids].sort(), daily, `season ${s.n} is missing or has extra prompts — run --add-prompt for new ones`);
});

test(`rotation: a frozen season starts after the locked digs (today + ${FREEZE_AHEAD_DAYS} days)`, () => {
  const frozen = frozenDigsOf(G);
  assert.ok(frozen >= LOCKED, `only Dig #1–#${frozen} are frozen, need #${LOCKED} — run: node tools/check.mjs --freeze-until <date a year ahead>`);
  assert.ok(futureSeasons(G).length > 0, `no frozen season starts after Dig #${LOCKED}, so --add-prompt has nowhere to put new prompts — run: node tools/check.mjs --freeze-until <date a year ahead>`);
});

test('rotation: --add-prompt leaves locked digs unchanged and spreads the prompt over future seasons', () => {
  const src = DATA.code, dataEnd = src.lastIndexOf('\n);', src.indexOf('const ROTATION = [')); // end of PROMPT_DATA
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const withPrompt = src.slice(0, dataEnd) + `,${eol}{id:'zzdummy', cat:'Rulers', q:'Name a test answer', hint:'test', list:\`${eol}1|Test Answer||test${eol}\`}` + src.slice(dataEnd);
  const { src: edited, touched } = addPromptTo(withPrompt, 'zzdummy', LOCKED);
  const g = loadGame(HTML, { [DATA.name]: edited });
  assert.ok(g.PROMPTS.some(p => p.id === 'zzdummy'), 'dummy prompt was not added');
  assert.deepEqual(rotationOf(g, LOCKED), rotationOf(G, LOCKED), 'a locked dig changed');
  const future = futureSeasons(g);
  assert.deepEqual(touched, future.map(s => s.n));
  for (const s of seasonStarts(g.ROTATION)){
    const at = s.ids.indexOf('zzdummy');
    if (!future.some(f => f.n === s.n)){ assert.equal(at, -1, `added to season ${s.n}, which has started`); continue; }
    assert.equal(s.ids.filter(id => id === 'zzdummy').length, 1, `season ${s.n}`);
    assert.ok(at >= SEAM && at <= s.ids.length - 1 - SEAM, `season ${s.n}: inserted at ${at}, inside the seam`);
  }
  for (let n = 1; n <= frozenDigsOf(g); n++) assert.equal(new Set(g.dailyPrompts(n).map(p => p.id)).size, ROUND_SIZE, `dig ${n} repeats a prompt`);
  assert.throws(() => addPromptTo(edited, 'zzdummy', LOCKED), /already in ROTATION/);
});

test('rotation: --freeze-until freezes exactly what the app would generate', () => {
  const res = freezeSeasons(DATA.code, loadGame(HTML), { count: 2 });
  const g = loadGame(HTML, { [DATA.name]: res.src });
  assert.equal(g.FROZEN_SEASONS, G.FROZEN_SEASONS + 2);
  const n = frozenDigsOf(g) + 30;
  assert.deepEqual(rotationOf(g, n), rotationOf(loadGame(HTML), n));
});

test('rotation: generated seasons are complete and never repeat a prompt across the seam', () => {
  const n = G.FROZEN_SEASONS + 1, prev = Array.from(G.seasonIds(n - 1)), next = Array.from(G.seasonIds(n));
  const daily = Array.from(G.PROMPTS).filter(p => !G.PRACTICE_IDS.includes(p.id)).map(p => p.id).sort();
  assert.deepEqual([...next].sort(), daily);
  const seam = prev.slice(-ROUND_SIZE * 2).filter(id => next.slice(0, ROUND_SIZE * 2).includes(id));
  assert.deepEqual(seam, [], `season ${n} starts with prompts from the end of season ${n - 1}`);
});

/* ---------- rarity (Spec 05) ---------- */

test('rarity: rankPrompt uses the quantile rule and needs enough answers with views', () => {
  const answers = Array.from({ length: 12 }, (_, i) => ({ display: 'A' + i, wiki: 'W' + i }));
  const views = {}; for (let i = 0; i < 10; i++) views['W' + i] = 1000 - i * 100; // W10, W11 have no views
  const r = rankPrompt(answers, views);
  assert.deepEqual(answers.slice(0, 10).map(a => r[a.display][0]), [1, 2, 2, 3, 3, 4, 4, 5, 6, 6]);
  assert.deepEqual(r.A0, [1, 1000]);
  assert.equal(r.A10, undefined);
  const few = {}; for (let i = 0; i < 6; i++) few['W' + i] = 10 + i; // 6 of 12 < max(3, floor(12 * 0.6))
  assert.equal(rankPrompt(answers, few), null);
});

test('rarity: js/data/rarity.js only lists existing prompts and answers, with tiers 1–6', () => {
  assert.ok(G.RARITY && G.RARITY.p, 'RARITY missing — run: node tools/rarity.mjs');
  assert.match(G.RARITY.updated, /^\d{4}-\d{2}-\d{2}$/);
  const bad = [];
  for (const id of Object.keys(G.RARITY.p)){
    const p = G.PROMPTS.find(x => x.id === id);
    if (!p){ bad.push(`unknown prompt "${id}"`); continue; }
    const displays = new Set(Array.from(p.answers, a => a.display));
    for (const [d, e] of Object.entries(G.RARITY.p[id])){
      if (!displays.has(d)) bad.push(`${id}: unknown answer "${d}" (renamed? run node tools/rarity.mjs)`);
      if (!(Number.isInteger(e[0]) && e[0] >= 1 && e[0] <= 6 && Number.isInteger(e[1]) && e[1] >= 0)) bad.push(`${id}: bad entry for "${d}"`);
    }
  }
  assert.deepEqual(bad, []);
});

test('rarity: the app uses RARITY tiers and views', () => {
  const [id, entries] = Object.entries(G.RARITY.p)[0], [d, [tier, views]] = Object.entries(entries)[0];
  const a = Array.from(G.PROMPTS.find(x => x.id === id).answers).find(x => x.display === d);
  assert.equal(a.liveTier, tier);
  assert.equal(a.views, views);
  const [y, m] = G.RARITY.updated.split('-');
  assert.equal(G.RARITY_MONTH, ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][+m - 1] + ' ' + y, 'badge month');
});

test('rarity: the app starts without rarity.js and keeps the offline tiers (invariant 7)', () => {
  const g = loadGame(HTML, { 'js/data/rarity.js': '' });
  assert.equal(g.RARITY, null);
  assert.ok(Array.from(g.PROMPTS).every(p => Array.from(p.answers).every(a => !a.liveTier && a.tier >= 1 && a.tier <= 6)));
  assert.equal(g.dailyPrompts(1).length, ROUND_SIZE);
});

test('rarity: the game itself never calls fetch (no Wikipedia requests while playing)', () => {
  for (const s of pageScripts(HTML)) assert.ok(!/\bfetch\s*\(/.test(s.code), `${s.name} calls fetch()`);
});

/* ---------- reveal summaries (Spec 06) ---------- */

test('summaries: trimSummary strips brackets, keeps one or two sentences and drops useless intros', () => {
  assert.equal(trimSummary('Henry VIII (28 June 1491 – 28 January 1547) was King of England from 22 April 1509 until his death in 1547. Henry is known for his six marriages.'),
    'Henry VIII was King of England from 22 April 1509 until his death in 1547. Henry is known for his six marriages.');
  assert.equal(trimSummary('Jackson\'s Valley campaign was Confederate Maj. Gen. Thomas J. Jackson\'s spring 1862 campaign through the Shenandoah Valley in Virginia during the American Civil War.'),
    'Jackson\'s Valley campaign was Confederate Maj. Gen. Thomas J. Jackson\'s spring 1862 campaign through the Shenandoah Valley in Virginia during the American Civil War.');
  const long = trimSummary('Someone was ' + 'a very long and winding description '.repeat(10) + 'of a person.');
  assert.ok(long.length <= MAX_LEN + 1 && long.endsWith('…'), long);
  assert.equal(trimSummary('Mercury may refer to:'), null);
  assert.equal(trimSummary('Ur was a city.'), null);                  // too short to be worth showing
  assert.equal(trimSummary('X (Greek: Κ; c. 980/c. 1000 was a king.'), null); // unbalanced bracket
  assert.equal(trimSummary(''), null);
});

test('summaries: js/data/summaries.js only lists existing rare-candidate answers, as short plain text', () => {
  const S = G.SUMMARIES;
  assert.ok(S && S.p, 'SUMMARIES missing — run: node tools/summaries.mjs');
  const bad = [];
  for (const id of Object.keys(S.p)){
    const p = G.PROMPTS.find(x => x.id === id);
    if (!p){ bad.push(`unknown prompt "${id}"`); continue; }
    const displays = new Set(Array.from(p.answers, a => a.display));
    for (const [d, t] of Object.entries(S.p[id])){
      if (!displays.has(d)) bad.push(`${id}: unknown answer "${d}"`);
      if (typeof t !== 'string' || t.length > MAX_LEN + 1 || /[<>()\[\]]/.test(t)) bad.push(`${id}: bad summary for "${d}"`);
    }
  }
  assert.deepEqual(bad, []);
});

test('summaries: the reveal shows a summary only for finds with tier >= 4, and nothing without the file', () => {
  const rare = [], common = [];
  for (const p of G.PROMPTS) for (const a of p.answers){
    const t = a.liveTier || a.tier;
    if (t >= MIN_TIER && G.summaryFor(p, a)) rare.push(a); else if (t < MIN_TIER) common.push([p, a]);
  }
  assert.ok(rare.length > 1000, `only ${rare.length} rare answers have a summary`);
  assert.ok(common.every(([p, a]) => G.summaryFor(p, a) === ''), 'a common answer got a summary');
  const g = loadGame(HTML, { 'js/data/summaries.js': '' });
  assert.ok(Array.from(g.PROMPTS).every(p => Array.from(p.answers).every(a => g.summaryFor(p, a) === '')));
});
