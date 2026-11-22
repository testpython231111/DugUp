# 06 — Progress Tracker

_Eneste kontekstfil som oppdateres kontinuerlig. Oppdater før og etter hver arbeidsøkt._

## Nåværende fase
**Fase 1 — Robusthet og vedlikeholdbarhet.** Spillet er lansert (Dig #1 = 22. nov 2026). Mål: sikkerhetsnett (tester) før strukturelle endringer.

## In Progress
- _(ingen)_

## Completed
- [x] Spillet lansert på dugup.eu (150 prompts, ~11 000 svar).
- [x] 2026-11-22: Kontekstsystem satt opp (`CLAUDE.md`, `context/01–06`, `.gitignore`, feature-spec-mal).

## Neste (i prioritert rekkefølge)
1. **Spec 01 — Automatiske sjekker** (data-validering + matching-/rotasjonstester i Node). Sikkerhetsnett før alt annet.
2. **Spec 02 — Stabil daglig rotasjon** slik at nye prompts kan legges til uten å endre eksisterende digs.
3. **Spec 03 — Del opp `index.html`** i data, CSS og JS-filer (uten byggesteg).

## Arkitekturbeslutninger
- **ADR-001:** Ingen backend/rammeverk. Statisk side på Vercel, all state i `localStorage`.
- **ADR-002:** Rarity fra Wikipedia pageviews (60 dager), offline-tiers som fallback.

## Kjente risikoer
- Å legge til/fjerne et prompt i `PROMPT_DATA` endrer hele den daglige rotasjonen (se invariant 1 i 02). Blokkerer innholdsoppdateringer til Spec 02 er løst.
- Ingen automatiske tester; alt verifiseres manuelt i nettleser.
- Én fil på 540 KB gjør AI-assistert redigering tung og risikabel.

## Sesjonsnotater
- **2026-11-22:** Innført Spec-Driven Development etter pensumet «Systemarkitektur og Spec-Driven Utvikling med AI». Ingen kodeendringer i `index.html`.
