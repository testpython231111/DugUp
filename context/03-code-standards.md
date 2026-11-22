# 03 — Code Standards

## JavaScript
- Vanilla JS, `'use strict'`, ingen runtime-avhengigheter, ingen byggesteg påkrevd for å kjøre siden.
- `const` som standard, `let` kun ved reassignment. Aldri `var`.
- Rene funksjoner for logikk (matching, rotasjon, scoring) — ingen DOM eller `localStorage` i dem, slik at de kan testes i Node.
- DOM-oppslag via `$('id')`. Nye skjermer følger `screens`/`show(name)`-mønsteret.
- HTML bygges med strenger kun når alt dynamisk innhold går gjennom `esc()`. Lenker til Wikipedia via `wikiURL()`.
- Persistens kun via `store.get(key, default)` / `store.set(key, value)`. Nye nøkler prefikses `dugup:`.
- Tilfeldighet som må være lik for alle spillere: `mulberry32(hashStr(seed))` — aldri `Math.random()`.
- Konstanter i `CONFIG`-seksjonen, ikke magiske tall spredt i koden.
- Kommentarer forklarer *hvorfor*, ikke *hva*. Behold seksjonsheaderne (`/* ===== NAVN ===== */`).

## Feilhåndtering
- Spillet gjør **ingen** nettverkskall (testen «the game itself never calls fetch» håndhever det). Data fra Wikipedia hentes av verktøyene i `tools/`.
- Verktøy som henter data: timeout på hver forespørsel, sjekk `r.ok`, få forsøk på nytt, pause mellom forespørsler, og skriv **ingenting** hvis for mange forespørsler feiler. En halvferdig generert fil skal aldri erstatte en hel.
- Data som lastes valgfritt (`RARITY`, `SUMMARIES`) leses med `typeof X !== 'undefined'`, og appen må fungere uten.
- Ingen tomme `catch {}` utenom `store` (der er det bevisst: privat modus / full lagring).

## Data (`PROMPT_DATA`)
- Én linje per svar: `tier|Display|WikiTitle|alias;alias`.
- `tier` er heltall 1–6. Display er unikt innen et prompt.
- Wikipedia-tittel må være den kanoniske artikkeltittelen (redirects håndteres, men unngå dem).
- Nye prompts: unik `id` (kort, lowercase), eksisterende `cat`. Legges inn i rotasjonen med `node tools/check.mjs --add-prompt <id>`, aldri ved å redigere `ROTATION` for hånd.
- `js/data/rarity.js` og `js/data/summaries.js` er genererte. Rediger dem aldri for hånd; kjør scriptene i `tools/`.

## Stil
- Følg eksisterende kompakte stil (korte enlinjers hjelpere er ok).
- Engelsk i kode, kommentarer og UI-tekst. Kontekstfilene kan være på norsk.
- Farger kun via CSS-variablene i `:root` (se 05-ui-context.md) — ingen nye hardkodede hex-farger i CSS. Canvas-farger hentes fra `PAL`.
