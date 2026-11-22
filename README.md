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
- **Learn as you dig.** Dig up something rare and the reveal shows a sentence or two about it from Wikipedia, with a link to read more.
- **Museum.** Every real answer you dig up gets a place on your shelves, sorted by rarity.
- **Wardrobe.** Unlock outfits by playing: Miner, Legionary, Historically Inaccurate Viking, Pharaoh, Knight, Gentleman Antiquarian, Dino Suit, Royal and Golden Digger.
- **Forgiving answers.** The game accepts small typos, alternative names, and Roman or Arabic numerals (Henry VIII = Henry 8). It warns you if your answer is ambiguous and explains near misses.
- **Streaks and stats.** Day streak, deepest dig and total digs.
- Hand-built pixel art and animation, plus synthesized sound effects that you can mute.

## How rarity works

Each answer is ranked by how often its Wikipedia article was read over 60 days, compared with the other answers to the same prompt. Less-read history scores more. The ranking is computed about once a month and shipped with the site, so every player gets the same depth for the same answer and the game never has to call Wikipedia while you play. Answers without enough data use built-in rarity estimates.

## Tech

- **Plain static files** with no framework, no build step and no dependencies: `index.html` (markup), `css/style.css`, `js/data/prompts.js` (all prompts and answers, plus the daily rotation), `js/data/rarity.js` and `js/data/summaries.js` (generated from Wikipedia once a month) and `js/app.js` (the game). Opening `index.html` straight from disk works too. Graphics are drawn on `<canvas>`, sound uses the Web Audio API, and the font is [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans).
- **Hosting:** GitHub → [Vercel](https://vercel.com). Every push to `main` deploys automatically.
- **Wikipedia data:** page views and article intros from the [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page), fetched monthly by `tools/rarity.mjs` and `tools/summaries.mjs`. The game itself never calls Wikipedia.
- **Tools** (`tools/`, Node.js 20+, no dependencies): `check.mjs` (the checks and rotation commands), `rarity.mjs`, `summaries.mjs`, and `load-game.mjs`, which loads the page in Node for the other three.
- **Analytics:** [Vercel Web Analytics](https://vercel.com/docs/analytics). It is privacy-friendly and uses no cookies.

### Updating the site

Edit the file that holds what you want to change:

| To change | Edit |
|---|---|
| Prompts, answers, aliases, the daily rotation | `js/data/prompts.js` |
| Answer rarity (generated monthly, don't edit) | `js/data/rarity.js` |
| Reveal summaries for rare finds (generated monthly, don't edit) | `js/data/summaries.js` |
| Colours, layout, fonts | `css/style.css` |
| Game logic, pixel art, sound | `js/app.js` |
| Page text and structure | `index.html` |

Then push to `main` with git. If you use the GitHub website instead, open the file in its folder and use the pencil (**Edit**) button, or drag the changed file into the matching folder with **Add file → Upload files**. Uploading only `index.html` is no longer enough. Vercel publishes the new version within a minute.

### Running checks

Run the automated checks before every change. They need [Node.js](https://nodejs.org) 20 or newer and have no dependencies.

```sh
npm test            # or: node tools/check.mjs
```

The checks load `index.html` and its scripts without a browser and verify the prompt data (unique ids, valid categories, tiers 1–6, no duplicate answers or clashing aliases), answer matching, the practice prompts, the daily rotation, and the generated rarity and summary files (and that the game never calls `fetch`). Daily digs that are already published (or due within 14 days) are pinned in `tools/rotation-snapshot.json`. If that test fails, the change would alter digs that players have already seen. The snapshot only ever grows: `node tools/check.mjs --write-snapshot` adds the digs up to 14 days ahead and refuses to rewrite an existing one.

To add a prompt, put it in `PROMPT_DATA` in `js/data/prompts.js` and run `node tools/check.mjs --add-prompt <id>`. That puts it into every frozen season of the rotation that hasn't started yet, so it shows up within a few weeks. The rotation is frozen until early January 2028. When the checks say so, freeze further with `node tools/check.mjs --freeze-until <YYYY-MM-DD>`.

### Monthly update: rarity and summaries

About once a month, first run `node tools/rarity.mjs`. It takes about six minutes, fetches page views for every answer and rewrites `js/data/rarity.js` (never edit that file by hand). Check the diff, run `npm test` and commit. If more than 5 % of the requests fail, it writes nothing. `--dry-run` fetches and reports without writing.

Then run `node tools/summaries.mjs` (about four minutes, and always after `rarity.mjs`, because it picks the rare answers from the new rarity). It fetches the first sentence or two of the Wikipedia article for every rare answer (tier 4–6) and rewrites `js/data/summaries.js`, which the reveal screen shows when you dig up a rare find. Text only, never images. Same rules: check the diff, run `npm test`, commit.

## Privacy

Your progress (streak, stats, museum, outfit and past results) is stored only in your own browser, in `localStorage`. There are no accounts and no cookies. Clearing your browser data resets your progress.

## Credits and licences

- Pixel font: **Pixelify Sans** by Stefie Justprince, under the [SIL Open Font License 1.1](https://openfontlicense.org). Digits use **DugUp Digits**, a modified subset of Pixelify Sans under the same licence.
- History facts and links come from [Wikipedia](https://www.wikipedia.org). Dug Up is not affiliated with Wikipedia or the Wikimedia Foundation.
- The short summaries shown for rare finds are taken from the opening of Wikipedia articles, under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), shortened, and each links to its article.

---

*Real Vikings never wore horned helmets. We know. The outfit is called "Historically Inaccurate" for a reason.*
