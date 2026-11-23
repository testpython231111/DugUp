# 05 — UI Context

## Estetisk retning
Koselig, varm pikselkunst — «arkeologisk utgravning». Pergament, tre, gull og jord. Skarpe piksler (`image-rendering: pixelated`, klasse `.px`), ingen myke gradienter, ingen glassmorphism, ingen generisk «AI-slop»-estetikk. Humor i små doser (Historically Inaccurate Viking).

**Eiers beslutning (2026-11-23):** Dagens utseende på scenen beholdes. En pikselpuss med dithret lys i trinn, nye armer, spade låst til faste vinkler, hit-stop/smear, nye scroll/shard-sprites og blåere dype lag ble prøvd og forkastet («liker det best som det er»). De myke lysgradientene i scenen (lykter, mørke, stråler) er altså bevisste unntak fra «ingen myke gradienter», som gjelder UI-et. Ikke foreslå den samme pussen på nytt uten at eier ber om det.

## Fargetokens (`:root` i `css/style.css`)
| Token | Verdi | Bruk |
|---|---|---|
| `--ink` | `#3b2312` | Primær tekst |
| `--ink-soft` | `#6e4a2c` | Sekundær tekst |
| `--ink-faint` | `#9a7650` | Hint, metadata |
| `--parch` / `--parch-2` / `--parch-3` | `#f7e4b5` / `#efd49d` / `#ddb779` | Paneler (pergament) |
| `--cream` | `#fff7df` | Lyse flater, input |
| `--wood` / `--wood-2` / `--wood-dark` | `#b4692c` / `#8a4c1f` / `#4a2511` | Sekundærknapper, rammer |
| `--gold` / `--gold-2` | `#f6b627` / `#d9860f` | Primærknapper, highlights |
| `--green` / `--red` | `#5fae2c` / `#c8442f` | Riktig / feil |
| `--night` | `#24150c` | Bakgrunn |
| `--px` | `3px` | Pikselenhet for rammer |

Canvas-farger ligger i `PAL` (JS) og skal harmonere med tokens over.

## Typografi
- `Pixelify Sans` (Google Fonts, 400–700) for all tekst.
- `DugUp Digits` (innebygd base64, kun 0–9) foran i font-stack for tall med omtegnede 2, 3 og 5.

## Komponentkonvensjoner
- Paneler: `.panel.frame-parch`. Innfelte felt: `.frame-inset`. Rammer genereres som SVG i `installFrames()`.
- Knapper: `.btn` + `.btn-gold` (primær) / `.btn-wood` (sekundær), `.big`, `.small-btn`. Tekstlenker: `.linkish`.
- Skjermer: `<section id="screen-NAME" class="screen">`, vist via `show(name)`. Tilbake-knapper bruker `data-back`.
- Tier-ikoner er sprites (`TIERS[n].spr`), emoji brukes kun i delingstekst.
- Reveal-oppsummering (Spec 06): `.reveal-body .summary`, med tekst i `--ink-soft`, venstrekant `var(--px)` i `--parch-3` og en liten «Wikipedia»-lenke til slutt. **Aldri bilder fra Wikipedia**: de bryter pikselstilen (eiers beslutning).
- Tilgjengelighet: `aria-live` på toast/reveal, `aria-label` på ikonknapper, tastatur (Enter/mellomrom for skip/next) må fortsatt virke.
- Mobil først: én kolonne, store trykkflater, `inputmode`/`enterkeyhint` på svarfeltet.
