# Split GDD Into Data Docs

## Summary

Split the single root GDD into topic-focused Markdown files under `data/gdd/`, with `GDD_index.md` as the new canonical entry point.

## Files Changed

- `AGENTS.md`
- `data/gdd/GDD_index.md`
- `data/gdd/GDD_overview_scope.md`
- `data/gdd/GDD_visual_audio.md`
- `data/gdd/GDD_game_flow_rewards.md`
- `data/gdd/GDD_combat.md`
- `data/gdd/GDD_grid_positioning.md`
- `data/gdd/GDD_jobs_loadout_progression.md`
- `data/gdd/GDD_ui_ux.md`
- `data/gdd/GDD_data_model.md`
- `data/job_loadout_expansion_proposals.csv`
- `GDD_positioning_v3.md` removed after split

## Behavior Changed

- Design source moved from one root GDD file to topic docs in `data/gdd/`.
- Agent rules now point to `data/gdd/GDD_index.md`.
- Loadout proposal CSV source references now point to the jobs/loadout GDD doc.
- No game runtime behavior changed.

## Verification

- Confirmed `data/gdd/GDD_index.md` exists.
- Confirmed old root `GDD_positioning_v3.md` no longer exists.
- Confirmed key restored sections exist in the split docs: High Concept, Role Categories, Enemy Design Philosophy, Battle Screen, Options Popup.
- Confirmed `index.html` still exists and was not edited.

## Notes / Risks

- Some old historical log entries still mention `GDD_positioning_v3.md`; those remain as history.
