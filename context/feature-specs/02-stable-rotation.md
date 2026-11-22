# Feature Spec 02: Stabil daglig rotasjon

## 1. Goal
Gjøre det mulig å legge til nye prompts uten å endre dagens eller tidligere digs. Ingen nye prompts legges til i denne enheten.

## 2. Design & Architecture Decisions
- **Problem:** `ORDER` beregnes fra hele `PROMPTS` med seed. Et nytt prompt endrer stokkingen i sin kategori, forbruker RNG annerledes og endrer `N` i modulo — alle digs flytter seg.
- **Beslutning:** Frys dagens beregnede rekkefølge som en eksplisitt liste med prompt-**id-er** (`ROTATION`). Nye prompts **legges til på slutten** av listen (append-only). `dailyPrompts(n)` slår opp id-er i stedet for indekser.
- **Avgjort av eier 2026-11-22: alternativ (b).** Når en sesong er brukt opp, kommer en ny sesong med seed `dugup-order-v<n>`. `ROTATION` er en liste av sesonger som spilles etter hverandre. Neste sesong genereres automatisk som fallback og fryses i god tid med `node tools/check.mjs --freeze-season` (testen krever 14 dagers margin). Sesong 2 er frosset nå.
- **Konsekvens:** Dig #21–#30 endres. Før gikk listen rundt til start, nå kommer sesong 2. Ingen av dem er publisert (i dag er Dig #1), og Dig #1–#20 er identiske. Snapshotet er regenerert.
- Beskyttes av snapshot-testen fra Spec 01.

## 3. Implementation Details & Scope Boundaries
- Endre kun `ORDER`/`dailyPrompts` i seksjonen `TEXT NORMALISATION & MATCHING` + legg `ROTATION` i data-scriptet.
- IKKE endre `PROMPT_DATA`-innhold, Scene, Sound, UI.
- Dokumenter i 02-architecture.md: «Slik legger du til et nytt prompt».

## 4. Verification Checklist
- [x] Snapshot-test: Dig #1–#20 og de tre første promptene i #21 er identiske før og etter. #21–#30 er bevisst endret (sesong 2, valg b) og snapshotet er regenerert.
- [x] Test: legg til et dummy-prompt i en kopi av data → Dig #1–#30 uendret (fast test i `tools/check.mjs`).
- [x] Ukjent id i `ROTATION` gir tydelig feil i testen. Appen hopper over id-en og laster fortsatt (verifisert med kopi av filen med id-en `tpyo`).
- [x] `06-progress-tracker.md` oppdatert, ADR-003 skrevet.
- [ ] Manuell sjekk i nettleser/preview-deploy (daily, past digs) — ikke gjort av AI.
