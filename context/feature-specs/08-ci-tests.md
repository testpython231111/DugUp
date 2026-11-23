# Feature Spec 08: GitHub Action kjører `npm test`

## 1. Goal
GitHub kjører `npm test` automatisk ved hver push, ved hver pull request og én gang i døgnet, og varsler når noe er rødt. Vercel kjører ikke testene, og `main` deployes rett til produksjon, så i dag fanges feil bare hvis noen husker å kjøre testene lokalt. Ikke med: UI-tester i nettleser, og at Vercel blokkerer deploy ved rød test (egne specs ved behov).

## 2. Design & Architecture Decisions
- Én workflow, `.github/workflows/test.yml`, uten avhengigheter utover Node (prosjektet har ingen npm-pakker).
- Triggere: `push` (alle brancher), `pull_request`, `schedule` daglig kl. 05:00 UTC, og `workflow_dispatch` for manuell kjøring.
- Den daglige kjøringen fanger det som avhenger av dato: testen «a frozen season starts after the locked digs» blir rød 14 dager før rotasjonen må fryses, selv om ingen har pushet noe. GitHub sender e-post når en planlagt kjøring feiler.
- Node 26, samme hovedversjon som lokalt.
- Tidssone: Actions kjører i UTC, mens testene bruker lokal dato. Rundt midnatt kan «i dag» være én dag forskjøvet. Det flytter bare fristvarselet med én dag og gir ingen falske feil.
- Ingen invarianter berøres. Ingen endring i spillet; Vercel bygger den samme siden.

## 3. Implementation Details & Scope Boundaries
- Ny fil: `.github/workflows/test.yml`.
- Oppdateres: `README.md` (status-merke og én linje om CI), `context/02-architecture.md` (filstruktur) og `context/06-progress-tracker.md`.
- Endres ikke: `js/`, `css/`, `index.html`, `tools/`.

## 4. Verification Checklist
- [x] Workflowen kjører grønt på GitHub på branchen før merge.
- [x] `npm test` grønn lokalt.
- [ ] Siden på dugup.eu er uendret etter merge.
- [x] `06-progress-tracker.md` oppdatert.
