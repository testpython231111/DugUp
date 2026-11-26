# Feature Spec 12: Fulle lister for herskere — pilot på paver, japanske keisere, bysantinske keisere og franske konger

_Status: utkast, venter på eiers grønt lys._

## 1. Goal
Prompts om herskere har en objektiv fasit: Wikipedias «List of …». I dag har de bare et utvalg. Verktøyet fra Spec 10 skal foreslå de som mangler, og eier godkjenner før de legges inn. Piloten gjelder fire prompts med store hull:

| Prompt | Svar i dag | Fullt antall (ca.) | Kilde |
|---|---|---|---|
| `pope` | 81 | 267 | «List of popes» |
| `japanemp` | 53 | 126 (+ 6 i nordhoffet) | «List of emperors of Japan» |
| `byzantine` | 73 | ~95 | «List of Byzantine emperors» |
| `france` | 59 | ~85–110 | «List of French monarchs» |

`spain` er tatt ut av piloten fordi den allerede har alle 22 monarkene fra 1479.

**Ikke med:**
- faraoer og kinesiske keisere, fordi navnene er for tvetydige (egen bolk senere)
- andre hersker-prompts
- endringer i matchingen (`js/app.js`)

## 2. Design & Architecture Decisions
- **Kilde: én listeside per prompt.** Verktøyet leser lenkene i listens tabeller og tar bare med artikler om personer i den perioden prompten dekker. De står i `SOURCES` i `tools/suggest-answers.mjs`, på samme måte som for `wars`.
- **Ingen grense på 120 per fil.** Alle på lista er riktige svar, så grensen fra Spec 10 gjelder ikke for disse promptene. Alle forslag er aktive. Det eneste som er kommentert ut, er tilfellene eier skal ta stilling til (se under).
- **Prompten bestemmer avgrensningen, ikke Wikipedia.** Det betyr:
  - `byzantine` holder seg til 395–1453. Konstantin den store står fortsatt i `nope`, selv om Wikipedias liste starter med ham.
  - `france` holder seg til «From Clovis to Napoleon III».
  - Eksisterende `nope`-regler beholdes. Et forslag som treffer en `nope`, blir kommentert ut og merket.
- **Navn som flere deler (Gregor I–XVI).** Spillet spør allerede «Which Gregory? Add a number.» via `amb`. Fulle lister gir mange nye navn som deles (Sixtus, Felix, Stephen, Boniface osv.). Derfor skal verktøyet:
  - foreslå en `amb`-linje for hvert navn uten nummer som nå deles av to eller flere svar i prompten, med samme tekst som de eksisterende («Which Sixtus? Add a number.»)
  - nekte å `--apply` hvis et eksisterende alias uten nummer (for eksempel «sixtus» på Sixtus IV) nå passer til flere svar. Eier velger da mellom å fjerne aliaset og å la det stå.
  - Tall trenger ingen aliaser, fordi «Gregory 16» og «Gregory sixteenth» allerede gjøres om til XVI.
- **Display og wiki-nøkkel:** Display følger stilen i prompten («Sixtus IV», «Go-Sanjō», «Michael VI Bringas»). Wiki-tittelen skrives ut når den ikke kan utledes fra `wf` («Pope {}»).
- **Avgjørelser eier tar i forslagsfila (kommentert ut, med anbefaling):**
  - `pope`: Motpaver tas ikke med (anbefalt). «Stephen II» (død før han ble innsatt) følger Wikipedias nummerering.
  - `japanemp`: Nordhoffets seks keisere (Kōgon, Kōmyō osv.). Anbefalt: ta med, fordi de kalles keisere og er kjente svar.
  - `byzantine`: Medkeisere som aldri styrte alene. Anbefalt: bare dem som har en egen rad i Wikipedias hovedliste.
  - `france`: Merovingerkonger over delriker (Austrasia, Neustria). Anbefalt: bare dem som står i «List of French monarchs».
- **Tier:** som i Spec 10. Nye svar får tier etter sidevisningene. Etterpå kjøres `rarity.mjs` og `summaries.mjs`. Kjent pris: med mange ukjente paver får de kjente pavene lavere tier.
- **Invarianter:**
  - Bare nye svar, nye aliaser og nye `amb`-linjer. Ingen display endres eller fjernes (invariant 3), og `ROTATION` er urørt (invariant 1).
  - Spillet kaller fortsatt ikke Wikipedia (invariant 7).
- **Grense mellom systemer:** Verktøyendringen og datainnlegget committes hver for seg.

## 3. Implementation Details & Scope Boundaries
- **Endres:**
  - `tools/suggest-answers.mjs`: kilder for de fire promptene, avgrensning i tid, forslag til `amb` og sperre mot aliaser uten nummer som blir tvetydige
  - `js/data/prompts.js`: etter godkjenning
  - `js/data/rarity.js` og `summaries.js`: generert
  - `tools/check.mjs`: nye eksempler i matching-testen
  - `06-progress-tracker.md`
- **Endres ikke:**
  - `js/app.js`
  - Scene, Sound og UI
  - `ROTATION`
  - andre prompts

## 4. Verification Checklist
- [x] Forslagsfiler for alle fire prompts. Eier overlot valgene til meg («gjør det du tror er best»), så anbefalingene i specen er brukt.
- [x] Antall etter innlegging stemmer med listene (avvik forklart i sesjonsnotatet).
- [x] `--apply` nekter når et alias uten nummer blir tvetydig, og skriver ingenting da.
- [x] Nye tester er grønne:
  - Navn uten nummer gir `amb`: «Sixtus», «Gregory», «Go-Fukakusa» skal ikke gi Fukakusa.
  - Navn med nummer gir riktig svar: «Sixtus V», «Gregory 2».
  - «Daigo» og «Go-Daigo» er fortsatt hvert sitt svar.
  - «Constantine» i `byzantine` gir fortsatt `nope`.
- [x] `npm test` er grønn. `npm run bench` viser ikke flere falske treff enn før (78).
- [x] `rarity.mjs` og `summaries.mjs` er kjørt, og diffen er sjekket.
- [x] Full runde i headless Edge uten konsollfeil, med et nytt svar fra hver prompt.
- [x] `06-progress-tracker.md` oppdatert.
