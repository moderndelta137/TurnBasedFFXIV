# Enemy Bottom Anchor Facing Scale

## Summary

Adjusted enemy default facing, changed sprite anchoring to bottom-middle, and increased enemy display sizes by 1.2x from the latest values.

## Files Changed

- `data/enemies.csv`
- `index.html`
- `log/2026-05-25-enemy-bottom-anchor-facing-scale.md`

## Behavior Changed

- Enemy default facing is now right.
- Enemy sprite flip mapping now leaves right-facing art unflipped and flips only for left-facing mechanics.
- Enemy sprite box anchors by bottom middle at the enemy grid center point.
- Enemy display dimensions are 1.2x larger than the previous CSV values.

## Verification

- Confirmed `index.html` inline JavaScript parses after extracting script body.
- Confirmed CSV display sizes:
  - Goblin Raider = 216x202
  - Crystal Knight = 245x269
  - Iron Ogre = 264x269
- Confirmed local server returns HTTP 200 for `/` and `/data/enemies.csv`.

## Notes / Risks

- Bottom-middle anchoring moves tall sprites upward. Intent panel overlap should be checked visually in browser.
- Server stop command reported the temporary process was already gone after HTTP checks; requests had already passed.
