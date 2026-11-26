// Dug Up — suggests new answers and aliases from Wikipedia, for the owner to review (Feature Specs 10 and 11).
//
//   node tools/suggest-answers.mjs <id> [<id> ...]   fetch and write tools/suggestions/<id>.txt (~1–3 min per prompt)
//     --all                                          every prompt
//     --aliases-only                                 only new aliases for the answers there are (works without SOURCES)
//     --min <views>                                  views over 60 days a new answer needs to be suggested as active
//   node tools/suggest-answers.mjs --apply <id> [...] | --apply --all
//                                                    add the active lines of the reviewed files to js/data/prompts.js
//
// Nothing goes into the game without review: the suggestion file lists candidates in PROMPT_DATA format, and only
// --apply writes, after checking that every new name and alias leads to its own answer. Aliases turned down in a
// review go into tools/alias-rejects.json, so they are not suggested again. Built-in modules only.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadGame } from './load-game.mjs';
import { getJSON, sleep } from './rarity.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HTML_FILE = path.join(ROOT, 'index.html');
const DATA_FILE = path.join(ROOT, 'js', 'data', 'prompts.js');
const DATA_SRC = 'js/data/prompts.js';                  // the script's src in index.html, for loadGame overrides
const OUT_DIR = path.join(ROOT, 'tools', 'suggestions');
const API = 'https://en.wikipedia.org/w/api.php';
const DAYS = 60;
const PAUSE_MS = 200;
const MIN_ALIAS_VIEWS = 20;                             // a redirect people actually use (over 60 days)
const MAX_ALIASES = 4;                                  // per answer
const MAX_ACTIVE = 120;                                 // active new answers per file; the rest is commented out

// Where candidates come from, per prompt.
//   cats, lists: Wikipedia categories (direct members) and list pages (their article links)
//   title:  keep only articles whose title (without a parenthesis, and with more than one word) matches;
//           the prompt's aliases must match it too ("Boxer Uprising", not "Treaty of Villafranca")
//   desc:   links from a list page are kept only if the short description matches this AND region
//   region: a candidate whose description doesn't mention it is commented out, with a note
//   before: drop candidates whose title (or else description) starts with this year or later
//   groups: sections for choices the owner makes once for many lines: {label, test(row), off}
//   extra:  a separate section from other categories, commented out (e.g. demons for a gods prompt)
// Full lists of rulers (Spec 12) also use:
//   full:     everyone on the list is a right answer: no view threshold, no cap, no NOT_ANSWER check
//   keep:     (title, desc) → whether a list link is one of the rulers (instead of desc/region)
//   endAfter: drop candidates whose description ends in this year or earlier ("Roman emperor from 379 to 395")
//   display:  title → the name shown in the game ("Pope Sixtus IV" → "Sixtus IV")
// Every prompt also comments out candidates that look like something else than an answer (NOT_ANSWER).
const SOURCES = {
  mesogods: {
    cats: ['Category:Mesopotamian deities', 'Category:Mesopotamian gods', 'Category:Mesopotamian goddesses', 'Category:Mesopotamian health goddesses'],
    lists: ['List of Mesopotamian deities'],
    desc: /\b(god|goddess|gods|goddesses|deity|deities|divine|divinity)\b/i,
    region: /mesopotamia|sumer|akkad|babylon|assyri|chaldea/i,
    extra: { label: 'Demoner og sagnvesener. Spørsmålet sier «god or goddess», så de er kommentert ut.',
             cats: ['Category:Mesopotamian demons', 'Category:Mesopotamian legendary creatures'] }
  },
  wars: {
    lists: ['List of wars: before 1000', 'List of wars: 1000–1499', 'List of wars: 1500–1799', 'List of wars: 1800–1899'],
    title: /\b(War|Wars|Rebellion|Revolt|Uprising|Conquest|Crusade|Invasion|Insurrection|Conflict|Revolution|Mutiny|Rising)\b/,
    before: 1900,
    groups: [
      { label: 'VALG 1 — Enkeltkriger i en serie. I dag godtas de som serien («Second Punic War» gir Punic Wars). ' +
               'Tas de med, blir de egne svar med egen sjeldenhet og egen plass i museet. Anbefalt: ta med (aktive nå).',
        test: r => r.series, off: false },
      { label: 'VALG 2 — Revolusjoner uten «war» i navnet. Spørsmålet sier «war». ' +
               'Anbefalt: bare de som var væpnet krig, f.eks. Haitian Revolution (kommentert ut nå).',
        test: r => /\bRevolution\b/i.test(r.display) && !/\bWars?\b/i.test(r.display), off: true }
    ]
  },
  pope: {
    lists: ['List of popes'],
    full: true,
    keep: (t, d) => /^Pope \p{Lu}/u.test(t) && /^(\d+\w* )?(Head of (the )?(Roman )?Catholic Church|Bishop of Rome)\b/i.test(d),
    display: t => t.replace(/^Pope /, '')
  },
  japanemp: {
    lists: ['List of emperors of Japan'],
    full: true,
    keep: (t, d) => /^(Emperor|Empress) \p{Lu}/u.test(t) && !/^(Emperor|Empress) of /.test(t) &&
                    /((emperor|empress) of Japan|Northern Emperor|Great King of Yamato|empress regnant)/i.test(d) && !/^Wife of/i.test(d),
    display: t => t.replace(/^Emperor /, ''),
    groups: [
      { label: 'VALG — Nordhoffets keisere (1331–1392). De regnes ikke med blant de 126, men kalles keisere. Anbefalt: ta med (aktive nå).',
        test: r => /Northern Emperor/i.test(r.desc), off: false },
      { label: 'VALG — Regenter og keisere som bare «noen ganger» regnes med (f.eks. Jingū). Anbefalt: ikke ta med (kommentert ut).',
        test: r => /^Empress Jingū$/.test(r.title) || !/^((\d+\w* )?(Legendary (first )?)?(emperor|empress) of Japan|Northern Emperor|Great King of Yamato)/i.test(r.desc), off: true }
    ]
  },
  byzantine: {
    lists: ['List of Byzantine emperors'],
    full: true,
    // "Roman emperor" alone is left out: the ones from 395 on are answers already, the rest are western or earlier
    keep: (t, d) => /^(Byzantine (co-)?(emperor|empress)|Eastern Roman emperor|Emperor of Nicaea)\b/i.test(d),
    endAfter: 395,
    before: 1454,
    groups: [
      // their descriptions say "Byzantine emperor", but they reigned only beside a senior emperor
      { label: 'VALG — Medkeisere som aldri styrte alene. Anbefalt: ikke ta med (kommentert ut).',
        test: r => /co-emperor/i.test(r.desc) || /^(Michael IX Palaiologos|Christopher Lekapenos|Constantine Lekapenos|Stephen Lekapenos|Konstantios Doukas|Marcus \(son of Basiliscus\)|Nikephoros Diogenes|Leo Diogenes|Constantine \(son of .*\)|Constantine Doukas \(co-emperor\))$/.test(r.title), off: true },
      { label: 'VALG — Keiserinner. Noen styrte selv (Irene, Zoe og Theodora er svar i dag), andre var bare gift med keiseren (Theodora, Justinians kone, er «nope»). Ta med bare dem som styrte (kommentert ut).',
        test: r => /empress/i.test(r.desc), off: true },
      { label: 'VALG — Keisere i Nikaia 1205–1261 (eksil etter 1204). Wikipedia regner dem med. Anbefalt: ta med (aktive nå).',
        test: r => /Nicaea/i.test(r.desc), off: false }
    ]
  },
  france: {
    lists: ['List of French monarchs', 'List of Frankish kings'],
    full: true,
    // not: Carolingian emperors who were not kings in the west (Lothair I), kings of Aquitaine, junior co-kings
    // ("Philip of France (1116–1131)")
    keep: (t, d) => /^(Disputed )?(King of (France|the Franks|West Francia|the French|France and Navarre|Neustria|Austrasia|Burgundy|Paris|Orl[eé]ans|Soissons|Metz|Reims)|Emperor of the French|Merovingian king|(\d+\w*|Fifth|Sixth|Seventh)-century Frankish (king|ruler)|Frankish king)\b/i.test(d) &&
                    !/Aquitaine/.test(t + ' ' + d) && !/\(\d{3,4}–\d{3,4}\)$/.test(t),
    before: 1871,
    display: t => t.replace(/ of (France|the Franks)$/, ''),
    groups: [
      { label: 'VALG — Frankiske småkonger før Clovis (Ragnachar, Chararic …). Bare Chlodio, Merovech og Childeric I er forfedrene til Clovis. Anbefalt: ikke ta med (kommentert ut).',
        test: r => /(Fifth|5th)-century/i.test(r.desc) && r.title !== 'Chlodio' || /^(Theodemer|Sigobert the Lame)/.test(r.title), off: true },
      { label: 'VALG — Merovingerkonger over et delrike (Austrasia, Neustria, Burgund, Paris, Orléans, Soissons, Metz). Anbefalt: ikke ta med (kommentert ut).',
        test: r => /\b(Austrasia|Neustria|Burgundy|Paris|Orl[eé]ans|Soissons|Metz|Reims)\b/i.test(r.desc) || /Merovingian king of/i.test(r.desc) || r.title === 'Childebert the Adopted', off: true }
    ]
  }
};

/* ---------- Wikipedia ---------- */
async function query(params, collect){
  let cont = null, guard = 0;
  do {
    const p = new URLSearchParams({ format: 'json', formatversion: '2', ...params });
    if (cont) Object.keys(cont).forEach(k => p.set(k, cont[k]));
    const j = await getJSON(API + '?' + p.toString());
    collect(j); cont = j.continue || null;
    guard++; await sleep(PAUSE_MS);
  } while (cont && guard < 60);
}
async function categoryPages(cat){
  const out = [];
  await query({ action: 'query', list: 'categorymembers', cmtitle: cat, cmnamespace: '0', cmlimit: '500' }, j => (j.query.categorymembers || []).forEach(m => out.push(m.title)));
  return out;
}
async function listLinks(page){
  const out = [];
  await query({ action: 'parse', page, prop: 'links' }, j => ((j.parse && j.parse.links) || []).forEach(x => { if (x.ns === 0 && x.exists) out.push(x.title); }));
  return out;
}
const sumViews = pv => { let s = 0; for (const k in pv || {}) s += pv[k] || 0; return s; };
// For each title: the article it leads to, its short description, page views over DAYS and its redirects.
async function pageInfo(titles){
  const out = {};
  for (let i = 0; i < titles.length; i += 50){
    const batch = titles.slice(i, i + 50), norm = {}, red = {}, pages = {};
    await query({ action: 'query', titles: batch.join('|'), redirects: '1', prop: 'description|pageviews|redirects|pageprops',
                  ppprop: 'disambiguation', pvipdays: String(DAYS), rdnamespace: '0', rdlimit: 'max', rdprop: 'title|fragment' }, j => {
      const q = j.query || {};
      (q.normalized || []).forEach(x => { norm[x.from] = x.to; });
      (q.redirects || []).forEach(x => { red[x.from] = x.to; });
      (q.pages || []).forEach(pg => {
        const e = pages[pg.title] || (pages[pg.title] = { missing: !!pg.missing, desc: '', views: null, redirects: [], sections: 0, disamb: false });
        if (pg.description) e.desc = pg.description;
        if (pg.pageviews && e.views === null) e.views = sumViews(pg.pageviews);
        if (pg.pageprops && 'disambiguation' in pg.pageprops) e.disamb = true;
        // a redirect to a section of the article names a part of it ("Treaty of Villafranca" → the war's #Peace)
        (pg.redirects || []).forEach(r => { if (r.fragment) e.sections++; else e.redirects.push(r.title); });
      });
    });
    batch.forEach(t => { let c = norm[t] || t; c = red[c] || c; const pg = pages[c]; if (pg && !pg.missing) out[t] = { canon: c, ...pg, views: pg.views || 0 }; });
    process.stdout.write(`\r  ${Math.min(i + 50, titles.length)}/${titles.length} pages`);
  }
  process.stdout.write('\n');
  return out;
}
// Page views of the redirect pages themselves (how often people use that name), and how Wikipedia tags them
// ("Redirects from alternative names", "Redirects from subtopics", ...)
async function redirectInfo(titles){
  const views = {}, tags = {};
  for (let i = 0; i < titles.length; i += 50){
    await query({ action: 'query', titles: titles.slice(i, i + 50).join('|'), prop: 'pageviews|categories', pvipdays: String(DAYS),
                  clshow: 'hidden', cllimit: 'max' }, j => {
      ((j.query && j.query.pages) || []).forEach(pg => {
        if (pg.pageviews && views[pg.title] == null) views[pg.title] = sumViews(pg.pageviews);
        (pg.categories || []).forEach(c => { if (c.title.startsWith('Category:Redirects ')) (tags[pg.title] = tags[pg.title] || []).push(c.title.slice(19)); });
      });
    });
    if (titles.length > 200) process.stdout.write(`\r  ${Math.min(i + 50, titles.length)}/${titles.length} redirects`);
  }
  if (titles.length > 200) process.stdout.write('\n');
  return { views, tags };
}

/* ---------- PROMPT_DATA text ---------- */
// The answer list of one prompt inside prompts.js: [start, end) of the text between list:` and the closing `
function listRange(src, id){
  const at = src.indexOf(`{id:'${id}',`);
  if (at < 0) throw new Error(`prompt ${id} not found in ${DATA_SRC}`);
  const start = src.indexOf('list:`', at) + 'list:`'.length;
  const end = src.indexOf('`', start);
  if (start < 'list:`'.length || end < 0) throw new Error(`answer list of ${id} not found`);
  return { start, end };
}
// New answer lines go after the last line of the same or a lower tier; aliases are appended to their answer's line.
// Removals ([display, [alias …]]) take aliases off an answer: names it shares with new answers (Spec 12).
function insertIntoList(src, id, newLines, aliasAdds, removals = []){
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const { start, end } = listRange(src, id);
  const lines = src.slice(start, end).split(eol);            // first and last are the empty bits next to the backticks
  for (const [display, aliases] of removals){
    const i = lines.findIndex(l => l.split('|')[1] !== undefined && l.split('|')[1].trim() === display);
    if (i < 0) throw new Error(`${id}: no answer called "${display}" to remove aliases from`);
    const parts = lines[i].split('|'), had = parts[3] ? parts[3].split(';') : [];
    const missing = aliases.filter(a => !had.includes(a));
    if (missing.length) throw new Error(`${id}: "${display}" has no alias ${missing.map(a => `"${a}"`).join(', ')}`);
    parts[3] = had.filter(a => !aliases.includes(a)).join(';');
    lines[i] = (parts[3] ? parts.join('|') : parts.slice(0, 3).join('|')).replace(/\|+$/, '');
  }
  for (const [display, aliases] of aliasAdds){
    const i = lines.findIndex(l => l.split('|')[1] !== undefined && l.split('|')[1].trim() === display);
    if (i < 0) throw new Error(`${id}: no answer called "${display}" for new aliases`);
    const parts = lines[i].split('|');
    while (parts.length < 4) parts.push('');
    parts[3] = parts[3] ? parts[3] + ';' + aliases.join(';') : aliases.join(';');
    lines[i] = parts.join('|');
  }
  for (const line of newLines){
    const t = +line.split('|')[0];
    let at = 0;
    lines.forEach((l, i) => { const lt = +l.split('|')[0]; if (lt && lt <= t) at = i + 1; });
    if (!at) at = 1;
    lines.splice(at, 0, line);
  }
  return src.slice(0, start) + lines.join(eol) + src.slice(end);
}
// Every new display and alias must lead to its own answer, and no name may lead to two answers.
function validate(G, id, displays, aliasPairs){
  const errors = [];
  const p = G.PROMPTS.find(x => x.id === id);
  const seen = new Set();
  for (const a of p.answers){ if (seen.has(a.display)) errors.push(`two answers called "${a.display}"`); seen.add(a.display); }
  const owner = new Map();
  for (const a of p.answers) for (const k of a.keys){
    const prev = owner.get(k.key);
    if (prev && prev !== a && !p.ambMap[k.key]) errors.push(`"${k.key}" leads to both "${prev.display}" and "${a.display}"`);
    if (!prev) owner.set(k.key, a);
  }
  const check = (input, display) => { const m = G.matchAnswer(p, input); if (m.type !== 'ok' || m.answer.display !== display) errors.push(`"${input}" should give "${display}", gives ${m.type === 'ok' ? '"' + m.answer.display + '"' : m.type}`); };
  displays.forEach(d => check(d, d));
  aliasPairs.forEach(([d, al]) => check(al, d));
  return errors;
}
const loadWith = src => loadGame(HTML_FILE, fs.readFileSync(HTML_FILE, 'utf8'), { [DATA_SRC]: src });

// Names without a number that several answers share ("Sixtus" for Sixtus I–V, "Michael" for Michael I Rangabe …):
// normalized key → {base, answers}. The game should ask which one (amb) rather than pick one.
const baseOf = d => { const m = d.match(/^(.+?)\s+[IVXL]+\b/); return m ? m[1] : null; };
function sharedBases(G, p){
  const m = new Map();
  p.answers.forEach(a => {
    const b = baseOf(a.display); if (!b) return;
    const n = G.normalize(b); if (!n.letters || n.digits) return;
    const e = m.get(n.key) || { base: b, answers: [] }; e.answers.push(a.display); m.set(n.key, e);
  });
  for (const [k, e] of m) if (e.answers.length < 2) m.delete(k);
  return m;
}
// The aliases of one answer as written in PROMPT_DATA (4th field)
function rawAliases(G, id, display){
  const d = G.PROMPT_DATA.find(x => x.id === id);
  const line = d.list.split(/\r?\n/).find(l => (l.split('|')[1] || '').trim() === display);
  return line && line.split('|')[3] ? line.split('|')[3].split(';').map(s => s.trim()).filter(Boolean) : [];
}
// The answer that has exactly this name as a key (an alias such as "justinian" on Justinian I), if any
const ownerOf = (p, key) => p.answers.find(a => a.keys.some(k => k.key === key));
// What to do about each shared name in p1 (after) compared with p0 (before):
//   amb:      [key, base, message] to add, so the game asks which one
//   clashes:  a name that was one answer's alias and is now shared by new answers (the owner must choose)
//   keep:     keys the owner chose to leave with their one answer ("=|clovis": Clovis is Clovis I, as Justinian is Justinian I)
function ambPlan(G0, p0, G1, p1, keep = new Set()){
  const before = sharedBases(G0, p0), after = sharedBases(G1, p1), amb = [], clashes = [];
  for (const [k, e] of after){
    if (p1.ambMap[k] || p1.nopeList.some(x => x.n.key === k)) continue;   // asked already, or "nope" ("Constantine")
    const owner = ownerOf(p1, k);
    if (owner){
      if (!before.has(k) && !keep.has(k)){
        const raw = rawAliases(G1, p1.id, owner.display).find(a => G1.normalize(a).key === k);
        clashes.push({ key: k, base: e.base, owner: owner.display, alias: raw, answers: e.answers });
      }
      continue;
    }
    amb.push([e.base.toLowerCase(), e.base, `Which ${e.base}? Add a number.`]);
  }
  return { amb, clashes };
}
// Adds amb entries ([key, message]) to one prompt's amb:{…}, or gives it one
function insertAmb(src, id, entries){
  if (!entries.length) return src;
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const { end } = listRange(src, id);
  let next = src.indexOf(eol + "{id:'", end); if (next < 0) next = src.indexOf(eol + ']', end);
  const close = src.lastIndexOf('}', next);                  // the prompt object's closing brace
  const block = src.slice(end, close);
  const text = entries.map(([k, msg]) => ` '${k}':'${msg}'`);
  const ai = block.indexOf('amb:{');
  if (ai >= 0){
    const ac = src.indexOf('}', end + ai);                     // amb's own closing brace (messages hold no braces)
    if (src.slice(ac + 1, close).trim()) throw new Error(`${id}: amb:{…} is not the last property; add these by hand`);
    const body = src.slice(end + ai + 5, ac).replace(/\s+$/, '');
    return src.slice(0, end + ai + 5) + body + ',' + eol + text.join(',' + eol) + eol + src.slice(ac);
  }
  return src.slice(0, close) + ',' + eol + 'amb:{' + eol + text.join(',' + eol) + eol + '}' + src.slice(close);
}

/* ---------- suggest ---------- */
const clean = t => t.replace(/\s*\(([^)]*)\)\s*$/, (m, inner) => /\d/.test(inner) ? m : '');   // keep "(1768–1774)", drop "(god)"
const firstYear = s => { const m = (s || '').match(/\b(\d{3,4})\b/); return m ? +m[1] : null; };
const lastYear = s => { const m = (s || '').match(/\b\d{1,4}\b/g); return m ? +m[m.length - 1] : null; };   // "from AD 54 to 68" → 68
const fmt = n => n.toLocaleString('en-US').replace(/,/g, ' ');
const aliasText = t => clean(t).toLowerCase();
const usableName = t => !/[:]|^List of|^Lists of|^Timeline of|^History of/i.test(t) && t.length <= 45 && t.split(/\s+/).length <= 6;
// characters that would break the answer list (a template literal of |-separated lines) or the alias list (;)
const UNSAFE = /[`\\$|;]/;
// looks like something else than an answer: a person, place, text or group page ("King of Ur", "Kassite deities")
const NOT_ANSWER = { desc: /\b(king|ruler|city|temple|texts?|word|name|sign|list|planet|artifact|office|tree|cuneiform|laws)\b/i,
                     title: /\b(deities|gods|mythology|religions?|myths?)$|^(Cult|Temple|Family|Folk) /i };
// What kind of thing a name is, from its words. A redirect may only be of kinds its answer has, or kinds that are
// common among the prompt's answers: "Battle of Melouna" is not a war, "Ishtar Gate" not a god, "Assassination of
// Lincoln" not a person, but "Segovia Castle" is fine for a castle prompt. Words not listed here say nothing.
const KINDS = {
  conflict: 'war wars rebellion rebellions revolt revolts uprising uprisings rising risings revolution revolutions insurrection conflict conflicts crusade crusades invasion invasions conquest conquests campaign campaigns mutiny feud intervention occupation insurgency',
  battle: 'battle battles siege sieges raid raids skirmish engagement landing landings offensive operation campaign campaigns',
  treaty: 'treaty treaties peace convention agreement accord accords pact act declaration proclamation charter edict capitulation armistice truce compromise protocol concordat ultimatum',
  force: 'army armies navy fleet regiment legion corps brigade militia league alliance coalition',
  castle: 'castle castles palace palaces fortress fortresses fort forts citadel chateau schloss burg festung alcazar kremlin',
  church: 'temple temples cathedral church mosque abbey monastery basilica shrine chapel minster synagogue',
  bridge: 'bridge bridges brucke canal canals aqueduct',
  wall: 'wall walls gate gates rampart',
  tomb: 'tomb tombs mausoleum pyramid pyramids necropolis',
  institution: 'library university college academy school museum observatory',
  monument: 'statue colossus monument column arch obelisk',
  venue: 'amphitheatre amphitheater stadium circus forum tower',
  polity: 'empire empires kingdom kingdoms dynasty dynasties sultanate caliphate khanate republic confederation confederacy duchy principality',
  place: 'city cities town village province region county island river mountain street square district heights hill hills ridge plateau pass valley bay cape lake forest harbour harbor',
  work: 'book books novel poem poems epic saga hymn song songs opera symphony manuscript codex gospel chronicle treatise essay speech address painting portrait sculpture',
  group: 'family families clan tribe tribes people peoples descendants house',
  event: 'massacre genocide election trial execution murder disappearance controversy affair incident crisis scandal disaster sinking fire flood earthquake pandemic epidemic plague tax expedition',
  meta: 'list lists timeline history causes aftermath origins legacy events death assassination funeral burial reign cult worship religion mythology myth myths legend legends deities gods theatre theater phase'
};
const KIND_OF = new Map();
for (const [kind, words] of Object.entries(KINDS)) words.split(' ').forEach(w => KIND_OF.set(w, [...(KIND_OF.get(w) || []), kind]));
const kindsOf = text => {
  const out = new Set();
  text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').split(/[^a-z]+/).forEach(w => {
    (KIND_OF.get(w) || []).forEach(k => out.add(k));
    if (w.length > 5 && w.endsWith('ism')) out.add('ism');                 // "Ashurism", "Calvinism"
  });
  return out;
};
// Wikipedia's own tags for a redirect that names something else than the answer
const BAD_TAG = /^(to (sections|embedded anchors|anchors|related topics|list entries|related words)|from (subtopics|members|relatives|related words|ambiguous terms|incorrect names|works|songs|books|quotations|phrases|events|fictional characters|team members|slogans|eponyms|non-neutral names|people|demonyms|spouses|creative works|opening lines|iso 15924 codes|taxonomic author abbreviations)|from .*domain names)/i;
// Aliases the owner turned down, per prompt, so they don't come back on the next run (kept in git)
const REJECTS_FILE = path.join(ROOT, 'tools', 'alias-rejects.json');
const REJECTS = fs.existsSync(REJECTS_FILE) ? JSON.parse(fs.readFileSync(REJECTS_FILE, 'utf8')) : {};

async function suggest(id, minArg, aliasesOnly){
  const src0 = fs.readFileSync(DATA_FILE, 'utf8');
  const G0 = loadWith(src0);
  const p = G0.PROMPTS.find(x => x.id === id), S = SOURCES[id] || {};
  if (!p) throw new Error(`unknown prompt ${id}`);
  if (!SOURCES[id] && !aliasesOnly) throw new Error(`no Wikipedia sources for ${id} yet: add them to SOURCES in tools/suggest-answers.mjs, or use --aliases-only`);
  console.log(`${id}: «${p.q}», ${p.answers.length} answers`);

  // candidates, with where they came from
  const from = {};
  const add = (titles, label, section) => titles.forEach(t => { if (!from[t]) from[t] = { label, section }; });
  if (!aliasesOnly){
    for (const c of S.cats || []) add(await categoryPages(c), c.replace('Category:', 'kategori: '), 'main');
    for (const l of S.lists || []) add(await listLinks(l), 'liste: ' + l, 'main');
    for (const c of (S.extra && S.extra.cats) || []) add(await categoryPages(c), c.replace('Category:', 'kategori: '), 'extra');
  }
  const cands = Object.keys(from).filter(t => usableName(t) && (!S.title || S.title.test(t)));
  if (!aliasesOnly) console.log(`  ${cands.length} candidate titles`);

  const answerTitles = [...new Set(p.answers.map(a => a.wiki))];
  const info = await pageInfo([...new Set([...answerTitles, ...cands])]);
  const answerCanon = new Map();                              // canonical article → existing answer
  p.answers.forEach(a => { const e = info[a.wiki]; answerCanon.set(e ? e.canon : a.wiki, a); });

  // existing answers' views (from RARITY) give the tier estimate and the default threshold
  const rp = (G0.RARITY && G0.RARITY.p[id]) || {};
  const known = p.answers.map(a => rp[a.display]).filter(Boolean).map(([t, v]) => ({ t, v })).sort((x, y) => y.v - x.v);
  const tierFor = v => { const e = known.find(k => k.v <= v); return e ? e.t : 6; };
  const min = minArg != null ? minArg : S.full ? 0 : known.length ? known[Math.floor(known.length * 0.9)].v : 100;
  const wf = (G0.PROMPT_DATA.find(x => x.id === id) || {}).wf;

  // every name the game knows in other prompts → its articles (to keep aliases from clashing with them)
  const elsewhere = new Map();
  for (const q of G0.PROMPTS) if (q.id !== id) for (const a of q.answers) for (const k of a.keys){ if (!elsewhere.has(k.key)) elsewhere.set(k.key, new Set()); elsewhere.get(k.key).add(a.wiki); }

  // the article's own title must fit too: "Wars of Cyrus the Great" leads to Cyrus the Great, "Union Army" to "Union"
  const titleOk = t => { const s = t.replace(/\s*\([^)]*\)/g, '').trim(); return s.split(/\s+/).length >= 2 && S.title.test(s); };
  const rows = [], dropped = { already: 0, before: 0, desc: 0, disamb: 0, title: 0 }, byCanon = new Set();
  for (const t of cands){
    const e = info[t]; if (!e) continue;
    if (answerCanon.has(e.canon) || byCanon.has(e.canon)){ dropped.already++; continue; }
    if (e.disamb){ dropped.disamb++; continue; }
    if (S.title && !titleOk(e.canon)){ dropped.title++; continue; }
    const section = from[t].section;
    if (S.desc && section === 'main' && from[t].label.startsWith('liste') && !(S.desc.test(e.desc) && (!S.region || S.region.test(e.desc)))){ dropped.desc++; continue; }
    if (S.keep && !S.keep(e.canon, e.desc)){ dropped.desc++; continue; }
    if (S.before){ const y = firstYear(clean(e.canon).match(/\d/) ? e.canon : e.desc); if (y && y >= S.before && y < 2100){ dropped.before++; continue; } }
    if (S.endAfter){ const y = lastYear(e.desc); if (y && y <= S.endAfter){ dropped.before++; continue; } }
    byCanon.add(e.canon);
    const display = S.display ? S.display(clean(e.canon)) : clean(e.canon);
    const wiki = display === e.canon ? '' : wf && wf.replace('{}', display) === e.canon ? '*' : e.canon;
    const m = G0.matchAnswer(p, display);
    // notes for the owner; any of them except "accepted today as …" also comments the line out
    const notes = [];
    let off = section === 'extra' || e.views < min;
    if (!S.full && (NOT_ANSWER.desc.test(e.desc) || NOT_ANSWER.title.test(e.canon))){ notes.push('ser ikke ut som et svar (person, sted, tekst eller gruppe?)'); off = true; }
    else if (S.region && !S.region.test(e.desc)){ notes.push('beskrivelsen nevner ikke Mesopotamia'); off = true; }
    let series = false;
    if (m.type === 'ok'){                                   // (the same article was dropped above, so this is another one)
      if (m.answer.keys.some(k => k.key === G0.normalize(display).key)){ notes.push(`samme navn som «${m.answer.display}»; skriv navnet med parentes om du vil ha den`); off = true; }
      else { notes.push(`godtas i dag som «${m.answer.display}»`); series = !!m.answer.group; }
    } else if (m.type === 'nope'){ notes.push('står som «nope» i dag'); off = true; }
    else if (m.type === 'amb'){ notes.push('står som tvetydig i dag'); off = true; }
    rows.push({ title: e.canon, display, wiki, views: e.views, tier: tierFor(e.views), desc: e.desc, src: from[t].label, notes, off, section, series, redirects: e.redirects });
  }
  rows.sort((a, b) => b.views - a.views);
  // choices made once for a whole group of lines, then a cap on how many plain new answers are active
  (S.groups || []).forEach((g, i) => rows.forEach(r => { if (r.section === 'main' && g.test(r)){ r.section = 'g' + i; if (g.off) r.off = true; } }));
  let shown = 0;
  rows.forEach(r => { if (!S.full && r.section === 'main' && !r.off && ++shown > MAX_ACTIVE){ r.off = true; r.notes.push(`utenfor de ${MAX_ACTIVE} mest leste`); } });

  // aliases: redirects people use that the game (with the new answers in) does not accept yet
  const active = rows.filter(r => !r.off);
  const src1 = insertIntoList(src0, id, active.map(r => `${r.tier}|${r.display}|${r.wiki}`), []);
  const G1 = loadWith(src1), p1 = G1.PROMPTS.find(x => x.id === id);
  const plan = ambPlan(G0, p, G1, p1), shared = sharedBases(G1, p1);
  const aliasCands = [];                                       // [display, redirect title]
  const aliasTitle = S.title ? new RegExp(S.title.source, 'i') : null;
  // kinds of thing that are normal in this prompt (castles for a castle prompt): in at least 10 % of its answers
  const kindCount = new Map();
  p.answers.forEach(a => kindsOf(a.display).forEach(k => kindCount.set(k, (kindCount.get(k) || 0) + 1)));
  const common = new Set([...kindCount].filter(([, n]) => n >= Math.max(2, p.answers.length * 0.1)).map(([k]) => k));
  const skipped = { sections: 0, kind: 0, tag: 0, views: 0, rejected: 0 };
  const rejected = new Set((REJECTS[id] || []).map(s => G1.normalize(s).key));
  // the words of a name without plural s, as a bag: "Valois-Habsburg War" = "Habsburg–Valois Wars"
  const bag = n => n.words.map(w => w.replace(/s$/, '')).sort().join(' ') + '#' + n.digits;
  const bagOwner = new Map();
  p1.answers.forEach(a => a.keys.forEach(k => bagOwner.set(bag(k), bagOwner.has(bag(k)) && bagOwner.get(bag(k)) !== a.display ? null : a.display)));
  const plainWords = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').split(/[^a-z]+/).filter(Boolean);
  const consider = (display, wikiCanon, redirects) => redirects.forEach(r => {
    if (!usableName(r) || (aliasTitle && !aliasTitle.test(r)) || UNSAFE.test(r)) return;
    if (clean(r).split(/\s+/).length > 5) return;                       // a sentence or a description, not a name
    if (/[a-z]\d|\b\d+(?!st|nd|rd|th)[a-z]/i.test(r)) return;           // "0bama", but "44th" and "1857 rebellion" are fine
    const own = kindsOf(display + ' ' + wikiCanon);
    if ([...kindsOf(r)].some(k => !own.has(k) && !common.has(k))){ skipped.kind++; return; }   // another kind of thing
    // words the game leaves out when it compares names ("revolution", "battle", "king"): if the answer doesn't
    // have the word itself, the alias turns into something shorter ("American Revolution War" → "american war")
    const dw = new Set(plainWords(display + ' ' + wikiCanon));
    if (plainWords(r).some(w => !['the', 'of', 'a', 'an', 'and', 'at', 'in', 'on'].includes(w) && !dw.has(w) && (() => { const m = G1.normalize(w); return !m.letters && !m.digits; })())) return;
    const n = G1.normalize(aliasText(r));
    if (n.letters.length < 3) return;
    if (shared.has(n.key)) return;                                      // "Pope Sixtus": which one?
    // one word that only says what kind of thing it is ("The Empire", "Battle of the Capes" → "capes"): the game would
    // also take it as the start of any other name ("Cape Bon", "Empire of Japan")
    if (n.words.length === 1 && [n.words[0], n.words[0].replace(/s$/, '')].some(w => KIND_OF.has(w))){ skipped.kind++; return; }
    if (rejected.has(n.key)){ skipped.rejected++; return; }
    const bo = bagOwner.get(bag(n));
    if (bo !== undefined && bo !== display) return;                     // the same words as another answer's name
    const others = elsewhere.get(n.key);
    if (others && !others.has(wikiCanon)) return;              // another prompt's name for something else
    const m = G1.matchAnswer(p1, aliasText(r));
    if (m.type === 'ok' && m.answer.display === display) return;   // already accepted
    if (m.type === 'ok' && m.answer.keys.some(k => k.key === n.key)) return;   // exactly another answer's name
    if (m.type === 'nope' || m.type === 'amb') return;
    aliasCands.push([display, r]);
  });
  // an answer that is a part of its article ("Trial of Marie Antoinette" → Marie Antoinette, "Palace of Knossos" →
  // Knossos) or one of many in it ("Buluc Chabtan" → Maya deities) gets no aliases: the article's other names are
  // names of something else than the answer. Seen from the kinds of the two names: they must be the same.
  const partOf = (display, canon) => { const d = kindsOf(display), c = kindsOf(canon); return d.size !== c.size || [...d].some(k => !c.has(k)); };
  p.answers.forEach(a => { const e = info[a.wiki]; if (e && !partOf(a.display, e.canon)){ skipped.sections += e.sections; consider(a.display, e.canon, e.redirects); } });
  active.forEach(r => consider(r.display, r.title, r.redirects));
  console.log(`  ${aliasCands.length} redirects not accepted yet, fetching their views`);
  const ri = await redirectInfo([...new Set(aliasCands.map(x => x[1]))]);
  const aliasMap = new Map();                                 // display → [{alias, views}]
  for (const [d, r] of aliasCands){
    const v = ri.views[r] || 0; if (v < MIN_ALIAS_VIEWS){ skipped.views++; continue; }
    const tags = ri.tags[r] || [];
    if (tags.some(t => BAD_TAG.test(t))){ skipped.tag++; continue; }   // Wikipedia says it's a part of, or related to, the answer
    const list = aliasMap.get(d) || []; const al = aliasText(r);
    if (!list.some(x => G1.normalize(x.alias).key === G1.normalize(al).key)) list.push({ alias: al, views: v, from: r, tag: (tags.find(t => /^from /.test(t)) || '').replace(/^from /, '') });
    aliasMap.set(d, list);
  }
  for (const [d, list] of aliasMap) aliasMap.set(d, list.sort((a, b) => b.views - a.views).slice(0, MAX_ALIASES));
  // two answers must not get the same alias
  const aliasOwner = new Map();
  for (const [d, list] of aliasMap) list.forEach(x => { const k = G1.normalize(x.alias).key; aliasOwner.set(k, aliasOwner.has(k) && aliasOwner.get(k) !== d ? null : d); });
  for (const [d, list] of aliasMap){ const keep = list.filter(x => aliasOwner.get(G1.normalize(x.alias).key) === d); if (keep.length) aliasMap.set(d, keep); else aliasMap.delete(d); }

  // the file
  const L = [];
  L.push(`# Dug Up — forslag til «${p.q}» (${id})`);
  L.push(`# Generert ${new Date().toISOString().slice(0, 10)} av tools/suggest-answers.mjs fra Wikipedia. Visninger = sidevisninger siste ${DAYS} dager.`);
  if (aliasesOnly) L.push(`# Spillet har ${p.answers.length} svar i dag. Denne fila har bare nye aliaser for dem, ikke nye svar.`);
  else if (S.full) L.push(`# Spillet har ${p.answers.length} svar i dag. Alle på Wikipedias liste er riktige svar, så alle er aktive, unntatt de med en OBS og VALG-bolkene som er kommentert ut.`);
  else L.push(`# Spillet har ${p.answers.length} svar i dag. Aktive forslag har minst ${fmt(min)} visninger (de 10 % minst leste svarene i dag ligger under), høyst ${MAX_ACTIVE} av dem.`);
  L.push('#');
  L.push('# Slik godkjenner du:');
  L.push('#   - Linjer UTEN # foran blir lagt inn. Slett dem du ikke vil ha.');
  L.push('#   - Linjer MED # foran blir ikke lagt inn. Fjern # for å ta dem med.');
  L.push('#   - Du kan endre tier (1–6), navnet som vises (2. felt) og aliasene (4. felt, adskilt med ;).');
  L.push('#   - Alt etter «  #» på en linje er bare informasjon.');
  L.push(`# Når du er ferdig, si fra, eller kjør: node tools/suggest-answers.mjs --apply ${id}`);
  L.push('');
  const line = r => {
    const al = (aliasMap.get(r.display) || []).map(x => x.alias).join(';');
    const data = `${r.tier}|${r.display}|${r.wiki}${al ? '|' + al : ''}`;
    const info = [`${fmt(r.views)} visn.`, r.desc ? `«${r.desc}»` : '', r.notes.length ? `OBS: ${r.notes.join('; ')}` : ''].filter(Boolean).join(' · ');
    return `${r.off ? '#' : ''}${data}    # ${info}`;
  };
  const main = rows.filter(r => r.section === 'main');
  if (!aliasesOnly){
    L.push(`# ===== NYE SVAR (${main.filter(r => !r.off).length} aktive) =====   tier|Navn|Wikipedia-tittel (tom = samme som navn)|aliaser`);
    main.filter(r => !r.off).forEach(r => L.push(line(r)));
    (S.groups || []).forEach((g, i) => {
      const gr = rows.filter(r => r.section === 'g' + i);
      L.push('');
      L.push(`# ===== ${g.label} (${gr.length}) =====`);
      gr.forEach(r => L.push(line(r)));
    });
    L.push('');
    L.push(`# ===== FLERE KANDIDATER, kommentert ut (${main.filter(r => r.off).length}): færre visninger, eller med en OBS =====`);
    main.filter(r => r.off).forEach(r => L.push(line(r)));
    if (S.extra){
      L.push('');
      L.push(`# ===== ${S.extra.label} (${rows.filter(r => r.section === 'extra').length}) =====`);
      rows.filter(r => r.section === 'extra').forEach(r => L.push(line(r)));
    }
    L.push('');
  }
  if (plan.amb.length || plan.clashes.length){
    L.push(`# ===== TVETYDIGE NAVN (${plan.amb.length}) =====   ?|navn uten nummer|det spillet svarer`);
    L.push('#   Flere svar heter dette. Spillet spør da «Which …?» i stedet for å godta eller avvise. Slett en linje for å la være.');
    plan.amb.forEach(([k, base, msg]) => L.push(`?|${k}|${msg}    # ${sharedBases(G1, p1).get(G1.normalize(base).key).answers.join(', ')}`));
    plan.clashes.forEach(c => {
      L.push('');
      L.push(`# OBS: «${c.alias || c.key.replace(/#$/, '')}» gir «${c.owner}» i dag, men nå heter også ${c.answers.filter(d => d !== c.owner).join(', ')} det. Velg:`);
      L.push(`#   a) spør hvilken (aktiv nå): fjern aliaset (--linja) og legg til ?-linja`);
      L.push(`#   b) behold: «${c.alias || c.base}» gir fortsatt «${c.owner}», slik «Justinian» gir Justinian I. Kommenter ut a) og fjern # foran =-linja.`);
      if (c.alias) L.push(`-|${c.owner}|${c.alias}`); else L.push(`#   (navnet er svarets eget display og kan ikke fjernes, så bare b) går)`);
      L.push(`${c.alias ? '' : '#'}?|${c.base.toLowerCase()}|Which ${c.base}? Add a number.`);
      L.push(`#=|${c.base.toLowerCase()}`);
    });
    L.push('');
  }
  const existingAliases = p.answers.filter(a => aliasMap.has(a.display));
  const aliasCount = existingAliases.reduce((n, a) => n + aliasMap.get(a.display).length, 0);
  L.push(`# ===== NYE ALIASER for svar som finnes (${aliasCount}) =====   +|Navn på svaret|alias;alias`);
  L.push('#   Fra Wikipedia-redirects som spillet ikke godtar i dag. Tallet er hvor ofte selve navnet ble brukt.');
  existingAliases.forEach(a => {
    const list = aliasMap.get(a.display);
    L.push(`+|${a.display}|${list.map(x => x.alias).join(';')}    # ${list.map(x => `${x.alias}: ${fmt(x.views)}${x.tag ? ' (' + x.tag + ')' : ''}`).join(', ')}`);
  });
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const file = path.join(OUT_DIR, id + '.txt');
  fs.writeFileSync(file, L.join('\r\n') + '\r\n');
  if (!aliasesOnly){
    console.log(`  dropped: ${dropped.already} already answers, ${dropped.disamb} disambiguation pages` + (S.desc ? `, ${dropped.desc} list links that are not deities` : '') +
      (S.title ? `, ${dropped.title} articles whose own title doesn't fit` : '') + (S.before ? `, ${dropped.before} from ${S.before} or later` : ''));
    console.log(`  ${main.filter(r => !r.off).length} active new answers, ${main.filter(r => r.off).length} commented out` +
      (S.groups || []).map((g, i) => `, group ${i + 1}: ${rows.filter(r => r.section === 'g' + i).length}`).join('') +
      (S.extra ? `, ${rows.filter(r => r.section === 'extra').length} in the extra section` : ''));
    if (plan.amb.length || plan.clashes.length) console.log(`  shared names: ${plan.amb.length} to ask about` + (plan.clashes.length ? `, ${plan.clashes.length} clashing with an alias (see OBS in the file)` : ''));
  }
  console.log(`  aliases: ${aliasCount} for ${existingAliases.length} answers; skipped ${skipped.sections} redirects to a section, ${skipped.kind} of another kind, ` +
    `${skipped.tag} tagged as a part or relative, ${skipped.views} under ${MIN_ALIAS_VIEWS} views, ${skipped.rejected} turned down before` + (common.size ? ` (normal here: ${[...common].join(', ')})` : ''));
  console.log(`  wrote ${path.relative(ROOT, file)}`);
  return { id, aliases: aliasCount, answers: existingAliases.length };
}

/* ---------- apply ---------- */
// Adds one prompt's reviewed file to the prompts.js text srcIn. Returns the new text, or the errors (and writes nothing).
function apply(id, srcIn){
  const file = path.join(OUT_DIR, id + '.txt');
  if (!fs.existsSync(file)) return { errors: [`no ${path.relative(ROOT, file)}: run node tools/suggest-answers.mjs ${id} first`] };
  const newLines = [], aliasAdds = [], ambAdds = [], aliasRemovals = [], keepShared = new Set(), errors = [];
  const G0 = loadWith(srcIn);
  const rejected = new Set((REJECTS[id] || []).map(s => G0.normalize(s).key));   // turned down after the file was made
  let dropped = 0;
  fs.readFileSync(file, 'utf8').split(/\r?\n/).forEach((raw, i) => {
    const l = raw.replace(/\s+#.*$/, '').trim();
    if (!l || l.startsWith('#')) return;
    const parts = l.split('|').map(s => s.trim());
    if (parts[0] === '+'){
      if (parts.length !== 3 || !parts[1] || !parts[2]){ errors.push(`line ${i + 1}: expected +|Answer|alias;alias`); return; }
      const als = parts[2].split(';').map(s => s.trim()).filter(Boolean), keep = als.filter(a => !rejected.has(G0.normalize(a).key));
      keep.filter(a => UNSAFE.test(a)).forEach(a => errors.push(`line ${i + 1}: "${a}" has a character the answer list can't hold (\` \\ $ |)`));
      dropped += als.length - keep.length;
      if (keep.length) aliasAdds.push([parts[1], keep]);
    } else if (parts[0] === '?'){
      if (parts.length !== 3 || !parts[1] || !parts[2]){ errors.push(`line ${i + 1}: expected ?|name|message`); return; }
      if (/['`\\${}]/.test(parts[1] + parts[2])){ errors.push(`line ${i + 1}: "${l}" has a character the amb list can't hold (' \` \\ $ { })`); return; }
      ambAdds.push([parts[1], parts[2]]);
    } else if (parts[0] === '-'){
      if (parts.length !== 3 || !parts[1] || !parts[2]){ errors.push(`line ${i + 1}: expected -|Answer|alias;alias`); return; }
      aliasRemovals.push([parts[1], parts[2].split(';').map(s => s.trim()).filter(Boolean)]);
    } else if (parts[0] === '='){
      if (parts.length !== 2 || !parts[1]){ errors.push(`line ${i + 1}: expected =|name`); return; }
      keepShared.add(G0.normalize(parts[1]).key);
    } else if (/^[1-6]$/.test(parts[0]) && parts.length >= 2 && parts.length <= 4 && parts[1]){
      if (/[`\\$]/.test(l)) errors.push(`line ${i + 1}: "${l}" has a character the answer list can't hold (\` \\ $)`);
      else newLines.push(parts.join('|').replace(/\|+$/, ''));
    } else errors.push(`line ${i + 1}: expected tier|Name|Wikipedia title|aliases with tier 1–6: "${l}"`);
  });
  if (!errors.length && !newLines.length && !aliasAdds.length && !ambAdds.length && !aliasRemovals.length) return { src: srcIn, errors: [], report: `${id}: nothing to add` };
  let src = null;
  if (!errors.length){
    try { src = insertAmb(insertIntoList(srcIn, id, newLines, aliasAdds, aliasRemovals), id, ambAdds); }
    catch (e){ errors.push(e.message); }
  }
  if (!errors.length){
    const G = loadWith(src);
    errors.push(...validate(G, id, newLines.map(l => l.split('|')[1]), aliasAdds.flatMap(([d, als]) => als.map(a => [d, a]))));
    // a name that was one answer's alias and is now shared by new answers ("sixtus" on Sixtus IV, then Sixtus V comes in)
    const p0 = G0.PROMPTS.find(x => x.id === id), p = G.PROMPTS.find(x => x.id === id);
    ambPlan(G0, p0, G, p, keepShared).clashes.forEach(c => errors.push(`"${c.key.replace(/#$/, '')}" leads to "${c.owner}", but ${c.answers.filter(d => d !== c.owner).join(', ')} now share the name: ` +
      `remove the alias and add ?|${c.base.toLowerCase()}|Which ${c.base}? Add a number., or leave the new answers out`));
    ambAdds.forEach(([k, msg]) => { const m = G.matchAnswer(p, k); if (m.type !== 'amb') errors.push(`"${k}" should ask which one, gives ${m.type === 'ok' ? '"' + m.answer.display + '"' : m.type}`); });
  }
  if (errors.length) return { errors: errors.map(e => `${path.relative(ROOT, file)}: ${e}`) };
  // real names left out (commented-out candidates) that the new answers would now credit as something they are not
  // ("Ingrian War" as Iberian War): not an error, but usually a sign that the name belongs in the list too
  const G1 = loadWith(src);
  const p0 = G0.PROMPTS.find(x => x.id === id), p1 = G1.PROMPTS.find(x => x.id === id);
  const said = m => m.type === 'ok' ? m.answer.display : m.type;
  const warnings = [];
  fs.readFileSync(file, 'utf8').split(/\r?\n/).forEach(raw => {
    const c = /^#[1-6]\|([^|#]+)/.exec(raw); if (!c) return;
    const name = c[1].trim(), before = said(G0.matchAnswer(p0, name)), after = said(G1.matchAnswer(p1, name));
    if (after !== before && G1.matchAnswer(p1, name).type === 'ok') warnings.push(`"${name}" → ${after}`);
  });
  let report = `${id}: ${newLines.length} answers and ${aliasAdds.reduce((n, a) => n + a[1].length, 0)} aliases for ${aliasAdds.length} answers` +
    (ambAdds.length ? `, ${ambAdds.length} shared names that ask which one` : '') +
    (aliasRemovals.length ? `, removed ${aliasRemovals.reduce((n, r) => n + r[1].length, 0)} aliases that are now shared` : '') +
    (dropped ? ` (left out ${dropped} in ${path.relative(ROOT, REJECTS_FILE)})` : '');
  if (warnings.length) report += `\n  Check: ${warnings.length} names you left out are now credited as another answer. Add them too (remove #), or accept it:\n    ` + warnings.join('\n    ');
  return { src, errors: [], report };
}

const args = process.argv.slice(2);
const mi = args.indexOf('--min');
const named = args.filter((a, i) => !a.startsWith('--') && (mi < 0 || i !== mi + 1));
const ids = args.includes('--all') ? loadWith(fs.readFileSync(DATA_FILE, 'utf8')).PROMPTS.map(p => p.id) : named;
if (!ids.length){ console.error('usage: node tools/suggest-answers.mjs <id> [...] | --all  [--aliases-only] [--min <views>]\n       node tools/suggest-answers.mjs --apply <id> [...] | --apply --all'); process.exit(1); }
if (args.includes('--apply')){
  // all files are checked first; prompts.js is written once, and only if every one of them is fine
  // (with --all: every prompt that has a suggestion file)
  let src = fs.readFileSync(DATA_FILE, 'utf8'); const errors = [], reports = [];
  for (const id of ids){
    if (!named.length && !fs.existsSync(path.join(OUT_DIR, id + '.txt'))) continue;
    const r = apply(id, src);
    if (r.errors.length) errors.push(...r.errors); else { src = r.src; reports.push(r.report); }
  }
  if (errors.length){ console.error('Nothing was written. Fix:\n  ' + errors.join('\n  ')); process.exit(1); }
  fs.writeFileSync(DATA_FILE, src);
  console.log(`Added to ${DATA_SRC}:\n` + reports.join('\n'));
  console.log('Next: npm test, npm run bench, then node tools/rarity.mjs and node tools/summaries.mjs.');
} else {
  const done = [];
  for (const id of ids) done.push(await suggest(id, mi >= 0 ? +args[mi + 1] : null, args.includes('--aliases-only')));
  if (done.length > 1) console.log(`\n${done.reduce((n, d) => n + d.aliases, 0)} aliases for ${done.reduce((n, d) => n + d.answers, 0)} answers in ${done.length} prompts.`);
}
