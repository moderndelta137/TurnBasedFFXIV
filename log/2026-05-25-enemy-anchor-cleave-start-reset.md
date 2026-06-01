# Enemy Anchor Cleave Start Reset

## Summary

Moved the enemy bottom anchor to the lower row of the center grid, increased sprite display size again, fixed front cleave facing consistency, and centralized party start positions.

## Files Changed

- `data/enemies.csv`
- `index.html`
- `log/2026-05-25-enemy-anchor-cleave-start-reset.md`

## Behavior Changed

- Enemy bottom-middle anchor now uses the middle of the lower row of the center 2x2 grid.
- Enemy display dimensions are 1.2x larger than the previous values.
- Front Cleave now locks to the boss's current facing direction instead of rolling its own random facing.
- New wave setup always resets party positions to the defined right-side starting positions.

## Verification

- Confirmed `index.html` inline JavaScript parses after extracting script body.
- Confirmed CSV display sizes:
  - Goblin Raider = 259x242
  - Crystal Knight = 294x323
  - Iron Ogre = 317x323
- Confirmed local server returns HTTP 200 for `/` and `/data/enemies.csv`.
- Confirmed code paths use `START_POSITIONS` during wave setup, clear transition, and restart.
- Confirmed Front Cleave intent keeps `state.enemy.facing` instead of randomizing.

## Notes / Risks

- Player targeting lines still use the center of the enemy grid, not the lower anchor point.
- Server stop command reported the temporary process was already gone after HTTP checks; requests had already passed.
