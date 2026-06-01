# Cure And Options Menu

## Summary
- Doubled WHM Cure healing output.
- Added a battle topbar options button.
- Added options modal controls for sound volume and abandoning a run.

## Files Changed
- `index.html`
- `data/player_actions.csv`
- `log/2026-05-26-cure-and-options-menu.md`

## Behavior Changed
- `Cure` now heals for double its previous final amount.
- Battle top right now has an `OPT` button.
- Options modal includes a sound volume slider.
- Options modal includes abandon run flow with confirmation.
- Abandoning returns to lobby, resets run state, stops timer, and cancels stale resolution flow.

## Verification
- Extracted inline `<script>` from `index.html` and ran `node --check`.
- Ran `node --check scripts\serve.mjs`.
- Served `index.html` with `node scripts/serve.mjs` and confirmed `http://127.0.0.1:4173/` returned `200`.
- Checked WHM Cure math: old final heal `132`, new final heal `264`.

## Notes / Risks
- No active audio elements exist yet, so volume setting is stored and applied to any future `<audio>` elements.
