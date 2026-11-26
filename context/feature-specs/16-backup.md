# Feature Spec 16: Backup — eksport og import av fremdrift

_Status: eier ba om det 2026-11-26 («3,4,5 kjør ut»)._

## 1. Goal
Spilleren kan kopiere all fremdrift (streak, stats, museum, outfit, lyd og tidligere digs) som én tekstkode, og lime den inn igjen på en annen enhet eller etter at nettleseren er tømt. Det beskytter mot at Safari sletter `localStorage` og gjør det mulig å bytte enhet.

**Ikke med:** synkronisering, kontoer, server, QR-kode og fil-nedlasting. Sammenslåing av to enheters fremdrift: restore *erstatter*.

## 2. Design & Architecture Decisions
- **Format:** `DUGUP1.` + base64 av UTF-8-JSON `{v: 1, data: {<nøkkel>: <verdi>}}`. Nøklene er de samme som i `localStorage`, og verdiene er uendret. Bare kjente nøkler tas med: `dugup:stats`, `museum`, `skin`, `muted` og `daily:ÅÅÅÅ-MM-DD`. Mellomrom og linjeskift i innlimt kode ignoreres.
- **Lagringsformatet endres ikke** (invariant 5). `store` får `remove` og `keys`, med try/catch som resten av `store`.
- **Sikkerhet (invariant 6):** En kode kan komme fra hvem som helst, og noen renderere setter lagrede tall rett inn i HTML. Derfor `decodeBackup`:
  - fjerner `<`, `>` og `"` fra alle strenger
  - beholder bare stats-felt som er endelige tall (og `last` som dato)
  - beholder bare museum-oppføringer med tier 1–6 og tekstfelt
  - beholder bare digs med tall i `score` og rader med gyldig tier og poeng
  - ignorerer ukjente nøkler
- **Restore:** koden valideres først. Er den ugyldig, vises en melding, og ingenting endres. Så kommer `confirm()`, deretter slettes alle kjente nøkler, de nye skrives, og siden lastes på nytt, slik at outfit, lyd og alle skjermer leser de nye dataene.
- **UI:** en ny skjerm `screen-backup` (tekstfelt, «Copy code», «Restore») og en diskret `.linkish` på camp under statistikken. En egen knapp i camp-raden ble prøvd, men brøt til en ny, for dominerende rad på mobil.

## 3. Implementation Details & Scope Boundaries
- **Endres:**
  - `js/app.js`: `store`, backup-seksjonen etter outfits, `screens`, event-lyttere og `__dugup`
  - `index.html` og `css/style.css`
  - `tools/load-game.mjs`: `btoa`/`atob`, `localStorage.key`/`length`, og `localStorage` eksponeres for tester
  - `tools/check.mjs`: to tester
  - dokumentasjonen
- **Endres ikke:** data, matching, Scene og Sound.

## 4. Verification Checklist
- [x] Test: kode → restore på «en annen enhet» gir nøyaktig samme nøkler og verdier, også med «Ō». Gamle nøkler som ikke er i koden, slettes.
- [x] Test: ugyldige koder kastes og endrer ingenting. `<>"` fjernes, og feil typer droppes.
- [x] Headless Edge: backup-skjermen viser koden. Ugyldig kode gir en melding. Restore etter `localStorage.clear()` laster siden på nytt og viser 432 m, 17 digs og Museum (1). Ingen konsollfeil utenom Vercel-analytics over `file://`.
- [x] Skjermbilde av camp og backup-skjermen på 390 px.
- [x] `06-progress-tracker.md` oppdatert.
