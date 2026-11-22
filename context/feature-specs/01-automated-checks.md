# Feature Spec 01: Automatiske sjekker (sikkerhetsnett)

## 1. Goal
Et Node-skript (`npm test` / `node tools/check.mjs`) som verifiserer data og kjernelogikk i `index.html` uten nettleser. Ingen endring i spillets oppførsel i denne enheten.

## 2. Design & Architecture Decisions
- Kun Node innebygde moduler (`node:test`, `node:vm`, `node:fs`) — ingen npm-avhengigheter.
- Skriptet leser `index.html`, trekker ut de to `<script>`-blokkene og kjører dem i `vm` med en minimal DOM-stub, og bruker `window.__dugup`-hooken som allerede finnes.
- **Golden snapshot:** lagre prompt-id-ene for Dig #1–#30 i `tools/rotation-snapshot.json`. Testen feiler hvis rotasjonen endres — dette beskytter invariant 1.

## 3. Implementation Details & Scope Boundaries
- Nye filer: `package.json` (kun `"test"`-script, `"type": "module"`), `tools/check.mjs`, `tools/rotation-snapshot.json`.
- Sjekker:
  - Data: unike prompt-`id`, gyldig `cat`, tier 1–6, unike `display` per prompt, ingen tomme Wikipedia-titler, ingen alias som kolliderer mellom to svar i samme prompt (uten tvetydighetskart).
  - `PRACTICE_IDS` finnes og er ikke i `ORDER`.
  - Matching: et sett kjente case (f.eks. «henry 8» = «Henry VIII», enkel typo godtas, feil svar avvises).
  - Rotasjon: `dailyPrompts(1..30)` matcher snapshot; hver dig har 7 unike prompts.
- IKKE endre `index.html` (med mindre en DOM-stub er umulig — stopp og spør i så fall).

## 4. Verification Checklist
- [ ] `node tools/check.mjs` (eller `npm test`) kjører grønt på dagens `index.html`.
- [ ] Endring av ett tegn i en prompt-id gjør testen rød.
- [ ] Ingen nye runtime-filer lastes av nettsiden.
- [ ] README får en kort seksjon «Kjør sjekker».
- [ ] `06-progress-tracker.md` oppdatert.
