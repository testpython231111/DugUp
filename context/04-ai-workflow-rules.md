# 04 — AI Workflow Rules

1. **Én feature spec om gangen.** Jobb kun mot spec-en du er bedt om. Ikke rydd, refaktorer eller «forbedre» utenfor scope.
2. **Aldri kombiner urelaterte systemgrenser** i ett steg (f.eks. endring i `PROMPT_DATA` + endring i Scene-animasjon).
3. **Stopp og spør** når en beslutning mangler, eller når en endring kan bryte en invariant i `02-architecture.md`.
4. **Les før du skriver.** `js/data/prompts.js` (~410 KB) og `js/app.js` er store — bruk søk (seksjonsheadere, funksjonsnavn, prompt-id) og les relevante deler i stedet for hele filen.
5. **Rør aldri `PROMPT_DATA`-rekkefølgen, `EPOCH`, `ROUND_SIZE` eller rotasjons-seed** uten eksplisitt instruks.
6. **Bakoverkompatibel lagring.** Endringer i `localStorage`-format krever migrering med default-verdier.
7. **Verifiser før du sier ferdig:**
   - Ingen syntaksfeil (kjør `node --check` på uttrukket script eller testskriptet når det finnes).
   - Gå gjennom spec-ens Verification Checklist punkt for punkt.
   - Rapporter ærlig hva som ikke ble verifisert (f.eks. visuell sjekk i nettleser).
8. **Oppdater `06-progress-tracker.md`** før og etter arbeidet.
9. **Feilsøking:** analyser rotårsak → presenter plan → vent på grønt lys → fiks. Ikke lapp symptomer.
10. **Git:** jobb på en branch, ikke push direkte til `main` (den er produksjon). Commit kun når brukeren ber om det.
