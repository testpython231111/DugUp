# 06 — Progress Tracker

_Eneste kontekstfil som oppdateres kontinuerlig. Oppdater før og etter hver arbeidsøkt._

## Nåværende fase
**Fase 1 — Robusthet og vedlikeholdbarhet.** Spillet er lansert (Dig #1 = 22. nov 2026). Spec 01–11 er merget: tester, stabil rotasjon fryst til jan 2028, filer delt opp, sjeldenhet og oppsummeringer forhåndsberegnet, to visuelle feil rettet (Spec 07), GitHub kjører testene ved hver push og daglig (Spec 08), matchingen godkjenner ikke lenger feil navn som et annet svar (Spec 09), og guder og kriger har fått svar fra Wikipedia (Spec 10). Alle 150 prompts har fått skrivemåter fra Wikipedia (Spec 11). Eier har sjekket Spec 04–06 på dugup.eu og sier at alt ser bra ut.

## In Progress
- **Spec 15–17** (opprydding, eksport/import, herskere fra Wikidata). Eier: «3,4,5 kjør ut».

## Completed
- [x] 2026-11-26: **Spec 14 — «Should this count?»** Ved et svar som ikke finnes, vises en lenke til en ferdig utfylt GitHub-issue med prompt og svar (`suggestURL`). Ikke ved `nope`, riktige svar eller tidsavbrudd. 31 tester grønne. Headless Edge (practice): lenken vises ved feil svar og ikke ved riktig, `<b>"&</b>` blir escapet, og den eneste konsollfeilen er Vercel-analytics over `file://`. Pushet rett til `main` etter eiers beslutning.
- [x] 2026-11-26: **Spec 13 — Månedlig oppdatering som GitHub Action.** Pushet rett til `main` etter eiers beslutning («ja kjør på med alt»). PR #2 ble lukket. Actions-innstillingen er slått på. Første manuelle kjøring (run 45792650792) var grønn på ~11 min, åpnet PR #3 med `rarity.js` og `summaries.js`, og «Tests» kjørte grønt på branchen (run 45794344447).
- [x] 2026-11-26: **Spec 12 — Fulle lister for herskere (pilot: `pope`, `japanemp`, `byzantine`, `france`).** Eier ba om commit og merge («gjør alt i 1-3 nå med en gang»). Committet i to deler (verktøy og data), og merget via PR #1 da «test» var grønn (run 45791995688). Vercel preview ble bygget uten feil. bench før merge: 78 / 73, som i sesjonsnotatet.
- [x] 2026-11-23: **Spec 11 — Skrivemåter fra Wikipedia for alle prompts** (punkt 1 i planen under). Eier sa «ja kjør på». Merget til `main` 2026-11-23 etter eiers beslutning («push merge og kjør ut»). GitHub Action var grønn på branchen (run 45199011504) og på `main` (run 45199024425). Publisert `prompts.js`, `app.js` og `index.html` på dugup.eu er identiske med `main`.
  - **Data:** 5 127 nye aliaser for 3 114 svar i 148 prompts. Ingen nye svar og ingen display endret. Eksempler: «Marc Aurel», «Axumites», «Tiwaz», «Sakyamuni», «Marshal Ney», «Hiuen Tsang» og «Fax machine».
  - **Verktøy:** `--all --aliases-only` og `--apply --all`. Det har nye regler mot feil skrivemåter (se specen). `tools/alias-rejects.json` har 564 avviste aliaser i 112 prompts.
  - **Måling:**
    - bench: falske treff er uendret (78 / 71).
    - Redirect-recall gikk fra 63,2 % til 68,4 %, og redirects som gir feil svar gikk fra 227 til 195.
    - 29 tester er grønne. Full runde i headless Edge.
- [x] 2026-11-23: **Spec 10 — Flere svar fra Wikipedia (pilot: `mesogods`, `wars`).** Merget til `main` 2026-11-23 etter eiers beslutning («ja kjør på»). GitHub Action var grønn på branchen (run 45180599229), og Vercel preview ble bygget uten feil.
  - **Verktøy:** `tools/suggest-answers.mjs` foreslår svar og aliaser fra Wikipedia. `--apply` legger inn de godkjente linjene og advarer om utelatte navn som ville blitt godtatt som et annet svar.
  - **Data:**
    - mesogods: 67 → 136 svar.
    - wars: 114 → 273 svar.
    - 161 nye aliaser, for eksempel «100 years war», «usa civil war» og «sepoy rebellion».
    - «Mexican War» er tvetydig.
  - **Måling:** bench har 78 falske treff (før 108). Tester: 29 grønne. Full runde i headless Edge.
- [x] 2026-11-23: **Spec 09 — Strammere matching.**
  - **Feil rettet:** Navn som ikke står på lista, rettes ikke lenger til et annet svar («Kubaba» → Zababa, «Anzu» → Apsu, «French Revolutionary Wars» og «Mexican War of Independence» → American Revolutionary War, «Cisplatine War» → Platine War).
  - **Måling:** Nytt verktøy `npm run bench` måler mot ekte Wikipedia-navn. Falske treff gikk fra 240 til 108 og kryss-treff fra 1 285 til 68. Skrivefeil godtas i 98,2 % av tilfellene (før 96,3 %), redirects i 61,7 % (før 69,3 %).
  - **Tester:** 28 grønne. Full runde verifisert i headless Edge.
  - **Merget** til `main` 2026-11-23 etter eiers beslutning.
- [x] 2026-11-23: **Spec 08 — GitHub Action kjører `npm test`.** `.github/workflows/test.yml` kjører testene ved hver push og pull request, daglig kl. 05:00 UTC og manuelt. Første kjøring på GitHub var grønn (26/26, Node 26.13.1). Status-merke i README. Merget til `main`.
- [x] 2026-11-23: **Spec 07 — Etiketter og sol fri for overlapp.** Merget til `main` og verifisert live (publisert `app.js` er identisk med `main`). Tannhjul, flasker, steiner og røtter legges ikke lenger oppå era-etikettene eller 100M-merkene, og sola om dagen er flyttet bort fra dybdemåleren. 26 tester grønne.
- [x] 2026-11-22: Spec 04–06 sjekket live på dugup.eu av eier: «det ser bra ut».
- [x] 2026-11-22: **Spec 06 — Kort oppsummering på reveal.** `tools/summaries.mjs` skriver `js/data/summaries.js` (5 638 tekster, 926 KB / 314 KB gzip, lastes async). Reveal viser 1–2 setninger og en Wikipedia-lenke for funn med tier ≥ 4. Ingen bilder. 26 tester grønne. Merget til `main` etter eiers beslutning, uten eiers test i nettleser og uten Vercel preview først.
- [x] 2026-11-22: **Spec 05 — Forhåndsberegnet sjeldenhet.** `tools/rarity.mjs` skriver `js/data/rarity.js` (291 KB, 125 KB gzip), og spillet kaller ikke Wikipedia lenger. Rangeringen er identisk med den gamle live-koden. 23 tester grønne. Eier har testet lokalt, inkludert Network-fanen. Vercel preview bygget uten feil. Merget til `main` 2026-11-22 etter eiers beslutning.
- [x] 2026-11-22: **Spec 04 — Frys rotasjonen et år fram.** Sesong 3–20 frosset (dekker til Dig #408, ca. 3. jan 2028). Nye verktøy: `--freeze-until <dato>`, `--add-prompt <id>` og en snapshot som bare kan vokse. Dig #1–#440 er identiske før og etter. 18 tester grønne. Eier har testet lokalt i nettleser, og alt så riktig ut. Vercel preview bygget uten feil. Merget til `main` 2026-11-22 etter eiers beslutning.
- [x] 2026-11-22: **Spec 03 — Del opp `index.html`.** Filene er nå `css/style.css`, `js/data/prompts.js` og `js/app.js`, uten byggesteg. 16 tester grønne. Merget til `main` etter eiers beslutning, uten preview-sjekk først. Eier har verifisert hele siden på dugup.eu etterpå, og alt fungerer.
- [x] 2026-11-22: Spec 02 merget til `main` og verifisert live på dugup.eu av eier.
- [x] 2026-11-22: **Spec 02 — Stabil daglig rotasjon.** `ROTATION` (frosne sesonger med id-er) i data-scriptet; sesong 1 = opprinnelig rekkefølge, sesong 2 frosset. Nye prompts legges til på slutten av siste sesong. `node tools/check.mjs --freeze-season` fryser neste. 16 tester grønne.
- [x] 2026-11-22: **Spec 01 — Automatiske sjekker.** `npm test` / `node tools/check.mjs` (11 tester: data, practice, matching, rotasjon mot snapshot Dig #1–#30). Grønn på dagens `index.html`. Merget til `main`.
- [x] Spillet lansert på dugup.eu (150 prompts, ~11 000 svar).
- [x] 2026-11-22: Kontekstsystem satt opp (`CLAUDE.md`, `context/01–06`, `.gitignore`, feature-spec-mal).

## Neste (i prioritert rekkefølge)
- **Flere svar for resten av promptene, i bolker.** Bygger på verktøyet fra Spec 10. Hver bolk får sin egen spec og trenger eiers grønt lys.
  1. ~~**Aliaser for alle 150 prompts.**~~ Ferdig i Spec 11.
  2. **Fulle lister for herskere og embeter** (pilot i Spec 12). Før neste bolk: bytt kilde fra Wikipedia-listesider til Wikidata (stilling + tidsrom), med Wikipedia-listen som kontroll. De håndskrevne filterreglene i Spec 12 var skjøre. Gjenstår: faraoer, kinesiske keisere, andre konger og statsministre.
  3. **Åpne kategorier** i bolker på cirka 10, på samme måte som piloten: guder, slag, byer, borger, oppfinnelser og lignende.
  4. **«Famous …»-prompts** (berømte taler, malerier, svindler og dyr) tas sist eller ikke i det hele tatt, fordi «berømt» ikke har en kategori.

  Hver bolk kjøres gjennom `npm test`, `npm run bench` og `--apply`-advarselen før den committes. Kjent pris: når en prompt får mange mindre kjente svar, gir de kjente svarene mindre dybde.

### Faste oppgaver
- **Månedlig:** GitHub Action `monthly-data.yml` kjører `rarity.mjs`, deretter `summaries.mjs` og `npm test` den 22. hver måned og åpner en PR (Spec 13). Eier ser over diffen og merger. Første gang 22. des 2026. Kan også kjøres manuelt: `gh workflow run monthly-data.yml`.
- **Årlig:** `node tools/check.mjs --freeze-until <dato et år fram>` når testen sier fra (ca. des 2027).

### Mulige neste specs (ikke prioritert, trenger eiers valg)
- Dele `js/app.js` i moduler, eventuelt `prompts.js` per kategori.
- Automatiske UI-tester (Scene, Sound, skjermflyt) i headless nettleser.

## Arkitekturbeslutninger
- **ADR-001:** Ingen backend/rammeverk. Statisk side på Vercel, all state i `localStorage`.
- **ADR-002:** Rarity fra Wikipedia pageviews (60 dager), offline-tiers som fallback.
  - **Endret (Spec 05, 2026-11-22):** Rangeringen forhåndsberegnes månedlig av `tools/rarity.mjs` til `js/data/rarity.js`, i stedet for live i hver nettleser. Begrunnelse: lik dybde for alle spillere, ingen forespørsler under spill, ingen kappløp mellom sjekk og runde. Pris: tallene er opptil en måned gamle, og oppdateringen er et manuelt steg.
- **ADR-003 (2026-11-22):** Daglig rotasjon er en eksplisitt, append-only liste av frosne sesonger med prompt-id-er (`ROTATION`), ikke beregnet fra `PROMPTS`. Når sesongene er brukt opp, genereres neste med seed `dugup-order-v<n>` og fryses i god tid. Begrunnelse: innhold kan legges til uten å flytte publiserte digs. Pris: nye prompts dukker først opp når siste sesong er spilt ut, og frysing er et manuelt steg (testen varsler 14 dager før).
  - **Tillegg (Spec 04, 2026-11-22):** Rotasjonen fryses ~et år fram (`--freeze-until`). Nye prompts settes inn i alle frosne sesonger som starter etter de låste digsene (snapshoten + i dag + 14 dager), på en seedet plass utenom sømmen (`--add-prompt`). Snapshoten er append-only. Begrunnelse: en sesong varer bare ~20 dager, så manuell frysing hver 3. uke var for skjørt, og nye prompts skal komme inn i spillet raskt. Pris: `ROTATION` vokser ~2 KB per sesong (~35 KB per år), og frysing må gjøres én gang i året.

## Kjente risikoer
- Frysing er fortsatt manuelt, men bare én gang i året (neste gang ca. desember 2027). `npm test` varsler, og GitHub Action kjører testene daglig og sender e-post når de feiler (Spec 08).
- Legger man et prompt rett i `ROTATION` for hånd i stedet for med `--add-prompt`, havner det bare i én sesong. Testen «every frozen season that has not started holds every daily prompt» fanger det.
- Sjeldenhet og oppsummeringer oppdateres av en GitHub Action hver måned, men PR-en må merges for hånd. Blir den liggende, blir tallene eldre, men ingenting går i stykker. Kjøres `summaries.mjs` før `rarity.mjs`, mangler nye sjeldne svar tekst til neste kjøring.
- `js/data/summaries.js` (~930 KB) er den største filen. Den lastes `async` og bremser ikke oppstarten, men øker datatrafikken (~315 KB komprimert per besøk uten cache). Tier-grensen kan heves til ≥ 5 hvis det blir et problem.
- Oppsummeringene er Wikipedia-tekst under CC BY-SA 4.0. Kreditering: lenke til artikkelen på reveal og en linje i README. Fjernes lenken, brytes lisensen.
- Testene dekker data, matching, rotasjon, rarity og summaries, men ikke UI/Scene/Sound — det verifiseres fortsatt manuelt i nettleser.
- `js/data/prompts.js` (~440 KB) er fortsatt stor. Den kan senere deles opp per kategori, og `app.js` kan deles i moduler; det blir egne specs.
- Etter Spec 03 er det ikke lenger nok å laste opp bare `index.html` via GitHub-webgrensesnittet (se README «Updating the site»).

## Sesjonsnotater
- **2026-11-26 (Spec 12 merge og Spec 13):**
  - **Spec 12:** committet og merget via PR #1 (se Completed).
  - **Spec 13:** `.github/workflows/monthly-data.yml` er skrevet. En push gjort med `GITHUB_TOKEN` starter ikke `test.yml`, så workflowen starter den selv med `workflow_dispatch` på data-branchen. Ellers ville PR-en mangle «test»-sjekken.
  - **Eiers beslutning:** ingen branch protection på `main`. Eier vil kunne pushe rett til `main` herfra.
  - **Actions-innstillingen:** Første `gh api`-kall med `-F` ga ingen feil, men lagret ikke verdien. Det virket først med JSON via `--input`.
  - **Kjent støy:** PR-er som boten åpner, får også en `pull_request`-kjøring av Tests med «action_required». Den kan ignoreres, for den ekte sjekken er `workflow_dispatch`-kjøringen på branchen. Den vises ikke under `gh pr checks`, men under Actions.
- **2026-11-23 (Spec 12):**
  - **Data:** pope 81 → 265 (alle personer; Wikipedias 267 teller pontifikater, og Benedict IX satt tre ganger). japanemp 53 → 129 (124 personer, siden Kōken/Shōtoku og Kōgyoku/Saimei er de samme, pluss 5 i nordhoffet; Kōbun lagt til for hånd). byzantine 73 → 83 (nøyaktig de 10 som manglet, inkludert 4 i Nikaia). france 59 → 76. Navn som deles av flere spør «Which …?» (pope 28, byzantine 3, france 11). «Clovis» gir fortsatt Clovis I.
  - **Utelatt:** motpaver, Jingū, medkeisere og keiserinner som ikke styrte alene, frankiske småkonger før Clovis (unntatt Chlodio) og konger over delriker.
  - **Feil funnet underveis:** `[A-Z]` slapp ikke gjennom «Ō» (Ōgimachi, Kōbun manglet), årstall med to sifre ble ikke lest (Augustus og Nero slapp inn i byzantine), og medkeisere kom med som vanlige svar. Alle rettet før innlegging.
  - **Måling:** 30 tester grønne. bench: 78 falske treff (uendret), kryss-treff 71 → 73 (begge riktige: «Constantine» gir Konstantin den store i `rome`, «Alexander» gir Aleksander den store i `commanders`). `--apply` uten `=|clovis` nekter og skriver ingenting (md5 uendret). rarity: 11 447 av 11 548 svar rangert, 0 feil. summaries: 5 909 tekster, 967 KB.
  - **Headless Edge:** practice-runde med pope, japanemp, byzantine og france. «Gregory», «Theodore» og «Dagobert» gir toast «Which …?». Anicetus, Ōgimachi (skrevet «Ogimachi»), Theodore II Laskaris (med oppsummering), Clovis I og Formosus gir funn. Resultatskjermen stemmer. Ingen konsollfeil.
  - **Lærdom:** Regex-filtre på kortbeskrivelser krever mye håndarbeid per prompt. Neste bolk bør bruke Wikidata.
  - **Ikke verifisert:** ekte nettleser hos eier og Vercel preview.
- **2026-11-23 (Spec 11):**
  - **Gjennomgang:** Verktøyet foreslo 5 870 aliaser. Jeg leste alle 1 952 som ikke deler et ord med svaret. Det som gikk igjen av feil:
    - slektninger og ektefeller («Black Buffalo Woman» → Crazy Horse)
    - personer i bøker («Jane Fairfax» → Emma)
    - deler av ting («passenger car» → Ferris wheel)
    - folkenavn («Lacedaemonians» → Sparta)
    - steder og bydeler («Silicon Allee» → Berlin)
    - artikler som dekker flere svar («Maya gods» → Buluc Chabtan)

    Feilene ble enten generelle regler i verktøyet eller havnet i `tools/alias-rejects.json`.
  - **Funnet av bench etter innlegging:**
    - «Battle of the Capes» ble til «capes» og tok alle «Battle of Cape …» som Battle of the Chesapeake (naval fra 33 til 60 falske treff). Rettet med regelen mot ett generisk ord.
    - «eleuthia», «sakhet» og «frija» ga nye feiltreff. De er avvist.
  - **Funnet ved innlegging:**
    - En redirect med backtick («\`ashtart») brøt `prompts.js`. `--apply` stopper nå slike tegn før noe skrives.
  - **Kjent pris:** «Augustuus» (skrivefeil for Augustus) går nå til Romulus Augustulus.
  - **Tips:** Forslagskjøringen for alle prompts tar ca. 1,5 time, fordi personer har hundrevis av redirects. Kjør den i bakgrunnen.
- **2026-11-23 (Spec 10):**
  - **Godkjenning:** Eier svarte «ser bra ut» på forslagsfilene. Mine anbefalte endringer ble lagt inn, og alt er beskrevet i specen.
  - **Funnet etter innlegging:**
    - `normalize` dropper ordene «revolution» og «crusade» fra nøkler. Aliaset «american revolution war» ble derfor «american war» og tok «American War of 1812». Fjernet.
    - Nye korte navn tok ekte navn som ikke var svar: «Ingrian War» → Iberian War, «Karonga War» → Kalinga War, «Ningirida» → Ningirima. Lagt inn som egne svar.
    - Sjekken er nå en advarsel i `--apply`.
  - **Ikke rettet, vurdert som akseptabelt:**
    - «Nintu/Nintur» gir Mami. Begge er navn på modergudinnen.
    - «First/Third Indian War» gir American Indian Wars, som serien.
    - «Granada» og «Battle of Varna» gir krigen, fordi andre prompts har dem som alias for samme artikkel.
  - **Verifisert:** GitHub Action er grønn på branchen, og Vercel preview er bygget uten feil.
  - **Ikke verifisert:** eiers test i ekte nettleser.
- **2026-11-23 (Spec 09):**
  - **Bakgrunn:** Eier meldte at mange mesopotamiske guder og kriger fra Wikipedia ikke godtas. Diagnosen var todelt.
    - Det viktigste er at svarlistene er lukkede, uten tilbakemeldingssløyfe. Det er Spec 10.
    - Dessuten ga matchingen *feil* svar: et navn som ikke står på lista, ble «rettet» til et annet svar. Det er verre enn å avvise, fordi spilleren tror svaret er godkjent.
  - **Arbeidsmåte:** Måleverktøyet ble skrevet først. Hver regel ble beholdt eller forkastet etter tallene, og alle tall står i specen.
  - **Avvist underveis:**
    - Krav om samme forbokstav også på senere ord. Det traff typo på etternavnets første bokstav og ga 90 % typo-recall.
    - 2 feil for 6–7 bokstaver, som ga 13 nye falske treff.
    - Ett-ords-navn sist uten vern. Da ble «Flavius Honorius Augustus» godkjent som Augustus.
  - **Funnet i egen gjennomgang:** En feil der «Battl of Diu (1509)» ble avvist fordi KNOWN-sjekken stoppet fallbacken. Rettet og testet.
  - **Kjent pris:**
    - Skrivefeil i første bokstav på korte navn godtas ikke lenger («Xeus»).
    - En del lange offisielle navn og omskrivinger fra Wikipedia-redirects godtas ikke lenger.
  - **Verifisert:** GitHub Action er grønn på branchen, og Vercel preview er bygget uten feil.
  - **Ikke verifisert:** eiers test i ekte nettleser.
  - **Data:** `tools/match-bench-data.json` (584 KB) er sjekket inn, slik at målingen kan gjentas med de samme tallene. Den publiseres også på dugup.eu/tools/, men inneholder bare offentlige Wikipedia-titler.
- **2026-11-23 (Spec 08):** Workflowen ble pushet på branch og kjørte grønt på GitHub før merge (run 45148516925). Testene bruker lokal dato, og Actions kjører i UTC, så fristvarselet kan komme én dag forskjøvet rundt midnatt. GitHub slår av planlagte kjøringer i offentlige repoer etter 60 dager uten aktivitet; de månedlige commitene med rarity/summaries holder den i live. Actionen blokkerer ikke Vercel-deploy: en rød test stopper ikke en push til `main`, den varsler bare.
- **2026-11-23 (Spec 07):** En bredere pikselpuss ble først prøvd (dithret lys, nye arm- og spadeanimasjoner, hit-stop, nye scroll/shard-sprites, nye farger i de dype lagene). Eier sammenlignet før og etter og likte originalen best, så branchen ble slettet uten commit. Bare to ekte feil ble rettet: overlapp på etikettene og sola bak HUD-en. Verifisert i headless Edge i alle døgnfaser og på 0/80/240/420/640 m. Pynten i jorda flytter seg litt fordi noen plasser hoppes over; ellers er utseendet uendret. Ikke verifisert: ekte nettleser hos eier og Vercel preview.
- **2026-11-22 (dokumentasjon):** README og `context/01–06` gjennomgått og oppdatert etter Spec 04–06. Ingen kodeendringer.
- **2026-11-22 (Spec 06):** `tools/summaries.mjs` henter intro-tekst (`prop=extracts`, 20 titler per forespørsel) for 5 891 svar med tier ≥ 4: 288 forespørsler, 0 feil, ~4 min. 5 638 oppsummeringer er beholdt, 253 droppet (pekersider, for korte, rotete parenteser). `summaries.js` er 926 KB (314 KB gzip), under grensen på 1,5 MB, og lastes `async`. Etter første kjøring endte én tekst på «Maj.», så forkortelsesregelen ble utvidet, og tekster med ubalanserte parenteser droppes. Headless Edge: en practice-runde med et sjeldent svar viser oppsummeringen og Wikipedia-lenken. Ingen horisontal scroll målt (scrollWidth = clientWidth), men headless Edge går ikke under 492 px, så ekte mobilbredde er ikke testet. Når nettverket feiler, skriver scriptet ingenting. 26 tester grønne.
- **2026-11-22 (Spec 05):** Lasteren (DOM-stub + vm) er flyttet fra `tools/check.mjs` til `tools/load-game.mjs`, så `tools/rarity.mjs` kan bruke den. `rankPrompt` ga samme tier og visningstall som `Live.prepare` for alle 11 033 svar (engangssjekk med kunstige visningstall før Live ble fjernet). Ekte kjøring: 202 batcher, 683 forespørsler, 0 feil, ~6 min; 10 932 av 11 033 svar rangert, ingen prompts falt tilbake til offline. `rarity.js` er 291 KB (125 KB gzip), under grensen på 400 KB, så ingen avrunding. Funn: bare 38 % av svarene har samme tier live som offline (45 % ±1, 17 % ±2 eller mer), så spillere uten Wikipedia fikk tidligere ganske annen dybde. Med `--api` mot en død adresse avbryter scriptet etter 12 feilede batcher og skriver ingenting. Headless Edge viser «● Rarity from Wikipedia · Nov 2026». Underveis mistet to regexer backslashene sine da jeg skrev filer via script (rettet, og månedstesten fanger det nå), og `tools/check.mjs` ble en gang overskrevet ved et uhell og gjenopprettet fra git. 23 tester grønne. Eier har etterpå testet lokalt i nettleser, inkludert Network-fanen, og alt fungerer. Ikke verifisert: Vercel preview.
- **2026-11-22 (Spec 04):** `tools/check.mjs` leser og skriver `ROTATION` som en liste av sesonger, og nekter å skrive hvis den ikke kan gjenskape filen byte for byte. Filen bruker CRLF i arbeidskopien, og verktøyet skriver tilbake med samme linjeskift. `--freeze-until 2027-12-31` fryste sesong 3–20, og en ny kjøring gjør ingenting. Verifisert: Dig #1–#440 identiske med `main` (sammenlignet med et eget script). Kjørt på en kopi: `--add-prompt` med testprompt satte det inn i sesong 3–20, Dig #1–#30 uendret, 18/18 grønne. Ukjent id, practice-id og id som allerede er i ROTATION gir feil, og filene er uendret etterpå. `--write-snapshot` med en endret dig i snapshoten nekter å skrive. Headless Edge over `file://` starter med Dig #1 og Live-badge. `app.js` er ikke endret. Ikke verifisert: at snapshoten vokser forbi Dig #30 (skjer først når i dag + 14 > 30, ca. 8. des), full spillrunde i ekte nettleser, og Vercel preview.
- **2026-11-22 (planlegging):** Spec 04 (utkast), 05 og 06 (skisser) skrevet. Ingen kodeendringer. Funn: en sesong varer bare ~20 dager, så manuell frysing ville vært nødvendig hver ~3. uke. Live-rarity hentes per spiller og lagres ikke, så dybden kan variere mellom spillere. Eier har bestemt: ingen bilder fra Wikipedia (pikselstil).
- **2026-11-22:** Innført Spec-Driven Development etter pensumet «Systemarkitektur og Spec-Driven Utvikling med AI». Ingen kodeendringer i `index.html`.
- **2026-11-22 (Spec 01):** `tools/check.mjs` kjører begge inline-scripts i `node:vm` med en generisk Proxy-stub for DOM (ingen endring i `index.html`). Wikipedia simuleres som nede. `PRACTICE_IDS` leses via `practicePrompts()` siden konstanten er inne i IIFE-en. Verifisert: grønn på dagens fil; endret prompt-id og nytt prompt gir rød rotasjonstest. Fant og rettet Demosthenes-duplikatet i `greekleaders`: generalen heter nå «Demosthenes, son of Alcisthenes» (aliaser: alcisthenes/pylos/strategos). Det gamle aliaset «demosthenes general» virket aldri fordi `general` er stoppord, så ingen spillere kan ha generalen i museet — taleren beholder nøkkelen `greekleaders|Demosthenes` (invariant 3 ok). Rotasjonen uendret (snapshot grønn). Node var ikke installert på maskinen — testet med portabel Node v26.
- **2026-11-22 (Spec 02):** Eier valgte (b) nye sesonger. `ORDER` erstattet av `seasonOrder` (samme algoritme, nå på id-er) + `ROTATION`-strøm. Engangssjekk: `seasonOrder('dugup-order-v1')` = frosset sesong 1. Dig #1–#20 identiske; #21–#30 endret fordi listen før gikk rundt til start (ingen publisert ennå), snapshot regenerert. Sømmen mellom sesonger holdes fri for gjentakelser (ingen prompt fra de 2 siste digsene kommer igjen i de 2 første). `dailyPrompts(n<1)` gir nå Dig #1 (før: slutten av listen) — gjelder bare klokker før lansering. Node finnes i `C:\Program Files\nodejs` (ikke på PATH i Git Bash). Ikke verifisert i nettleser.
- **2026-11-22 (Spec 03):** `index.html` er delt opp med et engangsscript som bruker eksakte linjeområder: `css/style.css` (linje 14–248), `js/data/prompts.js` (394–12978, `PROMPT_DATA` og `ROTATION`) og `js/app.js` (12981–14865). Scriptet verifiserte at bitene satt inn igjen inline gir nøyaktig den opprinnelige filen, så ingenting er endret i innholdet. Script-taggene står på samme plass og i samme rekkefølge, med relative stier. `tools/check.mjs` leser nå lokale `<script src>`-filer i dokumentrekkefølge, og `--freeze-season` og legg-til-prompt-testen redigerer data-filen. Verifisert: 16/16 tester grønne. `--freeze-season` er kjørt på en kopi og gir grønne tester etterpå. Headless Edge over `file://` gir identisk DOM etter oppstart sammenlignet med `main`, inkludert Live Wikipedia-badge, og skjermbildet ser riktig ut. Ikke verifisert: full spillrunde, practice, museum, wardrobe, past digs og lyd i ekte nettleser, eksisterende `localStorage` fra produksjon, og Vercel preview.
