# 06 — Progress Tracker

_Eneste kontekstfil som oppdateres kontinuerlig. Oppdater før og etter hver arbeidsøkt._

## Nåværende fase
**Fase 1 — Robusthet og vedlikeholdbarhet.** Spillet er lansert (Dig #1 = 22. nov 2026). Mål: sikkerhetsnett (tester) før strukturelle endringer.

## In Progress
- _(ingen)_

## Completed
- [x] 2026-11-22: **Spec 03 — Del opp `index.html`.** Filene er nå `css/style.css`, `js/data/prompts.js` og `js/app.js`, uten byggesteg. 16 tester grønne. Merget til `main` etter eiers beslutning, uten preview-sjekk først.
- [x] 2026-11-22: Spec 02 merget til `main` og verifisert live på dugup.eu av eier.
- [x] 2026-11-22: **Spec 02 — Stabil daglig rotasjon.** `ROTATION` (frosne sesonger med id-er) i data-scriptet; sesong 1 = opprinnelig rekkefølge, sesong 2 frosset. Nye prompts legges til på slutten av siste sesong. `node tools/check.mjs --freeze-season` fryser neste. 16 tester grønne.
- [x] 2026-11-22: **Spec 01 — Automatiske sjekker.** `npm test` / `node tools/check.mjs` (11 tester: data, practice, matching, rotasjon mot snapshot Dig #1–#30). Grønn på dagens `index.html`. Merget til `main`.
- [x] Spillet lansert på dugup.eu (150 prompts, ~11 000 svar).
- [x] 2026-11-22: Kontekstsystem satt opp (`CLAUDE.md`, `context/01–06`, `.gitignore`, feature-spec-mal).

## Neste (i prioritert rekkefølge)
1. **Sjekk dugup.eu etter Spec 03:** spill en hel runde og sjekk practice, museum, wardrobe, past digs, lyd og at gammel fremgang er der. Feiler noe, revert merge-commiten.
2. **Frys sesong 3** før ca. 17. des 2026 (testen blir rød da): `node tools/check.mjs --freeze-season`.

## Arkitekturbeslutninger
- **ADR-001:** Ingen backend/rammeverk. Statisk side på Vercel, all state i `localStorage`.
- **ADR-002:** Rarity fra Wikipedia pageviews (60 dager), offline-tiers som fallback.
- **ADR-003 (2026-11-22):** Daglig rotasjon er en eksplisitt, append-only liste av frosne sesonger med prompt-id-er (`ROTATION`), ikke beregnet fra `PROMPTS`. Når sesongene er brukt opp, genereres neste med seed `dugup-order-v<n>` og fryses i god tid. Begrunnelse: innhold kan legges til uten å flytte publiserte digs. Pris: nye prompts dukker først opp når siste sesong er spilt ut, og frysing er et manuelt steg (testen varsler 14 dager før).

## Kjente risikoer
- Frysing av neste sesong er manuelt. Glemmer man det, brukes en generert sesong, som flytter seg hvis prompts legges til mens den spilles. `npm test` varsler, men Vercel kjører ikke testene.
- Testene dekker data, matching og rotasjon, men ikke UI/Scene/Sound — det verifiseres fortsatt manuelt i nettleser.
- `package.json` i rot er nytt for Vercel-deployen (ingen avhengigheter/build-script). Sjekk preview-deploy før merge til `main`.
- `js/data/prompts.js` (~410 KB) er fortsatt stor. Den kan senere deles opp per kategori, og `app.js` kan deles i moduler; det blir egne specs.
- Etter Spec 03 er det ikke lenger nok å laste opp bare `index.html` via GitHub-webgrensesnittet (se README «Updating the site»).

## Sesjonsnotater
- **2026-11-22:** Innført Spec-Driven Development etter pensumet «Systemarkitektur og Spec-Driven Utvikling med AI». Ingen kodeendringer i `index.html`.
- **2026-11-22 (Spec 01):** `tools/check.mjs` kjører begge inline-scripts i `node:vm` med en generisk Proxy-stub for DOM (ingen endring i `index.html`). Wikipedia simuleres som nede. `PRACTICE_IDS` leses via `practicePrompts()` siden konstanten er inne i IIFE-en. Verifisert: grønn på dagens fil; endret prompt-id og nytt prompt gir rød rotasjonstest. Fant og rettet Demosthenes-duplikatet i `greekleaders`: generalen heter nå «Demosthenes, son of Alcisthenes» (aliaser: alcisthenes/pylos/strategos). Det gamle aliaset «demosthenes general» virket aldri fordi `general` er stoppord, så ingen spillere kan ha generalen i museet — taleren beholder nøkkelen `greekleaders|Demosthenes` (invariant 3 ok). Rotasjonen uendret (snapshot grønn). Node var ikke installert på maskinen — testet med portabel Node v26.
- **2026-11-22 (Spec 02):** Eier valgte (b) nye sesonger. `ORDER` erstattet av `seasonOrder` (samme algoritme, nå på id-er) + `ROTATION`-strøm. Engangssjekk: `seasonOrder('dugup-order-v1')` = frosset sesong 1. Dig #1–#20 identiske; #21–#30 endret fordi listen før gikk rundt til start (ingen publisert ennå), snapshot regenerert. Sømmen mellom sesonger holdes fri for gjentakelser (ingen prompt fra de 2 siste digsene kommer igjen i de 2 første). `dailyPrompts(n<1)` gir nå Dig #1 (før: slutten av listen) — gjelder bare klokker før lansering. Node finnes i `C:\Program Files\nodejs` (ikke på PATH i Git Bash). Ikke verifisert i nettleser.
- **2026-11-22 (Spec 03):** `index.html` er delt opp med et engangsscript som bruker eksakte linjeområder: `css/style.css` (linje 14–248), `js/data/prompts.js` (394–12978, `PROMPT_DATA` og `ROTATION`) og `js/app.js` (12981–14865). Scriptet verifiserte at bitene satt inn igjen inline gir nøyaktig den opprinnelige filen, så ingenting er endret i innholdet. Script-taggene står på samme plass og i samme rekkefølge, med relative stier. `tools/check.mjs` leser nå lokale `<script src>`-filer i dokumentrekkefølge, og `--freeze-season` og legg-til-prompt-testen redigerer data-filen. Verifisert: 16/16 tester grønne. `--freeze-season` er kjørt på en kopi og gir grønne tester etterpå. Headless Edge over `file://` gir identisk DOM etter oppstart sammenlignet med `main`, inkludert Live Wikipedia-badge, og skjermbildet ser riktig ut. Ikke verifisert: full spillrunde, practice, museum, wardrobe, past digs og lyd i ekte nettleser, eksisterende `localStorage` fra produksjon, og Vercel preview.
