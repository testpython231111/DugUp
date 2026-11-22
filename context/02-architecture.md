# 02 — Architecture Context

## Tech Stack & roller
| Verktøy | Rolle | Ikke bruk til |
|---|---|---|
| Vanilla HTML/CSS/JS (ES2017+, `'use strict'` IIFE) | Hele appen | — Ikke innfør rammeverk eller npm-avhengigheter i runtime |
| `<canvas>` | All pikselgrafikk (scene, sprites, tekst-font `FONT`) | Ikke bruk bildefiler — sprites er definert som tekst-rader i `SPR` |
| Web Audio API | All lyd, syntetisert i `Sound` | Ikke legg til lydfiler |
| `localStorage` via `store.get/set` | All persistens | Aldri kall `localStorage` direkte — bruk `store` (har try/catch) |
| Wikipedia API (`WIKI_API`, pageviews) | Live rarity, i `Live` | Ikke kall andre eksterne API-er |
| Vercel (statisk hosting + Web Analytics) | Deploy ved push til `main` | Ingen serverless functions |
| Google Fonts (Pixelify Sans) + innebygd `DugUp Digits` (base64 woff2) | Typografi | — |

## Filstruktur (nåværende, Spec 03)
Ingen byggesteg: vanlige `<link>`/`<script src>` med relative stier, så `index.html` fungerer både på Vercel og åpnet direkte (`file://`). Klassiske scripts (ikke ES-moduler); de deler globalt scope, så `PROMPT_DATA`/`ROTATION` fra data-filen er synlige for appen.

| Fil | Innhold |
|---|---|
| `index.html` (~160 linjer) | `<head>` (Vercel Analytics, Google Fonts), HTML: header, `#scene`, seks `<section class="screen">`, footer, og script-taggene nederst i `<body>` |
| `css/style.css` | `@font-face` (`DugUp Digits`, base64), all CSS (`:root`-tokens øverst) |
| `js/data/prompts.js` (~410 KB) | **`PROMPT_DATA`** — 150 prompts, ~11 000 svar — etterfulgt av **`ROTATION`** (frosne sesonger med prompt-id-er). Lastes **før** `app.js`. `tools/check.mjs --freeze-season` skriver hit. |
| `js/app.js` | **Appen** i én IIFE, delt i seksjoner: |
| | `CONFIG` (ROUND_SIZE, TIME_LIMIT, EPOCH, TIERS) |
| | `SMALL UTILS` (store, hashStr, mulberry32, shuffle, esc, datoer) |
| | `PIXEL ART` (PAL, SPR, sprCanvas, frames) |
| | `OUTFITS` (SKINS, palettbytter) |
| | `TEXT NORMALISATION & MATCHING` (normalize, lev, buildPrompts, matchAnswer, pickRound, seasonOrder, generateSeason, dailyPrompts) |
| | `LIVE WIKIPEDIA` (Live.probe, fetchViews, liveTier) |
| | `SOUND` |
| | `SCENE` (ERAS, PHASES, canvas-animasjon) |
| | `GAME` (state, skjermer, runder, resultater, museum, wardrobe, archive, deling) |
| | `BOOT` (init + event listeners, `window.__dugup` test-hook) |

## Dataformat — `PROMPT_DATA`
```js
{id:'rome', cat:'Rulers', q:'Name a Roman emperor', hint:'...', list:`
tier|Display name|Wikipedia title (tom = display)|alias1;alias2
...`}
```
- `tier` 1 (Topsoil, vanligst) … 6 (Forgotten by History, sjeldnest). Offline-estimat; overstyres av `liveTier` når Wikipedia svarer.
- Valgfritt: `nope` (nesten-svar som skal forklares), tvetydighetskart.

## Daglig rotasjon — `ROTATION` (Spec 02, ADR-003)
- `ROTATION` er en liste med **sesonger**, hver en frossen liste med prompt-id-er. Sesongene spilles etter hverandre, 7 id-er per dig: Dig #n = posisjon `(n-1)*7 … (n-1)*7+6` i den sammenslåtte listen.
- En dig avhenger bare av id-ene **foran** seg. Å legge til id-er på **slutten av siste sesong** flytter derfor aldri en publisert dig.
- Sesong 1 (seed `dugup-order-v1`) er dagens opprinnelige rekkefølge (Dig #1–#20 + starten av #21). Sesong 2 (`dugup-order-v2`) er frosset 2026-11-22 og varer til ca. Dig #40.
- Når frosne sesonger er brukt opp, genererer appen neste sesong med seed `dugup-order-v<n>` over alle ikke-practice-prompts. Ingen prompt fra de to siste digsene i forrige sesong kommer i de to første i neste. En generert sesong er **ikke** stabil (endres når prompts legges til), så den skal fryses i god tid.
- Ukjente id-er og practice-id-er hoppes over i nettleseren (ingen krasj); `npm test` feiler tydelig på dem.

### Slik legger du til et nytt prompt
1. Legg prompt-objektet til i `PROMPT_DATA` (hvor som helst — rekkefølgen der påvirker ikke lenger rotasjonen).
2. Legg id-en til **på slutten av siste sesong** i `ROTATION`. Aldri inn i midten, aldri i en tidligere sesong.
3. Kjør `npm test`. Snapshot-testen (Dig #1–#30) skal være grønn.
4. Det nye promptet dukker opp når siste sesong er spilt ferdig. Vil du ha det tidligere, må det settes inn i en framtidig posisjon. Det endrer upubliserte digs, så snapshot-testen må oppdateres bevisst.

### Slik fryser du neste sesong
`npm test` feiler når frosne sesonger dekker færre enn 14 dager fram i tid. Kjør da `node tools/check.mjs --freeze-season`, sjekk diffen og kjør `npm test` igjen. Etter fryseing legges nye prompts i den nye siste sesongen.

## System Boundaries
- **Data** (`PROMPT_DATA`) inneholder ingen logikk.
- **Matching** (`normalize`, `matchAnswer`) er rene funksjoner uten DOM — skal forbli testbare i Node.
- **Scene** og **Sound** eksponerer kun et lite API (`Scene.setDepth/setSkin/skip/hooks`, `Sound.dig/find/click…`) og vet ingenting om spillregler.
- **GAME** er eneste lag som leser/skriver `state` og `localStorage`.

## Storage Model (`localStorage`, nøkler med prefiks `dugup:`)
| Nøkkel | Innhold |
|---|---|
| `dugup:stats` | `{streak, last, best, digs, bestStreak, maxDepth, perfect}` |
| `dugup:daily` | Resultater per datonøkkel (`YYYY-MM-DD`) |
| `dugup:museum` | `{ "<promptId>|<display>": {t, p, q, w, a, n, d} }` |
| `dugup:skin` | Valgt outfit-id |
| `dugup:muted` | Bool |

## Invarianter (skal ALDRI brytes)
1. **Daglig rotasjon er deterministisk og stabil.** Digs leses fra de frosne sesongene i `ROTATION`, og `EPOCH` = 22. nov 2026 er Dig #1. Eksisterende id-er i `ROTATION` flyttes, fjernes eller omdøpes aldri; nye id-er legges kun til på slutten av siste sesong (se «Slik legger du til et nytt prompt»). Et prompt som står i `ROTATION` kan ikke slettes fra `PROMPT_DATA`.
2. **`EPOCH`, `ROUND_SIZE` og seed-mønsteret `dugup-order-v<n>` endres aldri** etter lansering.
3. **Prompt-`id` og svar-`display` er stabile nøkler.** Museum bruker `id|display` — omdøping sletter i praksis spillernes funn. Bruk aliaser for nye stavemåter.
4. **`PRACTICE_IDS`-prompts skal aldri være i daglig rotasjon**, og practice teller aldri mot museum/outfits/streak.
5. **Eksisterende `localStorage`-format er bakoverkompatibelt.** Nye felt må ha default (se `getStats()`-mønsteret). Aldri endre betydningen av et eksisterende felt.
6. **Alt brukerinput og all data som settes inn i HTML går gjennom `esc()`.**
7. **Appen må fungere uten Wikipedia** (timeout + fallback til offline-tier).
8. **Ingen dato-logikk med UTC vs. lokal tid blandes ad hoc** — bruk `dateKey`, `dayNumber`, `dateKeyAgo`.
