# Feature Spec 10: Flere svar fra Wikipedia — pilot på mesopotamiske guder og kriger

## 1. Goal
Svarlistene er lukkede og håndlagde. Mange svar spillere finner på Wikipedia mangler, og det samme gjør vanlige skrivemåter av svar som finnes. Et verktøy skal foreslå nye svar og aliaser fra Wikipedia, og eier godkjenner hver linje før den legges inn. Piloten gjelder `mesogods` («Name a god or goddess of ancient Mesopotamia», 67 svar) og `wars` («Name a war fought before 1900», 114 svar). Ikke med: andre prompts (først når piloten er godkjent), endringer i matching, «foreslå svar»-knapp.

## 2. Design & Architecture Decisions
- **Kilder per prompt** (i verktøyet, ikke i spillet):
  - `mesogods`: kategoriene for mesopotamiske guder og gudinner, og lenker fra «List of Mesopotamian deities» der Wikipedias korte beskrivelse sier gud, gudinne eller guddom. Demoner og sagnvesener foreslås i en egen bolk, fordi spørsmålet sier «god or goddess».
  - `wars`: «List of wars» før 1000, 1000–1499, 1500–1799 og 1800–1899, filtrert på titler som War, Rebellion, Revolt, Uprising, Conquest og lignende. Titler med årstall fra 1900 og senere droppes.
- **Forslagene er data, ikke fasit.** Verktøyet skriver en forslagsfil per prompt (`tools/suggestions/<id>.txt`, ignoreres av git). Linjene er i samme format som `PROMPT_DATA` og sortert etter sidevisninger de siste 60 dagene. Forslag over terskelen er aktive. Resten står kommentert ut, slik at eier kan ta dem med ved å fjerne `#`. Hver linje viser visninger, kilde og Wikipedias korte beskrivelse.
- **Filtrering før forslag:**
  - Kandidater som allerede er et svar (samme artikkel), eller som spillet allerede godtar som riktig svar, foreslås ikke.
  - Godtar spillet i dag kandidaten som et *annet* svar, står det på linja, slik at eier ser hva som endres.
- **Aliaser:** Wikipedia-redirects til artiklene (både nye og eksisterende svar) foreslås når de har egne sidevisninger og spillet ikke godtar dem fra før. Navn som allerede leder til et annet svar i samme prompt, droppes.
- **Tier:** Hvert nytt svar får tier etter hvor visningene havner blant de eksisterende svarenes visninger i `RARITY`. Etterpå kjøres `rarity.mjs` og `summaries.mjs` som ved månedlig oppdatering, så alle tier er konsistente.
- **Invarianter:**
  - Bare nye svar og nye aliaser. Ingen display endres eller fjernes (invariant 3), og rotasjonen er urørt (invariant 1).
  - Spillet kaller fortsatt ikke Wikipedia (invariant 7). Bare verktøyet henter.
- **Grense mellom systemer:** Verktøyet og datainnlegget committes hver for seg. Data i `PROMPT_DATA` legges inn først etter eiers godkjenning.

## 3. Implementation Details & Scope Boundaries
- Nytt: `tools/suggest-answers.mjs`
  - `node tools/suggest-answers.mjs <id> [...]` henter og skriver forslagsfiler.
  - `node tools/suggest-answers.mjs --apply <id>` legger de aktive linjene i den godkjente fila inn i `js/data/prompts.js`. Det skjer bare når alt validerer: unike display, ingen alias-kollisjon og riktig format. Linjeskift bevares.
- Endres: `.gitignore` (`tools/suggestions/`), `js/data/prompts.js` (etter godkjenning), `js/data/rarity.js` og `summaries.js` (generert), README og `02-architecture.md`.
- Endres ikke: `js/app.js`, Scene, Sound, UI, `ROTATION`.

- **Lagt til underveis:**
  - Krig-prompts sjekker artikkelens egen tittel, ikke bare lenketeksten: «Wars of Cyrus the Great» leder til Cyrus the Great og droppes.
  - Aliaser må inneholde et krigsord.
  - Høyst 120 aktive nye svar per fil.
  - To bolker eier tar stilling til samlet: enkeltkriger i en serie og revolusjoner uten «war».
  - `--apply` advarer når et utelatt navn (en utkommentert kandidat) nå godtas som et *annet* svar, for eksempel «Ingrian War» som Iberian War.

## 4. Verification Checklist
- [x] Forslagsfiler for `mesogods` og `wars`, gjennomgått og godkjent av eier («ser bra ut»), med mine anbefalte endringer:
  - Apkallu, Siduri, Išḫara og fire revolusjoner som var væpnet krig er med.
  - Tre feilaktige aliaser er fjernet.
  - Enkeltkriger i serier er egne svar.
  - «Mexican War» er tvetydig.
  - Humbaba er ikke med: han er et monster og står i demon-bolken.
- [x] `--apply` nekter ugyldige filer (dobbelt display, alias som kolliderer) og skriver ingenting da.
- [x] Etter innlegging er `npm test` grønn (29) og eiers eksempler godtas: Anzu, «Mexican War» (spør hvilken), «100 Years War» og «30 years war».
  - `npm run bench` mot Spec 09: falske treff gikk fra 108 til 78 og kryss-treff fra 68 til 71. De tre nye kryss-treffene er samme artikkel via andre prompts, for eksempel «Granada» → Granada War.
  - 8 navn som ble godtatt som et annet nytt svar, er lagt inn som egne svar. Tre aliaser er justert.
- [x] `rarity.mjs` og `summaries.mjs` er kjørt, og diffen er sjekket.
  - Nye svar: mesogods 69 (tier 1–6: 2/7/10/19/19/12) og wars 159 (7/17/37/42/40/16).
  - Eksisterende svar i de to promptene flytter seg mot lavere tier, fordi rangeringen er relativ. Adad og Shamash gikk for eksempel fra 2 til 1.
  - I andre prompts endret 120 av 10 753 tier, som er vanlig drift.
- [x] Full runde i headless Edge uten konsollfeil. Nye svar får riktig tier og sammendrag (Ninurima, Kitītum, Cisplatine War), og «Mexican War» spør hvilken.
- [x] `06-progress-tracker.md` oppdatert.
