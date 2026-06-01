# Summary

Switched Warrior action icon mapping to the FF5-inspired pixel icon set.

# Files Changed

- `index.html`

# Behavior Changed

- Warrior action icons in battle, lobby, and loadout now use `assets/icons/warrior-ff5/`.
- Previous `assets/icons/warrior/` icons remain available but are no longer mapped in the UI.

# Verification

- Confirmed inline script syntax with `new Function(...)`.
- Confirmed all mapped `assets/icons/warrior-ff5/*.png` files exist.
- Tried local asset HTTP check; server was not reachable at `127.0.0.1:4173` during this pass.

# Notes / Risks

- Only Warrior action icons have the FF5-style set.
