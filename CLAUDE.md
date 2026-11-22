# CLAUDE.md — inngangsport for AI-agenter

Dette prosjektet følger Spec-Driven Development. Før du skriver eller endrer kode:

1. **Les kontekstfilene i rekkefølge:**
   1. `context/01-project-overview.md` — hva Dug Up er, kjerneflyt, scope
   2. `context/02-architecture.md` — filstruktur, moduler, lagring, **invarianter**
   3. `context/03-code-standards.md` — kodekonvensjoner
   4. `context/04-ai-workflow-rules.md` — hvordan du skal jobbe
   5. `context/05-ui-context.md` — visuell retning og design-tokens
   6. `context/06-progress-tracker.md` — nåværende status og neste steg
2. **Jobb kun mot én feature spec om gangen** (`context/feature-specs/NN-*.md`). Finnes det ingen spec for oppgaven, foreslå en før du koder.
3. **Oppdater `context/06-progress-tracker.md`** før du starter (In Progress) og etter du er ferdig (Completed + sesjonsnotat).
4. **Feilsøking:** hvis `context/current-issues.md` finnes, analyser rotårsaken og presenter en plan — vent på grønt lys før du endrer kode.

Siden er live på dugup.eu og hver push til `main` deployes automatisk av Vercel. Behandle `main` som produksjon.
