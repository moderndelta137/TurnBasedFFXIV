# 2026-05-25 CSV Game Data

## Summary

Moved core game content data into CSV files and added a browser CSV loader.

## Files Changed

- `index.html`
- `data/player_actions.csv`
- `data/jobs.csv`
- `data/enemies.csv`
- `data/enemy_actions.csv`
- `data/enemy_action_sets.csv`
- `log/2026-05-25-csv-game-data.md`

## Behavior Changed

- Player action data now loads from `data/player_actions.csv`.
- Job stats, role, movement type, sprite path, and loadout now load from `data/jobs.csv`.
- Enemy HP, rewards, and action set ID now load from `data/enemies.csv`.
- Enemy action mechanics now load from `data/enemy_actions.csv`.
- Enemy action rotations now load from `data/enemy_action_sets.csv`.
- JavaScript keeps fallback data if CSV fetch fails.
- Enemy damage modifiers and victory rewards now read from loaded data.

## Verification

- Parsed inline JavaScript with `new Function`.
- Ran CSV loader smoke test with file-backed `fetch`; loaded 16 player actions, Goblin Raider, Heavy Smash modifier, and WAR loadout.
- Started local server and confirmed the page plus all five CSV files returned HTTP 200.

## Notes / Risks

- CSV loading requires running through the local server or GitHub Pages; browser `file://` may block `fetch`.
- JavaScript still owns formulas, targeting resolution, range resolution, timing, and status effects.
