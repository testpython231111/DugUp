# 04 — AI Workflow Rules

1. **Én feature spec om gangen.** Jobb kun mot spec-en du er bedt om. Ikke rydd, refaktorer eller «forbedre» utenfor scope.
2. **Aldri kombiner urelaterte systemgrenser** i ett steg (f.eks. endring i `PROMPT_DATA` + endring i Scene-animasjon).
3. **Stopp og spør** når en beslutning mangler, eller når en endring kan bryte en invariant i `02-architecture.md`.
4. **Les før du skriver.** `js/data/prompts.js` (~560 KB), `js/data/summaries.js` (~990 KB) og `js/app.js` er store — bruk søk (seksjonsheadere, funksjonsnavn, prompt-id) og les relevante deler i stedet for hele filen.
5. **Rør aldri `PROMPT_DATA`-rekkefølgen, `EPOCH`, `ROUND_SIZE` eller rotasjons-seed** uten eksplisitt instruks.
6. **Bakoverkompatibel lagring.** Endringer i `localStorage`-format krever migrering med default-verdier.
7. **Verifiser før du sier ferdig:**
   - Ingen syntaksfeil (kjør `node --check` på uttrukket script eller testskriptet når det finnes).
   - Gå gjennom spec-ens Verification Checklist punkt for punkt.
   - Rapporter ærlig hva som ikke ble verifisert (f.eks. visuell sjekk i nettleser).
   - Etter push: sjekk at GitHub Action «Tests» er grønn (`gh run list --limit 1`).
8. **Oppdater `06-progress-tracker.md`** før og etter arbeidet.
9. **Feilsøking:** analyser rotårsak → presenter plan → vent på grønt lys → fiks. Ikke lapp symptomer.
10. **Skriv kode med Edit, ikke via script-generert tekst.** Når kode med regex eller backslashes skrives gjennom en template-streng i et hjelpescript, forsvinner backslashene (`\d` blir `d`, `\b` blir et kontrolltegn). Det skjedde to ganger i Spec 05. Bruk Edit-verktøyet for kode, sjekk at linjeskift (CRLF/LF) bevares, og kjør testene rett etterpå.
11. **Git:** jobb på en branch, og commit kun når eier ber om det. `main` er produksjon, men har med vilje ingen branch protection. Eier kan be om push rett til `main` herfra, og da kjøres `npm test` først. Uten en slik beskjed skal du ikke pushe til `main`.
