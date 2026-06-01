# Loadout Data Doc Sync

## Summary

Updated design and agent docs to match the expanded CSV-backed loadout system.

## Files Changed

- `GDD_positioning_v3.md`
- `AGENTS.md`
- `log/2026-05-28-loadout-data-doc-sync.md`

## Behavior Changed

- No runtime behavior changed.
- Documentation now reflects 8 action records per job, 4 equipped actions, equipment CSV, passive CSV, and current Loadout page swap behavior.

## Verification

- Confirmed action, equipment, and passive CSV files exist.
- Confirmed GDD mentions `data/player_actions.csv`, `data/equipment.csv`, and `data/passives.csv`.
- Confirmed AGENTS includes the current runtime data files and updated action-loadout invariant.

## Notes / Risks

- Historical logs may still describe older behavior from the time they were written.
- Passive and equipment combat effects are still mostly data/UI until future combat hooks are implemented.
