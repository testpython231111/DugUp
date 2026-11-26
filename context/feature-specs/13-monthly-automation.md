# Feature Spec 13: Månedlig oppdatering som GitHub Action, og `main` bak grønne tester

_Status: eier ba om det 2026-11-26 («gjør alt i 1-3 nå med en gang»)._

## 1. Goal
Den månedlige kjøringen av `tools/rarity.mjs` og `tools/summaries.mjs` skjer av seg selv og ender som en pull request som eier godkjenner. Dessuten krever `main` at testene er grønne før noe merges, så en rød test ikke lenger kan nå dugup.eu.

**Ikke med:** endringer i scriptene, i spillet eller i dataformatet. Automatisk merge.

## 2. Design & Architecture Decisions
- **Ny workflow `.github/workflows/monthly-data.yml`.** Kjører den 22. hver måned kl. 06:00 UTC (etter den daglige testkjøringen) og manuelt. Rekkefølgen er `rarity.mjs`, så `summaries.mjs`, så `npm test`. Feiler ett steg, åpnes ingen PR, og GitHub sender e-post.
- **PR, aldri direkte til `main`.** Branchen heter `data/monthly-ÅÅÅÅ-MM`. Er filene uendret, gjøres ingenting. Eier ser over diffen og merger.
- **Tests på PR-en.** En push gjort med `GITHUB_TOKEN` starter ikke andre workflows. Derfor starter workflowen `test.yml` med `workflow_dispatch` på branchen, slik at «test»-sjekken dukker opp på PR-en.
- **Branch protection på `main`:** sjekken `test` (fra `test.yml`) må være grønn. Ingen krav om review, siden eier er alene. Gjelder også admin, og force-push og sletting er slått av. Arbeid går derfor via PR: push branchen, åpne PR, merge når «test» er grønn.
- **Repo-innstilling:** «Allow GitHub Actions to create and approve pull requests» må være på, ellers kan workflowen ikke åpne PR-en.
- **Invarianter:** ingen berørt. Rotasjon, data og lagring er urørt. Invariant 7 holder fortsatt: bare verktøyene kaller Wikipedia.

## 3. Implementation Details & Scope Boundaries
- **Endres:** `.github/workflows/monthly-data.yml` (ny), `context/02-architecture.md`, `context/04-ai-workflow-rules.md`, `context/06-progress-tracker.md`, `README.md`. Branch protection og Actions-innstillingen settes på GitHub (ikke i repoet).
- **Endres ikke:** `tools/*.mjs`, `js/`, `css/`, `index.html`, `test.yml`.

## 4. Verification Checklist
- [ ] Workflowen er gyldig YAML og vises under Actions.
- [ ] Manuell kjøring (`gh workflow run monthly-data.yml`) åpner en PR med `rarity.js` og `summaries.js`, og «test» kjører på den.
- [ ] Branch protection er på: `gh api repos/testpython231111/DugUp/branches/main/protection` viser `test`.
- [ ] `06-progress-tracker.md` oppdatert.
