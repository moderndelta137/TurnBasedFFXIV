# Enemy Sprite Assets

## Summary

Generated low-resolution enemy sprite assets in the same FFRK-like pixel density as the party sprites, then wired enemies to load sprite paths from CSV.

## Files Changed

- `assets/sprites/enemies/enemy-sprites-source.png`
- `assets/sprites/enemies/enemy-sprites-sheet.png`
- `assets/sprites/enemies/goblin-raider.png`
- `assets/sprites/enemies/crystal-knight.png`
- `assets/sprites/enemies/iron-ogre.png`
- `data/enemies.csv`
- `index.html`
- `prompts/sprite-generation.md`
- `log/2026-05-25-enemy-sprite-assets.md`

## Behavior Changed

- Enemy art now uses transparent pixel PNG assets instead of CSS placeholder shapes.
- Enemy sprite file paths now live in `data/enemies.csv`.
- Generated prompt for future enemy sprite regeneration is stored with the existing sprite prompts.

## Verification

- Confirmed generated enemy PNG dimensions and transparent corners:
  - `goblin-raider.png` = 48x48
  - `crystal-knight.png` = 92x92
  - `iron-ogre.png` = 91x91
- Confirmed `index.html` inline JavaScript parses after extracting script body.
- Confirmed `data/enemies.csv` includes sprite paths and each referenced file exists.
- Confirmed local server returns HTTP 200 for `/`, `/data/enemies.csv`, and all three enemy sprite PNG paths.

## Notes / Risks

- Sprites are generated assets and may need hand cleanup later for animation frames or stricter art direction.
- Server stop command reported the temporary process was already gone after HTTP checks; asset requests had already passed.
