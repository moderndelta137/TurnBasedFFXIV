# Move Highlight Phase And Warning

## Summary
- Made player move borders visible even when enemy warning cells overlap them.
- Hid move choice and selected-destination highlights while turns resolve.

## Files Changed
- `index.html`
- `log/2026-05-26-move-highlight-phase-and-warning.md`

## Behavior Changed
- Valid move cells now draw a separate cyan border layer above warning backgrounds.
- Valid move borders become thicker when the same cell also has an enemy warning.
- Move choice highlights only render during player planning, not during player/enemy action resolution.

## Verification
- `node --check scripts\serve.mjs`
- Extracted inline `<script>` from `index.html` and ran `node --check`
- Served `index.html` with `node scripts/serve.mjs` and confirmed `http://127.0.0.1:4173/` returned `200`
- Confirmed source has phase gate `showingMoveChoices=!state.resolving && state.screen==='battle'`

## Notes / Risks
- Enemy warning highlights still remain visible during resolution.
- This does not change movement rules or action timing.
