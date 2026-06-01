# Damage Formula Data

## Summary

Recorded player damage calculation in the combat GDD and added enemy defense fields so action damage can be calculated from CSV data.

## Files Changed

- `index.html`
- `data/enemies.csv`
- `data/gdd/GDD_combat.md`
- `data/gdd/GDD_data_model.md`
- `log/2026-05-29-damage-formula-data.md`

## Behavior Changed

- Player damage now subtracts enemy `defense` for physical damage and `magic_defense` for magic damage.
- Enemy CSV rows now include `defense` and `magic_defense`.
- Combat GDD now documents the manual player damage formula, stat selection, positional multipliers, status multipliers, and an example.
- Data model GDD now records the job and enemy CSV fields needed for manual calculation.

## Verification

- Confirmed `index.html` script block parses.
- Confirmed `data/jobs.csv`, `data/player_actions.csv`, `data/enemies.csv`, and `data/enemy_actions.csv` row widths match their headers.
- Confirmed documented BLM Fire vs Iron Ogre side example calculates 68 damage.
- Confirmed local server can serve `index.html` at `http://127.0.0.1:4173/`.
- Browser smoke test blocked because the in-app browser bridge failed during setup in the sandbox.

## Notes / Risks

- Enemy defense lowers current player damage output compared to the previous prototype. Values are intentionally modest so combat pacing stays close to the existing feel.
