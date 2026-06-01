# Summary

Added Warrior action icon prompt sheet and generated Warrior action icon PNGs.

# Files Changed

- `prompts/warrior-action-icons.md`
- `assets/icons/warrior/`
- `assets/icons/warrior/strike.png`
- `assets/icons/warrior/provoke.png`
- `assets/icons/warrior/cover.png`
- `assets/icons/warrior/guard_wall.png`
- `assets/icons/warrior/vengeance.png`
- `assets/icons/warrior/shield_bash.png`
- `assets/icons/warrior/steel_cyclone.png`
- `assets/icons/warrior/rampart.png`

# Behavior Changed

- No gameplay behavior changed.
- Added production prompts for all Warrior action icons in `data/player_actions.csv`.
- Added square background-filled Warrior action icon assets.

# Verification

- Confirmed Warrior action list from `data/player_actions.csv`.
- Confirmed prompt file exists under `prompts/`.
- Confirmed all generated icons are `1254x1254`.
- Built and reviewed `.tmp/warrior-icons-contact-sheet.png`.

# Notes / Risks

- Icons are not wired into the UI yet.
