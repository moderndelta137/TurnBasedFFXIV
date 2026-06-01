# Summary

Removed action speed subtext from lobby and loadout action icon tiles.

# Files Changed

- `index.html`

# Behavior Changed

- Lobby action tiles now show the action icon and action name only.
- Loadout current-action and action-pool tiles now show the action icon and action name only.
- Battle command buttons still show timing.

# Verification

- Confirmed inline script syntax with `new Function(...)`.
- Confirmed no action icon markup still renders `loadout-sub` timing or swap text.
- Confirmed local server `http://127.0.0.1:4173/` returns `200`.

# Notes / Risks

- Equipment and passive tiles still show their existing subtext.
