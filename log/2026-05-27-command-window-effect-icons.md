# Summary

- Added command-window effect icons beside each character name.
- Included passive effects, temporary buffs, and debuffs in the icon list.
- Added hover/focus tooltips for effect details.
- Added circular fill for limited or tracked effects.

# Files Changed

- `index.html`

# Behavior Changed

- Character panels now show up-arrow icons for buffs/passives and down-arrow icons for debuffs.
- Icons are color-coded by broad effect type.
- Shield, Regen, Counter, Guard, Cover, and Jump show duration/remaining fill when active.
- Passive effects show as permanent icons without timer fill.

# Verification

- Extracted inline script from `index.html` and confirmed JavaScript syntax with Node.
- Confirmed local dev server returned HTTP `200`.
- Confirmed effect icon helpers and duration tracking fields exist in `index.html`.

# Notes / Risks

- Existing combat state has limited explicit duration data, so one-turn effects display full duration and value-decay effects use current value versus initial tracked value.
