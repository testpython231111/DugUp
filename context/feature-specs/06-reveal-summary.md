# Feature Spec 06: Kort oppsummering på reveal-skjermen

**Status:** Skisse — detaljeres og godkjennes etter Spec 05.

## 1. Goal
Når spilleren finner et sjeldent svar, viser reveal-skjermen 1–2 setninger fra Wikipedia om det, slik at spilleren lærer noe om funnet.

Ikke med: **bilder**. De bryter med pikselstilen (eiers beslutning 2026-11-22). Heller ikke med: endringer i poeng, tiers eller rotasjon.

## 2. Design & Architecture Decisions
- **Kilde:** Wikipedia REST `page/summary/<tittel>`, kun feltet `extract`. Felter som `thumbnail` og `originalimage` brukes aldri.
- **Når:** Kun når spilleren selv har funnet et svar med tier ≥ 4 (forslag, justeres av eier). Teksten vises ikke for «Deeper finds» eller ved timeout.
- **Hentes i nettleseren, ved reveal.** Det er bare ett oppslag per funn. Å bake inn ~11 000 oppsummeringer ville gitt flere MB data. Timeout på ~3 sekunder: kommer ikke svaret, vises ingenting og reveal oppfører seg som i dag (invariant 7). Svaret lagres i minnet for resten av økten.
- **Visning:** Avsnitt i `#revealBody` under «You dug up …», i `Pixelify Sans` med eksisterende design-tokens (`05-ui-context.md`). Teksten kuttes ved første setning eller maks ~200 tegn, og går gjennom `esc()` (invariant 6). Den skal ikke forsinke «Keep digging» eller Enter-snarveien.
- **Åpne spørsmål til eier:**
  1. Fra hvilken tier skal oppsummeringen vises?
  2. Skal den også vises i Museum når man åpner et funn?
  3. Skal den kunne skrus av (som lyd)?

## 3. Implementation Details & Scope Boundaries
- Endres: `renderReveal` i `js/app.js`, en ny liten fetch-funksjon i `Live`-/Wikipedia-seksjonen og CSS for avsnittet i `css/style.css`.
- IKKE rør matching, rotasjon, Scene, Sound eller `localStorage`-formatet.

## 4. Verification Checklist
- [ ] Sjeldent funn → oppsummering vises, uten bilde, og teksten er kuttet pent.
- [ ] Vanlig funn (under grensen) → ingen oppsummering og ingen forespørsel.
- [ ] Wikipedia blokkert → reveal ser ut som i dag, uten feil i konsollen.
- [ ] Tittel med HTML-tegn eller spesialtegn vises escapet.
- [ ] Mobilbredde: ingen horisontal scroll, «Keep digging» er fortsatt synlig.
- [ ] `npm test` grønn, `06-progress-tracker.md` oppdatert.
