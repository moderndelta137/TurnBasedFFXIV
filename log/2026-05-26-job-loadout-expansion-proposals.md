# Job Loadout Expansion Proposals

## Summary

Exported current job loadout data and proposed expansion items into one CSV for later merge planning.

## Files Changed

- `data/job_loadout_expansion_proposals.csv`
- `log/2026-05-26-job-loadout-expansion-proposals.md`

## Behavior Changed

- No gameplay behavior changed.
- Added a planning CSV covering existing and proposed actions, equipment, and passives for WAR, WHM, BLM, and DRG.

## Verification

- Confirmed source loadouts from `data/jobs.csv`, `data/player_actions.csv`, and lobby pools in `index.html`.
- CSV is documentation data only; game runtime files were not changed.

## Notes / Risks

- Proposed rows are not wired into combat yet.
- Later merge should split actions, equipment, and passives into dedicated normalized CSVs if the game starts loading gear and passive data from files.
