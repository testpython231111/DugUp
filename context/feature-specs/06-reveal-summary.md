# Feature Spec 06: Kort oppsummering på reveal-skjermen

**Status:** Godkjent av eier 2026-11-22 («ja B, kjør på»). Valg b: teksten hentes på forhånd, ikke under spill.

## 1. Goal
Når spilleren selv finner et sjeldent svar (tier 4–6), viser reveal-skjermen 1–2 setninger fra Wikipedia om svaret. Teksten er hentet på forhånd av et script, slik at spillet fortsatt aldri kaller Wikipedia.

Ikke med:
- **Bilder.** De bryter med pikselstilen (eiers beslutning).
- Oppsummeringer i Museum, «Deeper finds» eller ved timeout.
- En innstilling for å skru det av.
- Endringer i poeng, tiers eller rotasjon.

## 2. Design & Architecture Decisions
- **Kilde:** MediaWiki action API, `prop=extracts&exintro&explaintext&redirects=1`, maks 20 titler per forespørsel (API-grensen). Bare ren tekst; bildefelt hentes aldri.
- **Script `tools/summaries.mjs`** (kun innebygde moduler, bruker `tools/load-game.mjs`):
  - Tar med alle svar med tier ≥ 4, etter `RARITY` (eller offline-tier).
  - Samme User-Agent, pauser og 5 %-regel som `tools/rarity.mjs`.
  - Kjøres **etter** `tools/rarity.mjs` hver måned.
- **Kutting av teksten:**
  - Fjern alt i parentes (uttale, levetid), og rydd mellomrom og tegnsetting.
  - Behold første setning. Er den kortere enn 90 tegn, tas setning nummer to med hvis begge til sammen er ≤ 220 tegn.
  - Er første setning over 220 tegn, kuttes den ved et ordskille med «…».
  - Tekster under 40 tegn og pekersider («may refer to») droppes.
- **Format:** `js/data/summaries.js` = `const SUMMARIES = {updated:'YYYY-MM-DD', p:{<id>:{'<display>':'tekst', …}}};`. Nøklene er de samme stabile nøklene som i `rarity.js`.
- **Lasting uten å bremse oppstarten:**
  - `<script async src="js/data/summaries.js">` legges etter `app.js`.
  - Appen leser `SUMMARIES` først når reveal vises. Er filen ikke lastet ennå, vises bare ingen oppsummering.
- **Størrelse:** måles før merge. Er filen over 1,5 MB ukomprimert, heves grensen til tier ≥ 5 (eier bestemmer).
- **Visning:**
  - `<p class="summary">` i `#revealBody`, rett under «You dug up …».
  - Teksten går gjennom `esc()` (invariant 6) og står i `Pixelify Sans`.
  - Bakgrunn som `.deeper` (`--parch-2`), tekst i `--ink-soft`, og en liten lenke «Wikipedia» til artikkelen som kreditering. Wikipedia-tekst er lisensiert CC BY-SA 4.0, og README får en linje om det.
- **Ingen endring i `localStorage`.**

## 3. Implementation Details & Scope Boundaries
- Nytt:
  - `tools/summaries.mjs`.
  - `js/data/summaries.js` (generert).
- Endres:
  - `index.html`: én ny `<script async>`.
  - `js/app.js`: en liten `summaryFor(p, a)` og ett avsnitt i `renderReveal`.
  - `css/style.css`: `.reveal-body .summary`.
  - `tools/check.mjs`: nye tester.
  - README («Updating rarity» og «Credits»).
  - `02-architecture.md` og `06-progress-tracker.md`.
- IKKE rør matching, rotasjon, rarity, Scene, Sound eller `localStorage`-formatet.

## 4. Verification Checklist
- [ ] Test: kuttingen fjerner parenteser, holder seg til ≤ 221 tegn og dropper pekersider (faste eksempler).
- [ ] Test: alle nøkler i `SUMMARIES` peker på et eksisterende prompt og en eksisterende `display`.
- [ ] Test: `summaryFor` gir tekst bare for tier ≥ 4, og ingenting når `SUMMARIES` mangler.
- [ ] Test: ingen script bruker `fetch` (eksisterende test).
- [ ] Størrelsen er målt, ukomprimert og gzip.
- [ ] Scriptet med simulert nettverksfeil skriver ingenting.
- [ ] Sjeldent funn → oppsummering vises uten bilde. Vanlig funn → ingenting (sjekkes av eier i nettleser).
- [ ] Mobilbredde: ingen horisontal scroll, og «Keep digging» er fortsatt synlig.
- [ ] `npm test` grønn, ingen feil i konsollen, `06-progress-tracker.md` oppdatert.
