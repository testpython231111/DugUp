# Feature Spec 17: Herskere fra Wikidata — faraoer og kinesiske keisere

_Status: eier ba om det 2026-11-26 («3,4,5 kjør ut»)._

## 1. Goal
`pharaoh` og `chinaemp` får alle herskere som Wikidata oppgir har hatt embetet, ikke bare et utvalg. Wikidata er hovedkilden, og Wikipedias liste brukes som kontroll. Dette er bolken etter Spec 12, med lærdommen derfra: håndskrevne regex-filtre på Wikipedia-lister er skjøre.

**Ikke med:** andre hersker-prompts, endringer i matchingen og endringer i rotasjonen.

## 2. Design & Architecture Decisions
- **Ny kildetype `wikidata`** i `SOURCES`. Den henter alle med P39 («position held») lik embetet eller en underklasse av det (P279*), som har en artikkel på engelsk Wikipedia. Spørringen går til query.wikidata.org med samme User-Agent som de andre verktøyene.
- **Kontroll:** med `lists` i tillegg får hver linje merket «bare i Wikidata» eller «bare i Wikipedia-listen».
- **Beskrivelsen må bekrefte embetet** (`keep`). Wikidata regner også med dronninger gift med kongen, yppersteprester og romerske og persiske herskere som faraoer, og prinser og «Heavenly King» som keisere. Lenker fra listesider (land, dyr, Wayback Machine) faller bort av samme grunn.
- **Ellers som Spec 12:**
  - `full` (ingen grense)
  - `amb` for navn som flere deler
  - `--apply` nekter hvis et alias blir tvetydig
  - tier etter sidevisninger
  - etterpå kjøres `rarity.mjs` og `summaries.mjs`
- **Avgjørelser** (eier overlot dem til meg):
  - herskere før 1. dynasti tas med
  - keisere i små stater (De seksten kongedømmene, De ti rikene) tas med, siden spørsmålet sier «Any dynasty»
- **Invarianter:** bare nye svar, aliaser og `amb`. Ingen display endres eller fjernes (invariant 3). `ROTATION` er urørt. Spillet kaller ikke Wikidata (invariant 7).

## 3. Implementation Details & Scope Boundaries
- **Endres:**
  - `tools/suggest-answers.mjs` (`wikidataHolders`, kryssjekken, `SOURCES`)
  - `js/data/prompts.js` (etter gjennomgang)
  - `js/data/rarity.js` og `summaries.js` (generert)
  - `tools/check.mjs` (eksempler)
  - dokumentasjonen
- **Endres ikke:** `js/app.js`, UI og andre prompts.

## 4. Verification Checklist
- [x] Forslagsfilene er gått gjennom, og antallene står i sesjonsnotatet.
- [x] `--apply` er kjørt uten feil.
- [x] `npm test` er grønn (34), og nye eksempler i matching-testen virker.
- [x] `npm run bench`: 78 falske treff (uendret). Kryss-treff 73 → 74: «Hat-Hor» (pharaoh) gir Hathor i `egyptgods`, og det er akseptabelt.
- [x] `rarity.mjs` og `summaries.mjs` er kjørt.
- [x] Headless Edge: et nytt svar fra hver prompt gir funn, og det er ingen konsollfeil.
- [x] `06-progress-tracker.md` er oppdatert.
