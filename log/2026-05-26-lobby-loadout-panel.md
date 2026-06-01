# Lobby Loadout Panel

## Summary

Reworked lobby hero area and loadout panel to focus on the selected character job and equipped kit.

## Files Changed

- `index.html`
- `log/2026-05-26-lobby-loadout-panel.md`

## Behavior Changed

- Lobby top no longer shows profile, currency, energy, Friends, or Invite UI.
- Warrior sprite sits lower, closer to screen center.
- Lobby crystal background ring is centered on the character sprite.
- Former nameplate now displays job icon, job name, role, level, and EXP bar.
- Loadout tab now shows two rows: four equipment slots, then four equipped actions.

## Verification

- Extracted inline script and ran `node --check`; passed.
- Served `index.html` through a local Node HTTP server; response returned `200`.
- Confirmed served markup contains `jobInfoPanel` and `loadout-grid`.
- Confirmed old visible strings `Energy 120/120`, `Friends`, and `Invite` are absent.
- Playwright visual/mobile screenshot check was unavailable because Playwright is not installed.

## Notes / Risks

- Equipment names are prototype static data until equipment records exist.
