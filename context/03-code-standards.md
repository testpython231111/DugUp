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
- Nettverkskall: alltid `AbortController`-timeout, sjekk `r.ok`, fall tilbake stille til offline-modus **og** oppdater `dataBadge` slik at brukeren ser status.
- Ingen tomme `catch {}` utenom `store` (der er det bevisst: privat modus / full lagring).

## Data (`PROMPT_DATA`)
- Én linje per svar: `tier|Display|WikiTitle|alias;alias`.
- `tier` er heltall 1–6. Display er unikt innen et prompt.
- Wikipedia-tittel må være den kanoniske artikkeltittelen (redirects håndteres, men unngå dem).
- Nye prompts: unik `id` (kort, lowercase), eksisterende `cat`.

## Stil
- Følg eksisterende kompakte stil (korte enlinjers hjelpere er ok).
- Engelsk i kode, kommentarer og UI-tekst. Kontekstfilene kan være på norsk.
- Farger kun via CSS-variablene i `:root` (se 05-ui-context.md) — ingen nye hardkodede hex-farger i CSS. Canvas-farger hentes fra `PAL`.
