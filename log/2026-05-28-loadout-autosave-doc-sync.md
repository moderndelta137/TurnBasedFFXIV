# Loadout Autosave Doc Sync

## Summary

Updated project documentation to match the new Loadout job sprite picker and local autosave behavior.

## Files Changed

- `GDD_positioning_v3.md`
- `AGENTS.md`
- `log/2026-05-28-loadout-autosave-doc-sync.md`

## Behavior Changed

- No runtime behavior changed.
- Documentation now describes the character-card job picker, sprite-only picker styling, per-job loadout switching, and browser local autosave.

## Verification

- Confirmed `GDD_positioning_v3.md` describes the job sprite picker, localStorage autosave, local save scope, and out-of-scope cross-device save.
- Confirmed `AGENTS.md` includes the sprite-only job picker rule and autosave key `turnbasedffxiv.playerSave.v1`.
- Confirmed this batch did not edit `index.html`.

## Notes / Risks

- Local autosave is browser/device local only; cloud/account save remains out of scope.
