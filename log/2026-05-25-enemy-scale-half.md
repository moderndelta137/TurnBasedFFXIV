# Enemy Scale Half

## Summary

Reduced enemy display size to half of the previous oversized values.

## Files Changed

- `data/enemies.csv`
- `log/2026-05-25-enemy-scale-half.md`

## Behavior Changed

- Enemy sprite display dimensions now use half of the prior CSV sizes.
- Sprite centering and HP bar placement remain unchanged.

## Verification

- Confirmed CSV display sizes:
  - Goblin Raider = 180x168
  - Crystal Knight = 204x224
  - Iron Ogre = 220x224
- Confirmed local server returns HTTP 200 for `/data/enemies.csv`.

## Notes / Risks

- This changes display size only. Source PNG pixel art files are unchanged.
- Server stop command reported the temporary process was already gone after HTTP check; request had already passed.
