# Summary

- Removed top-to-bottom movement wrapping on the battlefield grid.

# Files Changed

- `index.html`

# Behavior Changed

- `(0,0)` no longer counts as adjacent to `(0,3)`.
- `(3,0)` no longer counts as adjacent to `(3,3)`.
- Vertical distance now stays normal grid distance, so top and bottom edge cells are 3 spaces apart.
- Existing left/right opposite-side abstraction remains unchanged.

# Verification

- Extracted inline script from `index.html` and confirmed JavaScript syntax with Node.
- Recreated movement lookup in Node and confirmed `(3,0)` cannot reach `(3,3)` with step 1 or step 2 movement.
- Confirmed no `y===0` / `y===3` wrap rule remains in `validDestinations()`.

# Notes / Risks

- Teleport movement still uses the full outer-cell destination list by design.
