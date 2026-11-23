# Feature Spec 07: Etiketter og sol fri for overlapp

## 1. Goal
Rette to visuelle feil i dig-scenen: objekter i jorda tegnes oppå era-etikettene (f.eks. tannhjul og flaske over «MODERN 0M»), og sola om dagen havner bak dybdemåleren (HUD). Ingen andre endringer i utseende, animasjon eller lys. (En bredere pikselpuss ble prøvd 2026-11-23 og forkastet av eier: «liker det best som det er».)

## 2. Design & Architecture Decisions
- Røtter, steiner og objekter i `build()` plasseres ikke innenfor rektanglene til era-etikettene (venstre) og 100M-merkene (høyre).
- `PHASES.day.sun.x` flyttes fra −22 til −42 (y 15 → 14), så sola står fritt for HUD-boksen.
- Ingen invarianter berøres. Plasseringen av pynt i jorda endrer seg litt, fordi den seedede rekkefølgen hopper over noen plasser. Det er kun utseende.

## 3. Implementation Details & Scope Boundaries
- Endres: `js/app.js` — `PHASES.day` og `build()` i SCENE.
- Endres ikke: alt annet.

## 4. Verification Checklist
- [x] `npm test` grønn.
- [x] Headless Edge: ingen etiketter dekket i noen døgnfase eller dybde; sola fri av HUD.
- [x] `06-progress-tracker.md` oppdatert.
