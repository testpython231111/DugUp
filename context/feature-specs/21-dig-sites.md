# Feature Spec 21: Dig sites (temaer for scenen)

_Status: eier ba om det 2026-11-27 («lag flere map skins … juletema, vikingtiden osv. Lag 4 forskjellige, man kan velge uten challenges»)._

## 1. Goal
Spilleren kan velge hvordan graveplassen over bakken ser ut. Fire nye temaer i tillegg til dagens, og alle er åpne fra start. **Ikke med:** endringer i jordlagene under bakken (bortsett fra fargen på øverste lag i ørkenen), figurene, animasjonen av graveren, døgnfasene eller spillreglene.

## 2. Design & Architecture Decisions
- **`SITES`** (ren data, ved siden av `SKINS`): farger på åser, bakke og telt, tretype, rekvisitter som tekst-sprites med egen palett, blomster, fugler, skyer og nedbør. Ingen bildefiler.
- **Temaene:**

| Id | Navn | Utseende |
|---|---|---|
| `meadow` | Meadow | Dagens scene, uendret (standard) |
| `yule` | Christmas Camp | Snø på åser, bakke og telt, snødekte grantrær med julekuler, snømann og pyntet juletre, snøfall |
| `fjord` | Viking Fjord | Takkete fjell med snø på toppene, fjord med langskip, granskog, runestein og skjold, måker, lyng |
| `giza` | Giza | Sanddyner og to pyramider, palmer, obelisk og amforaer, sandfarget øverste jordlag, nesten ingen skyer |
| `sakura` | Cherry Blossom | Fuji i bakgrunnen, kirsebærtrær, rød torii og steinlykt, kronblader i vinden |

- **Valg:** egen seksjon «Dig site» øverst i Wardrobe, med en liten forhåndsvisning av hver plass (med figuren spilleren har på seg). Ingen krav for å låse opp.
- **Lagring:** ny nøkkel `dugup:site` (id). Ukjent eller manglende id gir `meadow` (invariant 5). Nøkkelen er med i backup (`BACKUP_KEY` og valideringen).
- **Scene:** `Scene.setSite(id)` bygger bakgrunnen på nytt. Nedbør (snø, kronblader) tegnes per bilde over bakken og bruker `Math.random()`; det er pynt og trenger ikke være likt for alle.
- Plassering av rekvisitter: bare på ledige plasser (til venstre for teltet og til høyre for skiltet), slik at de aldri dekker sjakten, skiltet eller etikettene. På smale skjermer vises derfor færre.

## 3. Implementation Details & Scope Boundaries
- **Endres:** `js/app.js` (`SITES`, Scene: `build`, `drawCamp`, nedbør, `setSite`, `previewSite`; GAME: valg i Wardrobe, `dugup:site`, backup), `index.html` (seksjon i Wardrobe), `css/style.css` (kort for plassene), `tools/check.mjs` (tester), `README.md`, `02-architecture.md`, `06-progress-tracker.md`.
- **Endres ikke:** `ERAS`, `PHASES`, `SKINS`, `SPR`, `PAL`, Sound, rotasjon og data.

## 4. Verification Checklist
- [x] Test: unike id-er, `meadow` først, gyldige farger, sprite-rader med lik bredde og bare tegn fra egen palett.
- [x] Test: backup tar med `dugup:site`, og en ikke-streng droppes.
- [x] Headless Edge: hver plass i dag, natt og daggry på 1100 px og dag på 390 px, og Giza på 60 og 300 m. Wardrobe viser fem plasser, og valget huskes etter omlasting. Ingen konsollfeil (bortsett fra Vercel Analytics over `file://`). Meadow er piksel-identisk med `main`.
- [x] `npm test` grønn (37).
- [x] `06-progress-tracker.md` oppdatert.
