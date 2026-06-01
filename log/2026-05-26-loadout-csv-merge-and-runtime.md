# Loadout CSV Merge And Runtime

## Summary

Merged proposed job loadout expansion into CSV-backed game data and wired loadout swapping to the expanded pools.

## Files Changed

- `data/player_actions.csv`
- `data/equipment.csv`
- `data/passives.csv`
- `index.html`
- `log/2026-05-26-loadout-csv-merge-and-runtime.md`

## Behavior Changed

- Each job now has 8 action records in `player_actions.csv`: 4 defaults and 4 expanded actions.
- Equipment and passive pools now load from dedicated CSV files.
- Loadout action, gear, and passive pool rows scroll horizontally so all options can be swapped in the lobby Loadout page.
- New action effect types have first-pass runtime behavior: shields, regen, counters, damage over time, and extra damage actions.

## Verification

- Parsed `data/player_actions.csv`: 32 rows.
- Parsed `data/equipment.csv`: 49 rows.
- Parsed `data/passives.csv`: 28 rows.
- Confirmed each job has 8 action rows and 7 passive rows.
- Confirmed `index.html` script syntax compiles.
- Confirmed local server returns HTTP 200 for `/`, `/data/player_actions.csv`, `/data/equipment.csv`, and `/data/passives.csv`.

## Notes / Risks

- Equipment and passive effects mostly exist as selectable/loadout data now; only action effects are actively resolved in combat.
- Some proposed equipment/passive effects need future stat and modifier hooks if they should affect combat math directly.
