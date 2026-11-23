// Dug Up — suggests new answers and aliases from Wikipedia, for the owner to review (Feature Spec 10).
//
//   node tools/suggest-answers.mjs <id> [<id> ...]   fetch and write tools/suggestions/<id>.txt (~1–3 min per prompt)
//     --min <views>                                  views over 60 days a new answer needs to be suggested as active
//   node tools/suggest-answers.mjs --apply <id>      add the active lines of the reviewed file to js/data/prompts.js
//
// Nothing goes into the game without review: the suggestion file lists candidates in PROMPT_DATA format, and only
// --apply writes, after checking that every new name and alias leads to its own answer. Built-in modules only.
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
                  ppprop: 'disambiguation', pvipdays: String(DAYS), rdnamespace: '0', rdlimit: 'max' }, j => {
      const q = j.query || {};
      (q.normalized || []).forEach(x => { norm[x.from] = x.to; });
      (q.redirects || []).forEach(x => { red[x.from] = x.to; });
      (q.pages || []).forEach(pg => {
        const e = pages[pg.title] || (pages[pg.title] = { missing: !!pg.missing, desc: '', views: null, redirects: [], disamb: false });
        if (pg.description) e.desc = pg.description;
        if (pg.pageviews && e.views === null) e.views = sumViews(pg.pageviews);
        if (pg.pageprops && 'disambiguation' in pg.pageprops) e.disamb = true;
        (pg.redirects || []).forEach(r => e.redirects.push(r.title));
      });
    });
    batch.forEach(t => { let c = norm[t] || t; c = red[c] || c; const pg = pages[c]; if (pg && !pg.missing) out[t] = { canon: c, ...pg, views: pg.views || 0 }; });
    process.stdout.write(`\r  ${Math.min(i + 50, titles.length)}/${titles.length} pages`);
  }
  process.stdout.write('\n');
  return out;
}
// Page views of the redirect pages themselves (how often people use that name)
async function redirectViews(titles){
  const out = {};
  for (let i = 0; i < titles.length; i += 50){
    await query({ action: 'query', titles: titles.slice(i, i + 50).join('|'), prop: 'pageviews', pvipdays: String(DAYS) }, j => {
      ((j.query && j.query.pages) || []).forEach(pg => { if (pg.pageviews && out[pg.title] == null) out[pg.title] = sumViews(pg.pageviews); });
    });
  }
  return out;
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
function insertIntoList(src, id, newLines, aliasAdds){
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const { start, end } = listRange(src, id);
  const lines = src.slice(start, end).split(eol);            // first and last are the empty bits next to the backticks
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

/* ---------- suggest ---------- */
const clean = t => t.replace(/\s*\(([^)]*)\)\s*$/, (m, inner) => /\d/.test(inner) ? m : '');   // keep "(1768–1774)", drop "(god)"
const firstYear = s => { const m = (s || '').match(/\b(\d{3,4})\b/); return m ? +m[1] : null; };
const fmt = n => n.toLocaleString('en-US').replace(/,/g, ' ');
const aliasText = t => clean(t).toLowerCase();
const usableName = t => !/[:]|^List of|^Lists of|^Timeline of|^History of/i.test(t) && t.length <= 45 && t.split(/\s+/).length <= 6;
// looks like something else than an answer: a person, place, text or group page ("King of Ur", "Kassite deities")
const NOT_ANSWER = { desc: /\b(king|ruler|city|temple|texts?|word|name|sign|list|planet|artifact|office|tree|cuneiform|laws)\b/i,
                     title: /\b(deities|gods|mythology|religions?|myths?)$|^(Cult|Temple|Family|Folk) /i };
// a redirect that names a text, place or idea about the answer, not the answer ("Epic of Erra", "Ashurism")
const NOT_ALIAS = /\b(epic|myths?|cult|temple|worship|religion|statue|hymn|song|list|family|descent|legend|poem|deities|gods|battles?|siege|treaty|convention|act|tax|army|ultimatum|genocide|massacre|expedition|election|raid|peace|declaration|proclamation|events|causes|aftermath|origins|timeline|theatre|theater|phase)\b|ism\b/i;

async function suggest(id, minArg){
  const src0 = fs.readFileSync(DATA_FILE, 'utf8');
  const G0 = loadWith(src0);
  const p = G0.PROMPTS.find(x => x.id === id), S = SOURCES[id];
  if (!p) throw new Error(`unknown prompt ${id}`);
  if (!S) throw new Error(`no Wikipedia sources for ${id} yet: add them to SOURCES in tools/suggest-answers.mjs`);
  console.log(`${id}: «${p.q}», ${p.answers.length} answers`);

  // candidates, with where they came from
  const from = {};
  const add = (titles, label, section) => titles.forEach(t => { if (!from[t]) from[t] = { label, section }; });
  for (const c of S.cats || []) add(await categoryPages(c), c.replace('Category:', 'kategori: '), 'main');
  for (const l of S.lists || []) add(await listLinks(l), 'liste: ' + l, 'main');
  for (const c of (S.extra && S.extra.cats) || []) add(await categoryPages(c), c.replace('Category:', 'kategori: '), 'extra');
  const cands = Object.keys(from).filter(t => usableName(t) && (!S.title || S.title.test(t)));
  console.log(`  ${cands.length} candidate titles`);

  const answerTitles = [...new Set(p.answers.map(a => a.wiki))];
  const info = await pageInfo([...new Set([...answerTitles, ...cands])]);
  const answerCanon = new Map();                              // canonical article → existing answer
  p.answers.forEach(a => { const e = info[a.wiki]; answerCanon.set(e ? e.canon : a.wiki, a); });

  // existing answers' views (from RARITY) give the tier estimate and the default threshold
  const rp = (G0.RARITY && G0.RARITY.p[id]) || {};
  const known = p.answers.map(a => rp[a.display]).filter(Boolean).map(([t, v]) => ({ t, v })).sort((x, y) => y.v - x.v);
  const tierFor = v => { const e = known.find(k => k.v <= v); return e ? e.t : 6; };
  const min = minArg != null ? minArg : known.length ? known[Math.floor(known.length * 0.9)].v : 100;

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
    if (S.before){ const y = firstYear(clean(e.canon).match(/\d/) ? e.canon : e.desc); if (y && y >= S.before && y < 2100){ dropped.before++; continue; } }
    byCanon.add(e.canon);
    const display = clean(e.canon);
    const m = G0.matchAnswer(p, display);
    // notes for the owner; any of them except "accepted today as …" also comments the line out
    const notes = [];
    let off = section === 'extra' || e.views < min;
    if (NOT_ANSWER.desc.test(e.desc) || NOT_ANSWER.title.test(e.canon)){ notes.push('ser ikke ut som et svar (person, sted, tekst eller gruppe?)'); off = true; }
    else if (S.region && !S.region.test(e.desc)){ notes.push('beskrivelsen nevner ikke Mesopotamia'); off = true; }
    let series = false;
    if (m.type === 'ok'){                                   // (the same article was dropped above, so this is another one)
      if (m.answer.keys.some(k => k.key === G0.normalize(display).key)){ notes.push(`samme navn som «${m.answer.display}»; skriv navnet med parentes om du vil ha den`); off = true; }
      else { notes.push(`godtas i dag som «${m.answer.display}»`); series = !!m.answer.group; }
    } else if (m.type === 'nope'){ notes.push('står som «nope» i dag'); off = true; }
    else if (m.type === 'amb'){ notes.push('står som tvetydig i dag'); off = true; }
    rows.push({ title: e.canon, display, wiki: display === e.canon ? '' : e.canon, views: e.views, tier: tierFor(e.views), desc: e.desc, src: from[t].label, notes, off, section, series, redirects: e.redirects });
  }
  rows.sort((a, b) => b.views - a.views);
  // choices made once for a whole group of lines, then a cap on how many plain new answers are active
  (S.groups || []).forEach((g, i) => rows.forEach(r => { if (r.section === 'main' && g.test(r)){ r.section = 'g' + i; if (g.off) r.off = true; } }));
  let shown = 0;
  rows.forEach(r => { if (r.section === 'main' && !r.off && ++shown > MAX_ACTIVE){ r.off = true; r.notes.push(`utenfor de ${MAX_ACTIVE} mest leste`); } });

  // aliases: redirects people use that the game (with the new answers in) does not accept yet
  const active = rows.filter(r => !r.off);
  const src1 = insertIntoList(src0, id, active.map(r => `${r.tier}|${r.display}|${r.wiki}`), []);
  const G1 = loadWith(src1), p1 = G1.PROMPTS.find(x => x.id === id);
  const aliasCands = [];                                       // [display, redirect title]
  const aliasTitle = S.title ? new RegExp(S.title.source, 'i') : null;
  const consider = (display, wikiCanon, redirects) => redirects.forEach(r => {
    if (!usableName(r) || NOT_ALIAS.test(r) || (aliasTitle && !aliasTitle.test(r))) return;
    const n = G1.normalize(aliasText(r));
    if (n.letters.length < 3) return;
    const others = elsewhere.get(n.key);
    if (others && !others.has(wikiCanon)) return;              // another prompt's name for something else
    const m = G1.matchAnswer(p1, aliasText(r));
    if (m.type === 'ok' && m.answer.display === display) return;   // already accepted
    if (m.type === 'ok' && m.answer.keys.some(k => k.key === n.key)) return;   // exactly another answer's name
    if (m.type === 'nope' || m.type === 'amb') return;
    aliasCands.push([display, r]);
  });
  p.answers.forEach(a => { const e = info[a.wiki]; if (e) consider(a.display, e.canon, e.redirects); });
  active.forEach(r => consider(r.display, r.title, r.redirects));
  console.log(`  ${aliasCands.length} redirects not accepted yet, fetching their views`);
  const rv = await redirectViews([...new Set(aliasCands.map(x => x[1]))]);
  const aliasMap = new Map();                                 // display → [{alias, views}]
  for (const [d, r] of aliasCands){
    const v = rv[r] || 0; if (v < MIN_ALIAS_VIEWS) continue;
    const list = aliasMap.get(d) || []; const al = aliasText(r);
    if (!list.some(x => G1.normalize(x.alias).key === G1.normalize(al).key)) list.push({ alias: al, views: v, from: r });
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
  L.push(`# Spillet har ${p.answers.length} svar i dag. Aktive forslag har minst ${fmt(min)} visninger (de 10 % minst leste svarene i dag ligger under), høyst ${MAX_ACTIVE} av dem.`);
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
  const existingAliases = p.answers.filter(a => aliasMap.has(a.display));
  L.push(`# ===== NYE ALIASER for svar som finnes (${existingAliases.reduce((n, a) => n + aliasMap.get(a.display).length, 0)}) =====   +|Navn på svaret|alias;alias`);
  L.push('#   Fra Wikipedia-redirects som spillet ikke godtar i dag. Tallet er hvor ofte selve navnet ble brukt.');
  existingAliases.forEach(a => {
    const list = aliasMap.get(a.display);
    L.push(`+|${a.display}|${list.map(x => x.alias).join(';')}    # ${list.map(x => `${x.alias}: ${fmt(x.views)}`).join(', ')}`);
  });
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const file = path.join(OUT_DIR, id + '.txt');
  fs.writeFileSync(file, L.join('\r\n') + '\r\n');
  console.log(`  dropped: ${dropped.already} already answers, ${dropped.disamb} disambiguation pages` + (S.desc ? `, ${dropped.desc} list links that are not deities` : '') +
    (S.title ? `, ${dropped.title} articles whose own title doesn't fit` : '') + (S.before ? `, ${dropped.before} from ${S.before} or later` : ''));
  console.log(`  ${main.filter(r => !r.off).length} active new answers, ${main.filter(r => r.off).length} commented out` +
    (S.groups || []).map((g, i) => `, group ${i + 1}: ${rows.filter(r => r.section === 'g' + i).length}`).join('') +
    (S.extra ? `, ${rows.filter(r => r.section === 'extra').length} in the extra section` : '') + `, ${existingAliases.length} existing answers with new aliases`);
  console.log(`  wrote ${path.relative(ROOT, file)}`);
}

/* ---------- apply ---------- */
function apply(id){
  const file = path.join(OUT_DIR, id + '.txt');
  if (!fs.existsSync(file)) throw new Error(`no ${path.relative(ROOT, file)}: run node tools/suggest-answers.mjs ${id} first`);
  const newLines = [], aliasAdds = [], errors = [];
  fs.readFileSync(file, 'utf8').split(/\r?\n/).forEach((raw, i) => {
    const l = raw.replace(/\s+#.*$/, '').trim();
    if (!l || l.startsWith('#')) return;
    const parts = l.split('|').map(s => s.trim());
    if (parts[0] === '+'){
      if (parts.length !== 3 || !parts[1] || !parts[2]) errors.push(`line ${i + 1}: expected +|Answer|alias;alias`);
      else aliasAdds.push([parts[1], parts[2].split(';').map(s => s.trim()).filter(Boolean)]);
    } else if (/^[1-6]$/.test(parts[0]) && parts.length >= 2 && parts.length <= 4 && parts[1]){
      newLines.push(parts.join('|').replace(/\|+$/, ''));
    } else errors.push(`line ${i + 1}: expected tier|Name|Wikipedia title|aliases with tier 1–6: "${l}"`);
  });
  if (!errors.length && !newLines.length && !aliasAdds.length) errors.push('nothing to add: every line is commented out');
  let src = null;
  if (!errors.length){
    try { src = insertIntoList(fs.readFileSync(DATA_FILE, 'utf8'), id, newLines, aliasAdds); }
    catch (e){ errors.push(e.message); }
  }
  if (!errors.length){
    const G = loadWith(src);
    errors.push(...validate(G, id, newLines.map(l => l.split('|')[1]), aliasAdds.flatMap(([d, als]) => als.map(a => [d, a]))));
  }
  if (errors.length){ console.error(`Nothing was written. Fix ${path.relative(ROOT, file)}:\n  ` + errors.join('\n  ')); process.exit(1); }
  // real names left out (commented-out candidates) that the new answers would now credit as something they are not
  // ("Ingrian War" as Iberian War): not an error, but usually a sign that the name belongs in the list too
  const G0 = loadWith(fs.readFileSync(DATA_FILE, 'utf8')), G1 = loadWith(src);
  const p0 = G0.PROMPTS.find(x => x.id === id), p1 = G1.PROMPTS.find(x => x.id === id);
  const said = m => m.type === 'ok' ? m.answer.display : m.type;
  const warnings = [];
  fs.readFileSync(file, 'utf8').split(/\r?\n/).forEach(raw => {
    const c = /^#[1-6]\|([^|#]+)/.exec(raw); if (!c) return;
    const name = c[1].trim(), before = said(G0.matchAnswer(p0, name)), after = said(G1.matchAnswer(p1, name));
    if (after !== before && G1.matchAnswer(p1, name).type === 'ok') warnings.push(`"${name}" → ${after}`);
  });
  fs.writeFileSync(DATA_FILE, src);
  console.log(`${id}: added ${newLines.length} answers and ${aliasAdds.reduce((n, a) => n + a[1].length, 0)} aliases to ${aliasAdds.length} answers in ${DATA_SRC}.`);
  if (warnings.length) console.log(`Check: ${warnings.length} names you left out are now credited as another answer. Add them too (remove #), or accept it:\n  ` + warnings.join('\n  '));
  console.log('Next: npm test, npm run bench, then node tools/rarity.mjs and node tools/summaries.mjs.');
}

const args = process.argv.slice(2);
const ai = args.indexOf('--apply'), mi = args.indexOf('--min');
if (ai >= 0){ apply(args[ai + 1]); }
else {
  const ids = args.filter((a, i) => !a.startsWith('--') && (mi < 0 || i !== mi + 1));
  if (!ids.length){ console.error('usage: node tools/suggest-answers.mjs <id> [...] [--min <views>] | --apply <id>'); process.exit(1); }
  for (const id of ids) await suggest(id, mi >= 0 ? +args[mi + 1] : null);
}
