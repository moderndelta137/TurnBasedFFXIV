# Enemy Facing And Scale

## Summary

Fixed enemy sprite facing, doubled boss display size, and anchored enemy art to the center of the grid.

## Files Changed

- `data/enemies.csv`
- `index.html`
- `log/2026-05-25-enemy-facing-and-scale.md`

## Behavior Changed

- Enemy sprite art now flips opposite from prior rendering so it faces player-side characters.
- Enemy display dimensions are at least doubled from previous boss sprite display sizes.
- Enemy sprite container is positioned from the center of the enemy 2x2 grid area.
- Enemy name and HP bar stay attached to the bottom of the sprite container.

## Verification

- Confirmed `index.html` inline JavaScript parses after extracting script body.
- Confirmed `data/enemies.csv` display sizes:
  - Goblin Raider = 360x336
  - Crystal Knight = 408x448
  - Iron Ogre = 440x448
- Confirmed local server returns HTTP 200 for `/`, `/data/enemies.csv`, and `crystal-knight.png`.

## Notes / Risks

- Very large enemy sprites may overlap intent UI on short screens; combat layout may need a later scale clamp if needed.
- Server stop command reported the temporary process was already gone after HTTP checks; asset requests had already passed.
