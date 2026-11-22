# Feature Spec 03: Del opp index.html

## 1. Goal
Flytte innhold ut av den 540 KB store `index.html` til egne filer, slik at data, stil og logikk kan endres hver for seg. Ren flytting — null endring i oppførsel.

## 2. Design & Architecture Decisions
- Fortsatt **ingen byggesteg**: vanlige `<script src>` / `<link rel="stylesheet">`, serveres statisk av Vercel.
- Foreslått struktur:
  ```
  index.html            (kun markup + <link>/<script>-tagger)
  css/style.css
  js/data/prompts.js    (PROMPT_DATA — evt. én fil per kategori senere)
  js/app.js             (dagens IIFE, uendret innhold)
  ```
- Klassiske scripts (ikke ES-moduler) i første omgang, slik at `index.html` fortsatt fungerer ved å åpne filen lokalt (`file://`). Oppdeling av `app.js` i moduler (matching, scene, sound, game) er en senere spec.
- **Konsekvens for eier:** opplasting via GitHub-webgrensesnittet må da gjøres for flere filer/mapper (eller bruk `git push`). Må godkjennes.

## 3. Implementation Details & Scope Boundaries
- Klipp-og-lim av eksisterende blokker; ingen omskriving, ingen formattering av data.
- Vercel Analytics-script og font-lenker blir i `index.html`.
- Testskriptet fra Spec 01 oppdateres til å lese de nye filene.
- IKKE endre logikk, data eller CSS-verdier.

## 4. Verification Checklist
- [x] Spec 01-testene og snapshot grønne.
- [ ] Siden fungerer lokalt og på en Vercel preview-deploy (full daily-runde, practice, museum, wardrobe, past digs, lyd av/på).
- [ ] Eksisterende `localStorage` fra produksjon fungerer uendret.
- [x] README «Updating the site» oppdatert.
- [x] `02-architecture.md` filstruktur oppdatert.
