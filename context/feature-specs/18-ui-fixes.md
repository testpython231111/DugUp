# Feature Spec 18: UI-fikser — ligatur, camp-knapper, lenkefarge, bunntekst, favicon og delingsbilde

_Status: eier ba om det 2026-11-26 («Fix det»), etter UI-vurderingen._

## 1. Goal
Rette de fem feilene fra UI-vurderingen. **Ikke med:** endringer i scenegrafikken (eiers beslutning 2026-11-23), spillregler eller data.

## 2. Design & Architecture Decisions
- **Ligatur:** Pixelify Sans tegner «fi» som noe som ligner en «A» («Ands», «outAts», «Agure»). Feilen har vært der siden lansering, for fontfila er byte for byte den samme som Google serverte. Den rettes med `font-variant-ligatures:none` på `body`.
- **Camp-knapper i et 2×2-rutenett:** Past digs, Museum, Wardrobe og Backup. Tre knapper på én rad får ikke plass til «Museum (123)» under ~460 px (målt: 53–87 px bredde mot 97 px tekst). Backup blir derfor en knapp igjen, og tekstlenken fra Spec 16 er fjernet. Under 340 px brukes 13 px tekst. Målt uten overflyt ved 320, 360, 390, 420 og 540 px.
- **Lenker:** to nye tokens, `--link` (= `--wood-2`) og `--link-visited` (= `--ink-soft`), i stedet for nettleserblått og lilla.
- **Bunntekst:** «Prototype ·» er fjernet.
- **Favicon, apple-touch-icon og delingsbilde:**
  - Alle er laget av spillets egen grafikk: hodet i logoen (12×12, skalert ×2 og ×12) og scenen (144×84, ×7) med tittelen i Pixelify Sans.
  - Dette er meta-filer, ikke sprites i spillet, så regelen om ingen bildefiler for sprites gjelder fortsatt.
  - `og:image` peker på `https://www.dugup.eu/og.png`, fordi dugup.eu omdirigerer til www.
  - I tillegg kommer `meta description`, `theme-color`, `og:*` og `twitter:card`.

## 3. Implementation Details & Scope Boundaries
- **Endres:** `index.html` (head, camp-raden, bunnteksten), `css/style.css`, `favicon.png`, `apple-touch-icon.png` og `og.png` (nye, i roten), `README.md` og `context/02`, `05` og `06`.
- **Endres ikke:** `js/`, data og verktøy.

## 4. Verification Checklist
- [x] Headless Edge: «finds», «outfits» og «figure» vises riktig. Med ligatur på var det «Ands», «outAts» og «Agure».
- [x] Ingen overflyt i camp-knappene ved 320–540 px, med «Museum (123)».
- [x] Skjermbilder av camp, reveal og museum på 360 og 390 px.
- [x] `npm test` grønn (34). Ingen nye konsollfeil.
- [ ] Etter deploy: `og.png`, `favicon.png` og `apple-touch-icon.png` gir 200 på www.dugup.eu.
- [x] `06-progress-tracker.md` oppdatert.
