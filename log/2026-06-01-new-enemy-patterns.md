# New Enemy Patterns

## Summary

- Added Ember Prophet, Storm Clockwork, and Plague Chimera as new prototype enemies.
- Added CSV-backed enemy actions and action sets for hazards, towers, rotating lasers, poison, prison, and charged attacks.
- Added runtime support for persistent burning cells, tower cells, rotating beam warnings, poison ticks, and Ice Prison movement lock.

## Files Changed

- `index.html`
- `data/enemies.csv`
- `data/enemy_actions.csv`
- `data/enemy_action_sets.csv`
- `data/gdd/GDD_enemy_pattern_idea_pool.md`
- `log/2026-06-01-new-enemy-patterns.md`

## Behavior Changed

- The prototype route now has 6 waves instead of 3.
- New waves use:
  - Ember Prophet: fire hazards, wildfire bait, stack hit, raidwide fire.
  - Storm Clockwork: rotating twin beams, tower soak, interruptible charge, charged beam.
  - Plague Chimera: poison, Ice Prison, prison punish, corner blast.
- Esuna removes poison and Ice Prison.
- Ice Prison prevents movement while active.
- Hazard and tower cells now have distinct grid styling.

## Verification

- Parsed the inline `index.html` script with Node `new Function(...)`: pass.
- Parsed enemy CSV files with the same CSV rules as the runtime loader: pass.
- Served `/`, `/data/enemies.csv`, and `/data/enemy_actions.csv` through a local Node static server: HTTP 200.
- Attempted in-app browser smoke; browser bridge failed twice with a sandbox setup crash before page load.

## Notes / Risks

- New enemies currently reuse existing sprites.
- Hazard, tower, and prison tuning may need playtest balance.
- Tower assignment is intentionally one-tower only for first implementation.
