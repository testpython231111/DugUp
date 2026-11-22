# Feature Spec 05: Forhåndsberegnet sjeldenhet

**Status:** Skisse — detaljeres og godkjennes etter Spec 04.

## 1. Goal
Sjeldenhet (tier) regnes ut én gang av et script og skrives inn i dataene, i stedet for i hver spillers nettleser. Alle spillere får samme dybde for samme svar, og spillet sender ingen Wikipedia-forespørsler for å rangere svar.

Ikke med: oppsummeringer på reveal-skjermen (Spec 06), nye prompts, UI-endringer utover badge-teksten.

## 2. Design & Architecture Decisions
- **Problem i dag** (`Live` i `js/app.js`):
  - 15–20 forespørsler per spiller per dag, og ingenting lagres.
  - 60-dagersvinduet og tilgangen til Wikipedia varierer mellom spillere, så samme svar kan gi ulik dybde.
  - Trykker man «Today's Dig» før sjekken er ferdig, blir hele runden offline.
  - De innebygde offline-tiers oppdateres aldri.
- **Forslag:**
  - `tools/rarity.mjs` henter sidevisninger (60 dager) for alle ~11 000 svar. Det sender en `User-Agent` uten personopplysninger og gjør maks 50 titler per forespørsel, med pause mellom forespørslene.
  - Scriptet rangerer svarene med samme kvantil-regel som `Live.prepare` og skriver tier og sidevisninger inn i dataene.
  - Kjøres manuelt eller via planlagt GitHub Action, for eksempel månedlig.
- **Endrer ADR-002.** Invariant 7 (fungerer uten Wikipedia) blir trivielt oppfylt.
- **Åpne spørsmål til eier:**
  1. Skal tallene skrives rett inn i svarlinjene (`tier|Display|Wiki|aliases`) eller i en egen fil (`js/data/rarity.js`)? En egen fil gir mindre diff og rører ikke `PROMPT_DATA`.
  2. Skal tiers fryses per dig, slik at en gammel dig alltid gir samme dybde, eller holder det med månedlig oppdatering?
  3. Hvor ofte skal tallene oppdateres?
  4. Skal Live-koden fjernes helt, eller beholdes bak et flagg?
- **Lagring:** `dugup:museum` lagrer tier per funn i dag. Formatet skal ikke endres (invariant 5).

## 3. Implementation Details & Scope Boundaries
- Nytt: `tools/rarity.mjs`, eventuelt `js/data/rarity.js`.
- Endres: `Live`-seksjonen og `updateBadge` i `js/app.js`, `tierOf`, og «≈ N Wikipedia reads»-teksten i `renderReveal`.
- IKKE rør rotasjon, matching, Scene eller Sound.

## 4. Verification Checklist
- [ ] Scriptet gir samme tier-fordeling som `Live.prepare` på et utvalg prompts.
- [ ] Ingen forespørsler til `wikipedia.org` under en full runde (sjekk Network-fanen).
- [ ] Test: alle svar har tier 1–6 etter at scriptet er kjørt.
- [ ] Eksisterende museum, stats og streak i `localStorage` fungerer som før.
- [ ] `npm test` grønn, ingen feil i konsollen, `06-progress-tracker.md` oppdatert.
