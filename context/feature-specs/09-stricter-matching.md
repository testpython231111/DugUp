# Feature Spec 09: Strammere matching — ingen feil svar godkjent som et annet

## 1. Goal
`matchAnswer` skal slutte å godkjenne et svar som ikke er på lista som om det var et annet svar (f.eks. «Kubaba» → Zababa, «French Revolutionary Wars» → American Revolutionary War). Vanlige skrivefeil og navnevarianter som godtas i dag, skal fortsatt godtas. Ikke med: flere svar i listene (egen spec), endringer i `PROMPT_DATA`, tier eller rotasjon.

## 2. Design & Architecture Decisions
- **Måling før endring.** Et måleskript (`tools/match-bench.mjs`) gir to tall:
  - *Falske treff:* ekte navn som ikke er svar på promptet (Wikipedia-kategorier og svar fra andre prompts) men likevel godkjennes som et svar.
  - *Treffsikkerhet:* syntetiske skrivefeil i svarnavn og Wikipedia-redirects til svarenes artikler som godkjennes som riktig svar.
  Endringene velges ut fra tallene, ikke magefølelse.
- **Regler som strammes** (endelig utforming bestemmes av målingen):
  - Fuzzy-treff krever samme forbokstav, og antall tillatte skrivefeil per lengde justeres.
  - «Inneholder»-regelen (et kjent navn inne i et lengre svar) må treffe hele ord, ikke deler av ord («Cisplatine» inneholder ikke «Platine»).
- **Endelige regler** (beskrevet i `02-architecture.md`, «Matching»):
  - Et navn spillet kjenner fra et annet prompt rettes aldri til et svar her.
  - Fuzzy krever samme førstelyd. Unntaket er én feil i første bokstav i navn på 8+ bokstaver.
  - 4–7 bokstaver tåler 1 feil, ikke 2.
  - Byttede nabobokstaver teller som én feil.
  - Ett byttet tegn i korte navn godtas bare for nabotaster, vokaler eller lydlike bokstaver.
  - Hvert ord i et navn med flere ord må ligne sitt motstykke.
  - «Inneholder» er erstattet av regler på hele ord: navnet først, et etternavn eller ett-ords-navn sist, eller initialer.
  - Ord eller ordenstall foran navnet, et annet årstall og «X of Y» stopper treffet.
- **Valg tatt på tall:**
  - 2 feil for 6–7 bokstaver ville gitt +0,8 prosentpoeng redirects, men 13 nye falske treff (Semele→Selene, Charis→Charon). Derfor 1.
  - Tillatte feil styres av svarets lengde, ikke inputens («Betoven»), og input på ≤ 3 bokstaver må være eksakt, så «Abu» ikke blir Apsu.
- **Invarianter:** Display-nøkler, tier, rotasjon og lagring er urørt (invariant 1, 3, 5). Et svar som godtas i dag, kan bli avvist etterpå. Det er tilsiktet for falske treff og skal ellers være sjeldent; målingen viser hvor mye.

## 3. Implementation Details & Scope Boundaries
- Endres: `js/app.js`, seksjonen TEXT NORMALISATION & MATCHING (`normalize`, `lev`, `allowed`, `matchAnswer`, eventuelt `buildPrompts` for ord-tokens).
- Nytt: `tools/match-bench.mjs` (offline måling mot bufrede Wikipedia-data; henter bare når `--fetch` er gitt) og nye regresjonstester i `tools/check.mjs`.
- Endres ikke: `js/data/*`, Scene, Sound, UI.

## 4. Resultat (`npm run bench`, data hentet 2026-11-23)
| | `main` før | Etter |
|---|---|---|
| Wikipedia-navn som ikke er svar, men godkjennes | 240 av 2 263 (10,6 %) | 108 (4,8 %) |
| Svar fra andre prompts godkjent som et annet svar | 1 285 | 68 |
| Skrivefeil godtatt | 96,3 % | 98,2 % |
| Skrivefeil i første bokstav godtatt | 98,9 % | 78,4 % |
| Wikipedia-redirects godtatt | 69,3 % | 61,7 % |
| Redirects godkjent som *feil* svar | 507 | 217 |

- **De gjenværende 108:** mange er samme navn med en annen Wikipedia-side («Aeolus», «Battle of Copenhagen» → 1801), nær slektninger («Dagon»≈Dagan, «Dellingr»≈Delling) eller enkeltkriger i en serie («First Opium War» → Opium Wars).
- **De gjenværende 68 kryss-treffene:** nesten alle eksakte aliaser i dataene («Henry IV» av Frankrike → Henry IV, «Paris» → Liberation of Paris). Det er et datavalg.
- **Redirect-fallet:** mest navn som før traff ved flaks gjennom deler av ord eller generiske aliaser («USA civil war» via «civil war», samme regel som ga «Muscovite Civil War»). Det rettes best med flere aliaser i en egen data-spec.

## 5. Verification Checklist
- [x] Falske treff går klart ned i målingen; treffsikkerheten for skrivefeil og redirects faller lite. Skrivefeil opp, redirects −7,6 prosentpoeng, se over.
- [x] Regresjonstester: Kubaba, Anzu, French Revolutionary Wars, Mexican War of Independence og Cisplatine War avvises, sammen med ti andre. Eksisterende typo-tester består, og 13 nye typo- og variant-tester er lagt til.
- [ ] `npm test` grønn lokalt (28/28) og i GitHub Action.
- [x] Full runde (practice + daily, med feil svar og skrivefeil) i headless Edge uten konsollfeil.
- [x] `06-progress-tracker.md` oppdatert.
