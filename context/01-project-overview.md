# 01 — Project Overview

## Oppsummering
Dug Up er et daglig historie-quizspill i pikselkunst (dugup.eu). Spilleren får 7 spørsmål («prompts»), 30 sekunder per spørsmål. Hvert spørsmål har mange riktige svar; jo sjeldnere (mindre lest på Wikipedia) det riktige svaret er, jo dypere graver man.

## Mål (målbare)
- Alle spillere får de samme 7 daglige spørsmålene for en gitt dato (deterministisk rotasjon).
- Ingen daglige spørsmål gjentas før hele rotasjonen (≈143 spørsmål, ~20 dager) er brukt.
- Siden laster og er spillbar uten nettverkstilgang til Wikipedia (fallback til innebygde rarity-tiers).
- Null server, null kontoer, null cookies. All fremdrift i `localStorage`.

## Core User Flow
1. Spilleren åpner siden → **Camp** (tittelskjerm) med stats, streak og knapper.
2. Trykker **Today's Dig** → runde med 7 prompts (`startRound('daily')`).
3. Per prompt: skriver svar → `matchAnswer` (normalisering, typo-toleranse, aliaser, romertall) → gravanimasjon → **reveal** med tier, meter og Wikipedia-lenker.
4. Etter 7 prompts → **Results**: total dybde, era, delbar tekst (emoji, ingen spoilere), evt. nye outfits låst opp.
5. Resultat lagres (`dugup:daily`, `dugup:stats`, `dugup:museum`). Streak oppdateres kun for dagens dig.
6. Sekundære flyter: **Practice Dig** (faste 7, teller ikke), **Past digs** (siste 7 dager, teller ikke for streak), **Museum**, **Wardrobe**.

## In Scope
- Daglig dig, practice, past digs, museum, wardrobe/outfits, streaks/stats, deling.
- Rarity fra Wikipedia pageviews (60 dager), forhåndsberegnet månedlig (`tools/rarity.mjs`), med offline fallback.
- Legge til/redigere prompts og svar.
- Lyd (Web Audio, syntetisert) og canvas-grafikk.

## Out of Scope (ikke tenk på dette nå)
- Backend, database, brukerkontoer, innlogging, leaderboards.
- Betaling, annonser.
- Flere språk / lokalisering.
- Rammeverk (React o.l.) eller tung byggekjede.

## Success Criteria
- `index.html` åpnet direkte i nettleser fungerer uten feil i konsollen.
- Dagens dig er identisk for alle spillere og endres ikke utilsiktet når kode/data endres (se invarianter i 02).
- Eksisterende spilleres `localStorage`-data (streak, museum, outfits) overlever enhver deploy.
