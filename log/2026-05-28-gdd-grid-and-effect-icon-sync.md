# Summary

- Updated the GDD and agent rules to match recent grid, click, and status-icon behavior.

# Files Changed

- `GDD_positioning_v3.md`
- `AGENTS.md`

# Behavior Changed

- No runtime behavior changed.
- Documentation now says party starts at `(3,0)`, `(3,1)`, `(3,2)`, `(3,3)`.
- Documentation now limits opposite-side movement to horizontal cross-enemy movement.
- Documentation now says top/bottom edge wrapping is not allowed.
- Documentation now says battlefield sprites should not block grid clicks or act as teammate selectors.
- Documentation now specifies square buff/debuff/passive icons with arrows, circular infill, colors, and tooltips.

# Verification

- Confirmed `GDD_positioning_v3.md` and `AGENTS.md` contain the updated start-position, horizontal movement, no vertical wrap, sprite-click, and square status-icon rules.
- Searched for stale top/bottom opposite-side movement and character-sprite selection wording; no matches found.
- Confirmed this was doc-only except for the required log file.

# Notes / Risks

- Historical log files still describe the behavior at the time they were written.
