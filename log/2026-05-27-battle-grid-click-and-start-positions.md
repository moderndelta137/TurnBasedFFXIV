# Summary

- Fixed battle start positions so party starts at right column cells `(3,0)`, `(3,1)`, `(3,2)`, `(3,3)`.
- Made enemy and party battlefield sprites ignore pointer input so grid cells remain clickable underneath them.
- Removed battlefield teammate sprite click selection.

# Files Changed

- `index.html`

# Behavior Changed

- Party reset, battle setup, restart, abandon, and wave-clear returns all use the corrected right-column start positions.
- Enemy sprite no longer blocks movement cell clicks.
- Clicking player sprites on the battlefield no longer changes selection or consumes grid clicks.

# Verification

- Confirmed `START_POSITIONS` now equals `[[3,0],[3,1],[3,2],[3,3]]`.
- Confirmed `.enemy-sprite` and `.token` use `pointer-events:none`.
- Confirmed battlefield token click handler was removed.

# Notes / Risks

- Character selection still works through command panels.
- Browser smoke test not run in this batch.
