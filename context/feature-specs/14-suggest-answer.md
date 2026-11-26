# Feature Spec 14: «Should this count?», en lenke for svar som mangler

_Status: eier ba om det 2026-11-26 («2, men gjør den liten»)._

## 1. Goal
Når et svar ikke finnes i listene, får spilleren en liten lenke, «Should this count? Tell us», som åpner en ferdig utfylt GitHub-issue med promptet og svaret. Det gir eier en tilbakemeldingssløyfe for manglende svar, uten backend.

**Ikke med:** lenke ved `nope`, `amb`, tidsavbrudd eller riktige svar. Skjema, e-post, telling eller lagring.

## 2. Design & Architecture Decisions
- **GitHub-issue i det offentlige repoet** (`FEEDBACK_URL` i `CONFIG`). Krever GitHub-konto, men ingen backend og ingen personlig e-post. Lenke, ikke nettverkskall, så invariant 7 holder.
- Tittel: `Should "<svar>" count? (<prompt-id>)`. Tekst: spørsmålet, svaret og prompt-id. Alt går gjennom `encodeURIComponent`. Svaret kuttes til 80 tegn.
- Ren funksjon `suggestURL(p, input)` (ingen DOM), eksportert i `window.__dugup` og testet i Node.
- Lenken bygges inn i reveal med `esc()` (invariant 6), `target="_blank" rel="noopener"`, og vises også i practice.

## 3. Implementation Details & Scope Boundaries
- **Endres:** `js/app.js` (`CONFIG`, `suggestURL`, `renderReveal`, `__dugup`), `tools/check.mjs` (én test), `06-progress-tracker.md`.
- **Endres ikke:** data, matching, CSS (bruker eksisterende `.note`), Scene og Sound.

## 4. Verification Checklist
- [ ] Test: URL-en har riktig tittel og tekst, er kodet, og et svar med `<"&>` gir ingen rå tegn.
- [ ] `npm test` grønn.
- [ ] Headless nettleser: feil svar viser lenken, riktig svar og `nope` gjør det ikke. Ingen konsollfeil.
- [ ] `06-progress-tracker.md` oppdatert.
