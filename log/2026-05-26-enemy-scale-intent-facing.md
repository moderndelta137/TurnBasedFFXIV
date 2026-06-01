# Enemy Scale Intent Facing

## Summary

Reduced enemy sprite display size, raised the intent window above enemy sprites, and fixed non-target attack facing.

## Files Changed

- `data/enemies.csv`
- `index.html`
- `log/2026-05-26-enemy-scale-intent-facing.md`

## Behavior Changed

- Enemy display dimensions are now 0.9x of the previous values.
- Enemy intent panel now renders above the enemy sprite layer.
- Non-target enemy attacks now preserve current boss facing instead of randomizing direction.
- Targeted attacks still face their chosen target.

## Verification

- Confirmed `index.html` inline JavaScript parses after extracting script body.
- Confirmed CSV display sizes:
  - Goblin Raider = 233x218
  - Crystal Knight = 265x291
  - Iron Ogre = 285x291
- Confirmed intent panel CSS uses z-index 12, above enemy sprite z-index 7.
- Confirmed non-target intent branch assigns `intent.facing = state.enemy.facing`.
- Confirmed local server returns HTTP 200 for `/` and `/data/enemies.csv`.

## Notes / Risks

- Visual browser check still recommended for exact overlap with the intent panel on short screens.
- Server stop command reported the temporary process was already gone after HTTP checks; requests had already passed.
