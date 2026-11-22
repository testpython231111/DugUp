# Feature Spec 02: Stabil daglig rotasjon

## 1. Goal
Gjøre det mulig å legge til nye prompts uten å endre dagens eller tidligere digs. Ingen nye prompts legges til i denne enheten.

## 2. Design & Architecture Decisions
- **Problem:** `ORDER` beregnes fra hele `PROMPTS` med seed. Et nytt prompt endrer stokkingen i sin kategori, forbruker RNG annerledes og endrer `N` i modulo — alle digs flytter seg.
- **Beslutning (forslag, bekreftes før implementering):** Frys dagens beregnede rekkefølge som en eksplisitt liste med prompt-**id-er** (`ROTATION`). Nye prompts **legges til på slutten** av listen (append-only). `dailyPrompts(n)` slår opp id-er i stedet for indekser.
- **Åpent spørsmål:** Hva skjer når listen er brukt opp (etter ~20 dager)? Alternativer: (a) start forfra med samme liste, (b) generer en ny sesongliste med ny seed (`-v2`) fra en fast sesongstart-dag. Må avgjøres av eier.
- Beskyttes av snapshot-testen fra Spec 01 (må kjøre grønt både før og etter).

## 3. Implementation Details & Scope Boundaries
- Endre kun `ORDER`/`dailyPrompts` i seksjonen `TEXT NORMALISATION & MATCHING` + legg `ROTATION` i data-scriptet.
- IKKE endre `PROMPT_DATA`-innhold, Scene, Sound, UI.
- Dokumenter i 02-architecture.md: «Slik legger du til et nytt prompt».

## 4. Verification Checklist
- [ ] Snapshot-test (Dig #1–#30) identisk før og etter.
- [ ] Test: legg til et dummy-prompt i en kopi av data → Dig #1–#30 uendret.
- [ ] Ukjent id i `ROTATION` gir tydelig feil i testen, ikke krasj i nettleseren.
- [ ] `06-progress-tracker.md` oppdatert, ADR-003 skrevet.
