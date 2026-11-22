# ⛏️ Dug Up — the daily history dig

**Play at [dugup.eu](https://dugup.eu)**

Dug Up is a daily history trivia game in cosy pixel art. You get seven prompts and thirty seconds for each one. Every prompt has many right answers, and the obvious ones are just dirt: **the rarer your correct answer, the deeper you dig.**

> *Name a Roman emperor.* &nbsp;Augustus? Topsoil. &nbsp;Pertinax? Now you're digging.

## How to play

1. Press **Today's Dig**. Everyone gets the same seven prompts each day.
2. Type any correct answer before the timer runs out.
3. The less well-known your answer, the deeper you dig:

| Find | Depth |
|---|---|
| 👑 Forgotten by History | +100 m |
| 📜 Lost Scroll | +85 m |
| 🗿 Relic | +60 m |
| 🪙 Old Coin | +30 m |
| 🏺 Pottery Shard | +15 m |
| 🟫 Topsoil | +10 m |
| 🪨 Wrong or too slow | +0 m |

4. Share your result. It shows your depth and your finds, with no spoilers.

## Features

- **150 prompts and over 11,000 accepted answers.** They cover the ancient world, rulers, wars, empires, Asia, art, science, exploration, myths, rogues and curiosities from around the world.
- **A new dig every day.** Prompts don't repeat until all the daily ones have been used.
- **Past digs.** Missed a day? The last week of digs stays open. Late digs don't count toward your streak.
- **Practice dig.** The same seven prompts every time, kept out of the daily rotation so practice never spoils a real dig. Practice doesn't count toward the museum or outfits.
- **Museum.** Every real answer you dig up gets a place on your shelves, sorted by rarity.
- **Wardrobe.** Unlock outfits by playing: Miner, Legionary, Historically Inaccurate Viking, Pharaoh, Knight, Gentleman Antiquarian, Dino Suit, Royal and Golden Digger.
- **Forgiving answers.** The game accepts small typos, alternative names, and Roman or Arabic numerals (Henry VIII = Henry 8). It warns you if your answer is ambiguous and explains near misses.
- **Streaks and stats.** Day streak, deepest dig and total digs.
- Hand-built pixel art and animation, plus synthesized sound effects that you can mute.

## How rarity works

On the live site, each answer is ranked by how often its Wikipedia article was read over the last 60 days, compared with the other answers to the same prompt. Less-read history scores more. If Wikipedia can't be reached, the game uses built-in rarity estimates instead.

## Tech

- **A single static `index.html`** with no framework, no build step on the server and no dependencies. Graphics are drawn on `<canvas>`, sound uses the Web Audio API, and the font is [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans).
- **Hosting:** GitHub → [Vercel](https://vercel.com). Every push to `main` deploys automatically.
- **Live rarity:** the [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page), using page views.
- **Analytics:** [Vercel Web Analytics](https://vercel.com/docs/analytics). It is privacy-friendly and uses no cookies.

### Updating the site

Replace `index.html` in this repository (on GitHub: **Add file → Upload files**, then **Commit changes**). Vercel publishes the new version within a minute.

## Privacy

Your progress (streak, stats, museum, outfit and past results) is stored only in your own browser, in `localStorage`. There are no accounts and no cookies. Clearing your browser data resets your progress.

## Credits and licences

- Pixel font: **Pixelify Sans** by Stefie Justprince, under the [SIL Open Font License 1.1](https://openfontlicense.org). Digits use **DugUp Digits**, a modified subset of Pixelify Sans under the same licence.
- History facts and links come from [Wikipedia](https://www.wikipedia.org). Dug Up is not affiliated with Wikipedia or the Wikimedia Foundation.

---

*Real Vikings never wore horned helmets. We know. The outfit is called "Historically Inaccurate" for a reason.*
