# Loadout Job Sprite Switcher

## Summary

Added clickable character sprite panel behavior in the Loadout page and a job sprite inventory for switching jobs.

## Files Changed

- `index.html`
- `log/2026-05-27-loadout-job-sprite-switcher.md`

## Behavior Changed

- Clicking the Loadout character sprite panel opens a job selection inventory.
- Job inventory shows available job sprites for WAR, WHM, BLM, and DRG.
- Clicking a job switches the player job.
- Job switching also swaps actions, equipment, and per-job passive selections.

## Verification

- Confirmed inline script syntax with `new Function(...)`.
- Ran headless Edge at mobile portrait size.
- Confirmed clicking the avatar card changes `state.loadoutMode` to `jobs`.
- Confirmed job inventory renders four cards: WAR, WHM, BLM, DRG.
- Confirmed clicking WHM changes the human slot to WHM/healer, updates avatar text to `Lv.76 White Mage`, swaps equipment to Oak Cane / Pilgrim Hood / Mender Robe / Lily Charm, and swaps actions to Smite / Cure / Cura / Esuna.
- Confirmed passive selections are stored per job: WAR kept Iron Will after switching to WHM and back, while WHM stayed empty.
- Captured verification screenshot at `.tmp/loadout-job-switcher-after-fix.png`.

## Notes / Risks

- Job switching still uses local prototype data only.
