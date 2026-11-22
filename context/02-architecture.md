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

## Filstruktur (nåværende)
Alt ligger i `index.html` (~540 KB, ~14 800 linjer):

| Linjer (ca.) | Innhold |
|---|---|
| 1–249 | `<head>`, `@font-face`, CSS (`:root`-tokens øverst) |
| 250–392 | HTML: header, `#scene`, seks `<section class="screen">`, footer |
| 393–12925 | **Script 1: `PROMPT_DATA`** — 150 prompts, ~11 000 svar |
| 12926–slutt | **Script 2: appen** i én IIFE, delt i seksjoner: |
| | `CONFIG` (ROUND_SIZE, TIME_LIMIT, EPOCH, TIERS) |
| | `SMALL UTILS` (store, hashStr, mulberry32, shuffle, esc, datoer) |
| | `PIXEL ART` (PAL, SPR, sprCanvas, frames) |
| | `OUTFITS` (SKINS, palettbytter) |
| | `TEXT NORMALISATION & MATCHING` (normalize, lev, buildPrompts, matchAnswer, pickRound, ORDER, dailyPrompts) |
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
1. **Daglig rotasjon er deterministisk og stabil.** `ORDER` utledes fra rekkefølgen og innholdet i `PROMPTS` + seed `'dugup-order-v1'`, og `EPOCH` = 22. nov 2026 er Dig #1. ⚠️ I dag endrer det å legge til/fjerne/flytte et prompt **hele** rotasjonen (inkl. dagens og tidligere digs). Ikke gjør det før Feature Spec 02 er løst.
2. **`EPOCH`, `ROUND_SIZE` og seed-strengen endres aldri** etter lansering.
3. **Prompt-`id` og svar-`display` er stabile nøkler.** Museum bruker `id|display` — omdøping sletter i praksis spillernes funn. Bruk aliaser for nye stavemåter.
4. **`PRACTICE_IDS`-prompts skal aldri være i daglig rotasjon**, og practice teller aldri mot museum/outfits/streak.
5. **Eksisterende `localStorage`-format er bakoverkompatibelt.** Nye felt må ha default (se `getStats()`-mønsteret). Aldri endre betydningen av et eksisterende felt.
6. **Alt brukerinput og all data som settes inn i HTML går gjennom `esc()`.**
7. **Appen må fungere uten Wikipedia** (timeout + fallback til offline-tier).
8. **Ingen dato-logikk med UTC vs. lokal tid blandes ad hoc** — bruk `dateKey`, `dayNumber`, `dateKeyAgo`.
