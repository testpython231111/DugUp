# Feature Spec 04: Frys rotasjonen et år fram

**Status:** Godkjent av eier 2026-11-22.

## 1. Goal
Fjerne den manuelle frysingen hver ~3. uke. Rotasjonen fryses ut 2027 i én operasjon, og nye prompts kommer inn i spillet innen noen uker i stedet for etter et år.

Ikke med: nye prompts, endringer i `PROMPT_DATA`-innhold, sjeldenhet (Spec 05), UI.

## 2. Design & Architecture Decisions
- **Problem:** En sesong er ~143 prompts / 7 per dig ≈ 20 dager. `--freeze-season` må dermed kjøres omtrent hver tredje uke, og glemmer man det, er rotasjonen sårbar (generert sesong flytter seg når prompts legges til).
- **Beslutning 1, frys langt fram:** Ny flagg `node tools/check.mjs --freeze-until <YYYY-MM-DD>` kjører samme logikk som `--freeze-season` gjentatte ganger til frosne sesonger dekker datoen. Første kjøring: `--freeze-until 2027-12-31` (~18 nye sesonger, ~35 KB). Sesongene blir identiske med det den genererte fallbacken ville gitt, så ingen dig endres.
- **Beslutning 2, nye prompts i framtidige sesonger:** Ny flagg `node tools/check.mjs --add-prompt <id>` setter id-en inn i **hver frosne sesong som ikke har startet** (startdig > i dag + 14 dager). Uten dette ville et nytt prompt først dukket opp om et år og deretter bare én gang.
  - Posisjon i hver sesong velges deterministisk (seed `dugup-insert-<id>-<sesong>`), slik at nye prompts spres utover og ikke klumper seg på slutten.
  - Posisjonen holdes unna de første og siste 14 plassene i sesongen, slik at regelen «ingen gjentakelse rundt sesongsømmen» fra Spec 02 fortsatt gjelder.
- **Beslutning 3, publiserte digs beskyttes av en voksende snapshot:** I dag sjekker snapshot-testen fast Dig #1–#30. Det holder ikke lenger, og det blokkerer innsetting i sesong 2. Ny regel:
  - `tools/rotation-snapshot.json` er en append-only logg over digs til og med i dag + 14 dager. `--write-snapshot` legger bare til nye digs, og endrer aldri eksisterende.
  - `--add-prompt` utvider snapshoten først, og setter aldri inn før siste dig i den.
  - Testen sjekker at alle digs i snapshoten er uendret.
- **Invariant 1 i `02-architecture.md` endres:** Fra «nye id-er legges kun til på slutten av siste sesong» til «digs til og med i dag + 14 dager (snapshoten) endres aldri. Nye id-er settes kun inn etter dem, med `--add-prompt`». Eksisterende id-er fjernes eller omdøpes fortsatt aldri. ADR-003 får et tillegg.
- **Margin:** Testen krever fortsatt at frosne sesonger dekker minst 14 dager fram, men med ett år fryst blir den først rød i desember 2027. I tillegg kommer en ny test: hver frosne sesong som ikke har startet, inneholder alle prompts som ikke er practice.
- **Tidszoner:** 14 dagers margin dekker spillere som ligger en dag foran eller bak.

## 3. Implementation Details & Scope Boundaries
- `tools/check.mjs`: `--freeze-until`, `--add-prompt`, append-only `--write-snapshot`, oppdaterte og nye tester.
- `js/data/prompts.js`: kun nye sesonger lagt til i `ROTATION` (generert av scriptet).
- `tools/rotation-snapshot.json`: utvidet til i dag + 14.
- `context/02-architecture.md`: invariant 1, «Slik legger du til et nytt prompt», «Slik fryser du neste sesong».
- `context/06-progress-tracker.md`: ADR-003-tillegg.
- IKKE rør `js/app.js`: rotasjonslogikken (`ROTATION`, `STREAM`, `dailyPrompts`) virker allerede med flere sesonger og med sesonger av ulik lengde.
- IKKE rør `PROMPT_DATA`, `EPOCH`, `ROUND_SIZE` eller seed-mønsteret `dugup-order-v<n>`.

## 4. Verification Checklist
- [x] Før/etter: `dailyPrompts(n)` er identisk for Dig #1–#420 (snapshot fra `main` sammenlignet med ny fil).
- [x] `--freeze-until 2027-12-31` på en kopi → frosne sesonger dekker datoen, `npm test` grønn.
- [x] Test med dummy-prompt via `--add-prompt` på en kopi: alle digs i snapshoten er uendret, og promptet finnes én gang i hver sesong som ikke har startet, aldri i de første/siste 14 plassene.
- [x] `--add-prompt` med ukjent id eller practice-id gir tydelig feil og endrer ingenting.
- [x] `--write-snapshot` endrer aldri eksisterende digs i filen.
- [x] `npm test` grønn.
- [x] Ingen feil i nettleserkonsollen ved full runde (daily + practice + past digs). Verifisert lokalt av eier 2026-11-22, og live på dugup.eu samme dag.
- [x] `02-architecture.md` og `06-progress-tracker.md` oppdatert.
