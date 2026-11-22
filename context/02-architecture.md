# 02 — Architecture Context

## Tech Stack & roller
| Verktøy | Rolle | Ikke bruk til |
|---|---|---|
| Vanilla HTML/CSS/JS (ES2017+, `'use strict'` IIFE) | Hele appen | — Ikke innfør rammeverk eller npm-avhengigheter i runtime |
| `<canvas>` | All pikselgrafikk (scene, sprites, tekst-font `FONT`) | Ikke bruk bildefiler — sprites er definert som tekst-rader i `SPR` |
| Web Audio API | All lyd, syntetisert i `Sound` | Ikke legg til lydfiler |
| `localStorage` via `store.get/set` | All persistens | Aldri kall `localStorage` direkte — bruk `store` (har try/catch) |
| Wikipedia API (pageviews) | Kun `tools/rarity.mjs`, månedlig (Spec 05) | Spillet selv kaller ingen eksterne API-er (`npm test` sjekker at ingen script bruker `fetch`) |
| Vercel (statisk hosting + Web Analytics) | Deploy ved push til `main` | Ingen serverless functions |
| Google Fonts (Pixelify Sans) + innebygd `DugUp Digits` (base64 woff2) | Typografi | — |

## Filstruktur (nåværende, Spec 03)
Ingen byggesteg: vanlige `<link>`/`<script src>` med relative stier, så `index.html` fungerer både på Vercel og åpnet direkte (`file://`). Klassiske scripts (ikke ES-moduler); de deler globalt scope, så `PROMPT_DATA`/`ROTATION` fra data-filen er synlige for appen.

| Fil | Innhold |
|---|---|
| `index.html` (~160 linjer) | `<head>` (Vercel Analytics, Google Fonts), HTML: header, `#scene`, seks `<section class="screen">`, footer, og script-taggene nederst i `<body>` |
| `css/style.css` | `@font-face` (`DugUp Digits`, base64), all CSS (`:root`-tokens øverst) |
| `js/data/prompts.js` (~410 KB) | **`PROMPT_DATA`** — 150 prompts, ~11 000 svar — etterfulgt av **`ROTATION`** (frosne sesonger med prompt-id-er). Lastes **før** `app.js`. `tools/check.mjs --freeze-until` og `--add-prompt` skriver hit. |
| `js/data/rarity.js` (~290 KB, ~125 KB gzip) | **`RARITY`** — tier og 60-dagers sidevisninger per `prompt-id` + `display`. **Generert** av `tools/rarity.mjs`; rediger aldri for hånd. Lastes etter `prompts.js`, før `app.js`. |
| `js/data/summaries.js` (~930 KB, ~320 KB gzip) | **`SUMMARIES`** — 1–2 setninger fra Wikipedia (CC BY-SA) per svar med tier ≥ 4, nøkkel `prompt-id` + `display`. **Generert** av `tools/summaries.mjs`. Lastes `async` etter `app.js`; appen leser den først ved reveal (`summaryFor`), og uten den vises ingen oppsummering (Spec 06). |
| `js/app.js` | **Appen** i én IIFE, delt i seksjoner: |
| | `CONFIG` (ROUND_SIZE, TIME_LIMIT, EPOCH, TIERS) |
| | `SMALL UTILS` (store, hashStr, mulberry32, shuffle, esc, datoer) |
| | `PIXEL ART` (PAL, SPR, sprCanvas, frames) |
| | `OUTFITS` (SKINS, palettbytter) |
| | `TEXT NORMALISATION & MATCHING` (normalize, lev, buildPrompts, matchAnswer, pickRound, seasonOrder, generateSeason, dailyPrompts) |
| | `RARITY` (RARITY_DATA, RARITY_MONTH, applyRarity, summaryFor, updateBadge) |
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
- `tier` 1 (Topsoil, vanligst) … 6 (Forgotten by History, sjeldnest). Offline-estimat; overstyres ved oppstart av `liveTier`/`views` fra `RARITY` når svaret finnes der.

### Slik oppdaterer du sjeldenhet (månedlig, Spec 05)
`node tools/rarity.mjs` (~6 min, ~700 forespørsler) → sjekk diffen i `js/data/rarity.js` → `npm test` → commit. Scriptet bruker samme rangering som den gamle live-koden og skriver ingenting hvis mer enn 5 % av forespørslene feiler. `--dry-run` henter og rapporterer uten å skrive.
Kjør deretter `node tools/summaries.mjs` (~4 min, ~290 forespørsler). Den velger rare svar ut fra den nye `RARITY`, så rekkefølgen betyr noe. Kun tekst, aldri bilder (eiers beslutning: bilder bryter pikselstilen).
- Valgfritt: `nope` (nesten-svar som skal forklares), tvetydighetskart.

## Daglig rotasjon — `ROTATION` (Spec 02, ADR-003)
- `ROTATION` er en liste med **sesonger**, hver en frossen liste med prompt-id-er. Sesongene spilles etter hverandre, 7 id-er per dig: Dig #n = posisjon `(n-1)*7 … (n-1)*7+6` i den sammenslåtte listen.
- En dig avhenger bare av id-ene **foran** seg. Å sette inn id-er etter en posisjon flytter derfor aldri en dig foran den.
- **Låste digs** (Spec 04): alle digs i `tools/rotation-snapshot.json` og alle digs til og med i dag + 14 dager. De endres aldri. Snapshoten er append-only og utvides av `--write-snapshot` og `--add-prompt`.
- Sesong 1 (seed `dugup-order-v1`) er dagens opprinnelige rekkefølge (Dig #1–#20 + starten av #21). Sesong 2–20 (`dugup-order-v2` … `v20`) er frosset 2026-11-22 og dekker til Dig #408 (ca. 3. jan 2028). En sesong varer ~20 dager.
- Når frosne sesonger er brukt opp, genererer appen neste sesong med seed `dugup-order-v<n>` over alle ikke-practice-prompts. Ingen prompt fra de to siste digsene i forrige sesong kommer i de to første i neste. En generert sesong er **ikke** stabil (endres når prompts legges til), så den skal fryses i god tid.
- Ukjente id-er og practice-id-er hoppes over i nettleseren (ingen krasj); `npm test` feiler tydelig på dem.

### Slik legger du til et nytt prompt
1. Legg prompt-objektet til i `PROMPT_DATA` (hvor som helst — rekkefølgen der påvirker ikke rotasjonen).
2. Kjør `node tools/check.mjs --add-prompt <id>`. Den setter id-en inn i **hver frosne sesong som starter etter de låste digsene**, på en fast (seedet) plass utenom de 14 første og siste plassene i sesongen. Snapshoten utvides til i dag + 14 først, og ingenting skrives hvis en låst dig ville endret seg. Rediger aldri `ROTATION` for hånd.
3. Kjør `npm test` og sjekk diffen.
4. Det nye promptet dukker opp i neste sesong som ikke har startet, altså innen ca. 2–5 uker.

### Slik fryser du lenger fram
`npm test` feiler når ingen frosset sesong starter etter de låste digsene (første gang ca. desember 2027). Kjør da `node tools/check.mjs --freeze-until <dato ca. et år fram>`, sjekk diffen og kjør `npm test` igjen. `--freeze-season` fryser bare én sesong.

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
1. **Daglig rotasjon er deterministisk og stabil.** Digs leses fra de frosne sesongene i `ROTATION`, og `EPOCH` = 22. nov 2026 er Dig #1. Låste digs (snapshoten og til og med i dag + 14 dager) endres aldri. Id-er i `ROTATION` fjernes eller omdøpes aldri. Nye id-er settes kun inn etter de låste digsene, med `--add-prompt` (se «Slik legger du til et nytt prompt»). Et prompt som står i `ROTATION` kan ikke slettes fra `PROMPT_DATA`.
2. **`EPOCH`, `ROUND_SIZE` og seed-mønsteret `dugup-order-v<n>` endres aldri** etter lansering.
3. **Prompt-`id` og svar-`display` er stabile nøkler.** Museum bruker `id|display` — omdøping sletter i praksis spillernes funn. Bruk aliaser for nye stavemåter.
4. **`PRACTICE_IDS`-prompts skal aldri være i daglig rotasjon**, og practice teller aldri mot museum/outfits/streak.
5. **Eksisterende `localStorage`-format er bakoverkompatibelt.** Nye felt må ha default (se `getStats()`-mønsteret). Aldri endre betydningen av et eksisterende felt.
6. **Alt brukerinput og all data som settes inn i HTML går gjennom `esc()`.**
7. **Appen må fungere uten Wikipedia.** Spillet kaller ikke Wikipedia (kun lenker); mangler `rarity.js` eller et svar i den, brukes offline-tier.
8. **Ingen dato-logikk med UTC vs. lokal tid blandes ad hoc** — bruk `dateKey`, `dayNumber`, `dateKeyAgo`.
