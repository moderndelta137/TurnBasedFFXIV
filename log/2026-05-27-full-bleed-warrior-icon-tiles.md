# Summary

Changed Warrior action tiles to use full-bleed icons with text overlay.

# Files Changed

- `index.html`

# Behavior Changed

- Warrior lobby/loadout action panels now fill the square tile with the action icon.
- Action name and timing/swap text render as overlays on top of the icon.
- Equipment tiles and non-Warrior fallback icon tiles keep the existing centered-symbol layout.

# Verification

- Confirmed inline script syntax with `new Function(...)`.
- Confirmed local server `http://127.0.0.1:4173/` returns `200`.
- Checked for local Playwright; not installed in this repo.

# Notes / Risks

- Battle command buttons still keep compact inline icons because they are not square panels.
