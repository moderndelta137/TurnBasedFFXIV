# Local Autosave

## Summary

Added local autosave for player progression and loadout choices.

## Files Changed

- `index.html`
- `log/2026-05-27-local-autosave.md`

## Behavior Changed

- Player data now saves to browser `localStorage`.
- Autosave includes current job, gold, EXP, sound options, and per-job actions, equipment, and passives.
- Saved data loads after CSV data so saved IDs can resolve against the current action, equipment, and passive pools.
- Save runs after loadout edits, job switches, option changes, rewards, reset/abandon changes, and before page unload.

## Verification

- Confirmed inline script syntax with `new Function(...)`.
- Ran headless Edge at mobile portrait size.
- Cleared `localStorage`, switched to WHM, equipped Sage Wand, equipped Freecure, set test gold/EXP, and let autosave write.
- Confirmed saved payload: current job `WHM`, gold `321`, EXP `654`, WHM weapon `sage_wand`, WHM passive `freecure`.
- Reloaded the page and confirmed restore: job `WHM`, weapon `Sage Wand`, passive `Freecure`, gold `321`, EXP `654`, and `Autosave loaded.` log line.

## Notes / Risks

- Save key is `turnbasedffxiv.playerSave.v1`.
- Data stays local to the browser/device.
