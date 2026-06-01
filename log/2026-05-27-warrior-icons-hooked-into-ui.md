# Summary

Hooked generated Warrior action icons into the battle and loadout UI.

# Files Changed

- `index.html`

# Behavior Changed

- Warrior action buttons now use generated PNG icons when available.
- Lobby home action tiles and customize loadout action tiles now use the same PNG icons.
- Non-Warrior actions still fall back to the existing symbol icons.

# Verification

- Confirmed all mapped Warrior icon files exist.
- Confirmed all Warrior icons are `76x76`.
- Started local server with `node scripts/serve.mjs`.
- Confirmed `http://127.0.0.1:4173/` returns `200`.
- Confirmed `http://127.0.0.1:4173/assets/icons/warrior/strike.png` returns `image/png`.
- Confirmed inline script syntax with `new Function(...)`.

# Notes / Risks

- Icons are currently available for Warrior actions only.
