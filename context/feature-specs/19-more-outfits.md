# Feature Spec 19: Flere figurer i Wardrobe

_Status: eier ba om det 2026-11-26 («ordne noen flere karakterer også»)._

## 1. Goal
Fire nye figurer, slik at det er flere mål å spille mot mellom dem som finnes. **Ikke med:** nye typer mål, endringer i scenen eller animasjonen, og endringer i figurene som finnes.

## 2. Design & Architecture Decisions
- **Samme oppskrift som de andre:** en palett pluss nye rader i torsoen, som er 12×14 (hatt, og for munken hetten langs bakhodet). Paletten gjelder bare torso og bein. Ingen bildefiler.
- **Figurer og mål** (spredt mellom målene som finnes):

| Figur | Mål | Utseende |
|---|---|---|
| Aviator | grav 400 m på én runde (Dino Suit er 580) | skinnlue, briller, hvitt skjerf og knebukser, c. 1927 |
| Samurai | streak på 14 dager (Viking er 7) | svart kabuto med gullhorn, rød rustning og hakama |
| Monk | 75 digs (mellom 50 og 100) | hette og kappe i lys brun, tau-belte og sandaler |
| Pirate | 100 funn i museet (Knight er 50) | trekantet hatt med hodeskalle og gullkant, øyelapp (`noBlink`), hvit skjorte og rødt skjerf |

- Rekkefølgen i Wardrobe er: …, Royal, Aviator, Samurai, Monk, Pirate, Golden Digger. Golden Digger står fortsatt sist.
- **Invariant 5:** `dugup:skin` lagrer bare id. Nye id-er er bakoverkompatible, og `currentSkin()` faller tilbake til Explorer hvis figuren ikke er låst opp.

## 3. Implementation Details & Scope Boundaries
- **Endres:** `js/app.js` (`SKINS`), `tools/check.mjs` (én test), `README.md` og `06-progress-tracker.md`.
- **Endres ikke:** `SPR`, `PAL`, Scene, Sound og andre figurer.

## 4. Verification Checklist
- [x] Test: unike id-er, rader på 12 tegn, kjente måltyper, en dybde som er mulig å nå (≤ 700 m) og gyldige farger.
- [x] Forstørret tegning av de nye figurene ved siden av Explorer. Munken ble justert etter første utkast, der hetten så ut som en lue.
- [x] Headless Edge: Wardrobe viser 14 figurer, og de som er låst opp, kan brukes. Piraten vises i scenen og i logoen. Ingen konsollfeil.
- [x] `npm test` grønn (35).
- [x] `06-progress-tracker.md` oppdatert.
