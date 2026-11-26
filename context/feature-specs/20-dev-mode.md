# Feature Spec 20: Utviklermodus (`?dev`)

_Status: eier ba om det 2026-11-26 («merge push og alt du trenger»), etter forslaget om et utviklerpanel._

## 1. Goal
Gjøre det enkelt for eieren å teste spillet, på dugup.eu og lokalt, uten å skrive i konsollen. **Ikke med:** endringer i spillregler, data eller noe vanlige spillere ser.

## 2. Design & Architecture Decisions
- **Bare med `?dev` i adressen** (`?dev`, `?dev=1`, `?dev=true`). Uten den bygges ingen HTML for panelet, og spillet oppfører seg som før. Avgjøres av `devFromSearch()`, som er testet.
- **En DEV-knapp nede til høyre** åpner panelet med fire deler:
  - **Scene:** tid på døgnet (`Scene.setPhase`), hopp til en dybde, og vis hvilken som helst figur. Figuren lagres ikke.
  - **Play:** spill hvilken som helst dig (#N, samme prompts som `dailyPrompts(N)`) eller én valgt prompt sju ganger. Begge kjøres som **practice**, så ingenting telles: ingen streak, statistikk, museum eller lagret dig. «Stop the timer» fryser tiden.
  - **Match:** skriv inn et svar og se hva `matchAnswer` gir for valgt prompt (ok + tier + visninger, amb, nope eller none).
  - **Data:** lås opp alle figurer, fyll museet (to funn fra hver prompt), sett streak, og nullstill alt (med `confirm()`).
- **Sikkerhet:** panelet endrer bare lagringen i nettleseren som bruker det. Spillet har ingen kontoer eller toppliste, så det kan ikke brukes til å jukse mot andre. Prompt-teksten settes inn med `esc()` (invariant 6).
- **Kroker i spillet:** to små. `startRound('practice', {prompts})` tar en ferdig liste (bare panelet bruker den), og `tick()` holder tiden stille når `dev.noTimer` er på.
- Stilen er enkel med vilje (et verktøy, ikke en del av spillet), men bruker fargene fra `:root`.

## 3. Implementation Details & Scope Boundaries
- **Endres:** `js/app.js` (seksjonen DEV MODE, `startRound`, `tick`, BOOT, `__dugup`), `css/style.css`, `tools/check.mjs`, `README.md`, `context/02`, `06`.
- **Endres ikke:** data, verktøy, Scene, Sound og figurene.

## 4. Verification Checklist
- [x] Test: `devFromSearch` godtar `?dev`, `?dev=1`, `?a=b&dev`, og avviser `?devil`, `?x=dev`, `?dev=0`, `?developer=1`.
- [x] Headless Edge uten `?dev`: ingen panel-HTML.
- [x] Headless Edge med `?dev`: matching (Gregory → amb, Formosus → ok tier 2, banana → none), lås opp (14 figurer), fyll museum (286), streak 12, natt + 300 m + Samurai, dig #12 gir samme prompts som `dailyPrompts(12)` i practice, timeren står på 30 s, og practice-svar teller ikke. Ingen konsollfeil.
- [x] `npm test` grønn (36).
- [x] `06-progress-tracker.md` oppdatert.
