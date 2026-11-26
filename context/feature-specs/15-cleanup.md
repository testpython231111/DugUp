# Feature Spec 15: Opprydding — egne fonter, `.vercelignore`, `.gitattributes`, dokumentasjon

_Status: eier ba om det 2026-11-26 («3,4,5 kjør ut»)._

## 1. Goal
Siden henter ikke lenger noe fra Google, dugup.eu publiserer bare spillet, linjeskift er like overalt, og dokumentasjonen stemmer med filene.

**Ikke med:** endringer i spillogikk, data eller utseende.

## 2. Design & Architecture Decisions
- **Pixelify Sans på eget domene.** To variable woff2-filer fra Google Fonts (latin og latin-ext, 400–700, ~20 KB til sammen) ligger i `fonts/` med `OFL.txt`, som OFL krever. Kyrillisk tas ikke med. Begrunnelse: på et .eu-domene deler Google Fonts den besøkendes IP-adresse med Google (LG München, 2022). Det passer heller ikke med «no cookies, privacy-friendly».
- **Ingen `preload`.** Med `crossorigin` gir den en CORS-feil i konsollen over `file://`, og det bryter suksesskriteriet i 01.
- **`.vercelignore`** holder `context/`, `tools/`, `.github/`, `CLAUDE.md`, `README.md` og `package.json` utenfor dugup.eu. Repoet er offentlig uansett, så dette handler om orden, ikke om hemmelighold.
- **`.gitattributes`:** `* text=auto eol=lf`. Repoet har allerede bare LF. Arbeidskopien på Windows blir LF, som på GitHub Actions. `check.mjs` skriver tilbake med samme linjeskift som filen har, så det virker med begge.
- **Invarianter:** ingen er berørt. Invariant 7 blir sterkere, fordi siden nå bare laster egne filer (og Vercel-analytics).

## 3. Implementation Details & Scope Boundaries
- **Endres:** `index.html` (head), `css/style.css` (`@font-face`), `fonts/` (ny), `.vercelignore` og `.gitattributes` (nye), `README.md`, `context/02`, `04`, `05` og `06`.
- **Endres ikke:** `js/` og `tools/`.

## 4. Verification Checklist
- [x] Headless Edge over `file://`: begge font-face er `loaded`, `document.fonts.check` gir true for «Ōgimachi» i vekt 700, og den eneste konsollfeilen er Vercel-analytics (som alltid feiler over `file://`).
- [x] `npm test` grønn.
- [ ] Etter deploy: `dugup.eu/fonts/pixelify-sans-latin.woff2` gir 200, og `dugup.eu/CLAUDE.md` og `dugup.eu/tools/check.mjs` gir 404.
- [x] `06-progress-tracker.md` oppdatert.
