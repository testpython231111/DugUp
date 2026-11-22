# Feature Spec 05: Forhåndsberegnet sjeldenhet

**Status:** Godkjent av eier 2026-11-22.

## 1. Goal
Sjeldenhet (tier) og antall sidevisninger regnes ut av et script, en gang i måneden, og lagres i en egen datafil. Spillet sender ingen forespørsler til Wikipedia, og alle spillere får samme dybde for samme svar.

Ikke med: oppsummeringer på reveal-skjermen (Spec 06), nye prompts, endringer i `PROMPT_DATA`, automatisk kjøring via GitHub Action.

## 2. Design & Architecture Decisions
- **Problem i dag** (`Live` i `js/app.js`):
  - 15–20 forespørsler per spiller per dag, og ingenting lagres.
  - 60-dagersvinduet og tilgangen til Wikipedia varierer mellom spillere, så samme svar kan gi ulik dybde.
  - Trykker man «Today's Dig» før sjekken er ferdig, blir hele runden offline.
  - De innebygde offline-tiers oppdateres aldri.
- **Avgjort av eier 2026-11-22:**
  1. **Egen fil**, `js/data/rarity.js`. Scriptet skriver aldri i `PROMPT_DATA`.
  2. **Ingen frysing per dig.** Alle digs bruker de nyeste tallene. Museet lagrer allerede tier per funn, så funn endrer seg ikke.
  3. **Oppdatering hver måned, kjørt manuelt:** `node tools/rarity.mjs`, sjekk diffen, kjør `npm test`, commit.
  4. **Live-koden fjernes** (probe, `fetchViews`, `prepare`, `WIKI_API`). Git har den hvis den trengs igjen.
- **Script `tools/rarity.mjs`** (kun innebygde Node-moduler, Node 20+):
  - Laster prompts på samme måte som `tools/check.mjs` og henter sidevisninger fra MediaWiki action API (`prop=pageviews`, `pvipdays=60`, `redirects=1`). Maks 50 titler per forespørsel, og fortsettelser (`continue`) følges.
  - Sender en `User-Agent` som `DugUpRarity/1.0 (https://dugup.eu)` uten personopplysninger, én forespørsel om gangen, med ~200 ms pause. Totalt rundt 250 forespørsler, et par minutter.
  - Rangerer med **nøyaktig samme regel som `Live.prepare`**: kvantilene 0,12 / 0,27 / 0,47 / 0,67 / 0,85 → tier 1–6, og bare hvis minst `max(3, 60 %)` av svarene har visninger. Ellers får promptet ingen oppføring, og offline-tier brukes.
  - Avbryter uten å skrive hvis mer enn 5 % av forespørslene feiler. En halvferdig fil skal aldri erstatte en hel.
- **Format på `js/data/rarity.js`:** `const RARITY = {updated:'YYYY-MM-DD', days:60, p:{<promptId>:{'<display>':[tier, views], …}, …}};`. Nøkkelen er prompt-id + `display`, de stabile nøklene fra invariant 3. Det tåler at rekkefølgen på svarene endres.
  - Størrelse: anslått ~300 KB ukomprimert, mye mindre med gzip/brotli fra Vercel. Måles. Blir den over 400 KB, avrundes visningene til 2 gjeldende sifre.
- **I appen:**
  - `rarity.js` lastes etter `prompts.js` og før `app.js`.
  - Ved oppstart får hvert svar med en oppføring `a.liveTier` og `a.views`, de samme feltene som i dag. `tierOf`, reveal, museum og resultatene trenger dermed ingen endring.
  - Mangler `RARITY`, eller et svar, brukes offline-tier (invariant 7).
- **Tekst:**
  - Merket: `Rarity from Wikipedia · Nov 2026` (måned fra `updated`), eller `Rarity estimated` hvis `RARITY` mangler.
  - Reveal: `≈ N Wikipedia reads in 60 days (Nov 2026)` i stedet for «in the last 60 days», siden tallene nå er opptil en måned gamle.
- **Lagring (invariant 5):** Resultatfeltet `live` i `dugup:daily` beholder betydningen «rarity kom fra Wikipedia» og settes til `true` når `RARITY` er lastet. Ingen andre felt endres.
- **Endrer ADR-002** («Rarity fra Wikipedia pageviews») til: forhåndsberegnet månedlig, ikke live.

## 3. Implementation Details & Scope Boundaries
- Nytt: `tools/rarity.mjs`, `js/data/rarity.js` (generert).
- Endres:
  - `index.html`: én ny `<script src>`.
  - `js/app.js`: `Live`-seksjonen erstattes av en liten `applyRarity()`. I tillegg `updateBadge`, `Live.probe()` / `Live.prepare()`-kallene, `live:` i resultatet og note-teksten i `renderReveal`.
  - `tools/check.mjs`: nye tester.
  - README («How rarity works», nytt avsnitt «Updating rarity»), `02-architecture.md` og `06-progress-tracker.md` (ADR-002).
- IKKE rør `PROMPT_DATA`, `ROTATION`, matching, Scene, Sound eller `localStorage`-formatet.

## 4. Verification Checklist
- [x] Scriptet gir samme tiers som `Live.prepare` for de samme visningstallene (test med faste tall i `tools/check.mjs`).
- [x] Test: alle nøkler i `RARITY` peker på et eksisterende prompt og en eksisterende `display`, og alle tiers er 1–6.
- [x] Test: appen starter og gir offline-tiers når `rarity.js` mangler (invariant 7).
- [x] Scriptet med simulert nettverksfeil skriver ingenting.
- [x] Ingen forespørsler til `wikipedia.org` under en full runde, bortsett fra lenkene spilleren selv klikker på (Network-fanen).
- [x] Merket og «≈ N reads»-teksten viser riktig måned.
- [x] Størrelsen på `rarity.js` er målt, ukomprimert og gzip: 291 KB / 125 KB.
- [x] Eksisterende museum, stats og streak i `localStorage` fungerer som før.
- [x] `npm test` grønn, ingen feil i konsollen ved full runde (daily + practice + past digs), `06-progress-tracker.md` oppdatert. Nettleser og Network-fanen er sjekket lokalt av eier 2026-11-22, og siden er sjekket live på dugup.eu samme dag.
