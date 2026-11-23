# Feature Spec 11: Skrivemåter fra Wikipedia for alle prompts

## 1. Goal
Spillere skriver ofte et svar slik Wikipedia også kjenner det, for eksempel «100 years war», «Sepoy Mutiny» eller «Battle of the Nations». Spillet avviser slike navn hvis de ikke står som alias. Spec 10 la til slike aliaser for `mesogods` og `wars`. Denne specen gjør det samme for alle 150 prompts, men bare for svarene som allerede finnes.

Ikke med:
- nye svar (de kommer i senere specs: fulle lister for herskere, deretter åpne kategorier)
- endringer i matching
- endringer i rotasjonen

## 2. Design & Architecture Decisions
- **Kilde:** Wikipedia-redirects til artikkelen for hvert svar. De brukes bare når selve navnet har minst 20 visninger på 60 dager og spillet ikke godtar det fra før. Høyst 4 per svar.
- **Filtrering uten regler per prompt:**
  - **Redirects til en seksjon droppes.** De peker nesten alltid til et delemne, for eksempel Treaty of Villafranca → en krig eller Whiskey tax → et opprør.
  - **Redirects som Wikipedia har merket som delemne, beslektet emne, medlem eller verk droppes.**
  - **Et alias kan ikke være en annen type ting enn svaret.** Ord som battle, treaty, army, temple, city, list og death hører til hver sin familie. Et alias får bare ha familier som svaret selv har, eller som er vanlige i promptens svar (minst 10 %). «Battle of Melouna» er ikke en krig, «Ishtar Gate» er ikke en gud og «Assassination of X» er ikke en person. «Segovia Castle» er derimot greit i borg-prompten.
  - **Et svar som er en del av artikkelen sin, får ingen aliaser.** «Palace of Knossos» peker til Knossos, «Trial of Marie Antoinette» til Marie Antoinette og «Buluc Chabtan» til en liste over maya-guder. Da er artikkelens andre navn navn på noe annet. Sjekken er at svaret og artikkeltittelen har de samme ordfamiliene.
  - **Ord spillet hopper over:** Et alias kan ikke inneholde et slikt ord (revolution, battle, king …) hvis ikke svaret selv har det. Ellers blir «American Revolution War» til «american war».
  - **Ett generisk ord avvises.** Eksempler er «The Empire» og «Battle of the Capes», som blir «capes». Spillet tar et ett-ords navn som starten på lengre navn, så «capes» ville gitt treff på alle «Battle of Cape …».
  - **Andre regler:**
    - Høyst 5 ord.
    - Ingen tall inni ord («0bama»).
    - Ikke de samme ordene som et annet svar i en annen rekkefølge.
    - Ingen tegn som svarlista ikke tåler: \` \\ $ | ;
  - **Som før:** Navn som leder til et annet svar, er tvetydige eller er et annet prompts navn for noe annet, droppes. `--apply` validerer at hvert alias gir sitt eget svar.
- **Gjennomgang:** Verktøyet skriver én fil per prompt. Jeg går gjennom alle, fjerner det som er feil og viser eier et sammendrag med eksempler, ikke tusenvis av linjer. Eier kan åpne filene selv.
  - Alt jeg avviser, havner i `tools/alias-rejects.json`, så det ikke foreslås igjen.
  - For prompts om gjenstander og verk (`inv1`, `inv2`, `novels`, `paintings`, `olympics`) avvises redirects som ikke deler et ord med svaret, med noen få unntak som jeg har valgt ut for hånd. Der peker redirects ofte til deler, personer i boka eller lignende ting («passenger car» → Ferris wheel, «Jane Fairfax» → Emma).
- **Invarianter:**
  - Bare nye aliaser: ingen display endres (invariant 3), og rotasjonen er urørt (invariant 1).
  - Spillet kaller fortsatt ikke Wikipedia (invariant 7).
- **Grense mellom systemer:** Verktøyet og dataene committes hver for seg.

## 3. Implementation Details & Scope Boundaries
- Endres: `tools/suggest-answers.mjs`
  - `--all` kjører alle prompts.
  - `--aliases-only` hopper over nye svar, slik at den også virker for prompts uten kilder.
  - Seksjons-redirects og merkede redirects droppes.
  - Familieregelen erstatter den faste `NOT_ALIAS`-lista.
- Ny: `tools/alias-rejects.json`, med aliaser som er avvist i gjennomgangen, per prompt.
- Endres: `js/data/prompts.js` (bare aliaser), README og `02-architecture.md`.
- `rarity.js` og `summaries.js` endres ikke. De følger svarene, og det kom ingen nye svar.
- Endres ikke: `js/app.js`, `ROTATION`.

## 4. Verification Checklist
- [x] Forslagsfiler for alle 150 prompts: 5 870 forslag for 3 473 svar. Jeg har gått gjennom alle 1 952 som ikke deler et ord med svaret. Sammendraget til eier ble gitt 2026-11-23.
- [x] `--apply --all` uten valideringsfeil: 5 127 aliaser for 3 114 svar i 148 prompts. `mesogods` var ferdig fra Spec 10, og `unsg` fikk ingen.
- [x] `npm test` grønn (29). `npm run bench`:
  - Falske treff er uendret: 78 / 71.
  - Redirect-recall gikk fra 63,2 % til 68,4 %, og redirects godtatt som feil svar gikk fra 227 til 195.
  - Én skrivefeil går nå til feil svar: «Augustuus» → Romulus Augustulus, fordi «Augustulus» nå er et alias.
- [x] Stikkprøver godtas: «Marc Aurel», «Axumites», «Tiwaz», «Sakyamuni», «Marshal Ney», «Fax machine» og «Hiuen Tsang». «Battle of Cape Bon», «the empire» og «Frija» gir ikke treff.
- [x] Full runde i headless Edge uten konsollfeil.
- [x] `06-progress-tracker.md` oppdatert.
