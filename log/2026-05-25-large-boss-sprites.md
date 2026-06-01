# Large Boss Sprites

## Summary

Recreated all current enemy sprites as larger FF5-style boss sprites with the same pixel density as the party sprites.

## Files Changed

- `assets/sprites/enemies/boss-sprites-source.png`
- `assets/sprites/enemies/boss-sprites-sheet.png`
- `assets/sprites/enemies/goblin-raider.png`
- `assets/sprites/enemies/crystal-knight.png`
- `assets/sprites/enemies/iron-ogre.png`
- `data/enemies.csv`
- `index.html`
- `prompts/sprite-generation.md`
- `log/2026-05-25-large-boss-sprites.md`

## Behavior Changed

- Enemy sprites now use larger boss-scale art instead of small enemy-scale art.
- Enemy display size now comes from `data/enemies.csv` through `sprite_width` and `sprite_height`.
- Generated large boss prompt is stored for future consistent boss art.

## Verification

- Confirmed processed boss PNG dimensions and transparent corners:
  - `goblin-raider.png` = 117x108
  - `crystal-knight.png` = 126x140
  - `iron-ogre.png` = 138x140
- Confirmed `index.html` inline JavaScript parses after extracting script body.
- Confirmed `data/enemies.csv` includes sprite display dimensions and each referenced PNG exists.
- Confirmed local server returns HTTP 200 for `/`, `/data/enemies.csv`, all three boss sprite PNGs, and `boss-sprites-sheet.png`.

## Notes / Risks

- Boss sprites are single idle sprites only. Animation frames still need separate generation if needed later.
- Server stop command reported the temporary process was already gone after HTTP checks; asset requests had already passed.
