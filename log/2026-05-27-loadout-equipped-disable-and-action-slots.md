# Loadout Equipped Disable And Action Slots

## Summary

Fixed action slot display sizing and prevented duplicate equipped loadout items.

## Files Changed

- `index.html`
- `log/2026-05-27-loadout-equipped-disable-and-action-slots.md`

## Behavior Changed

- Action slots in the equipped area now keep proper square/card sizing.
- Already equipped actions are greyed out in the inventory and cannot be clicked or dragged into another action slot.
- Already equipped equipment is greyed out in the inventory and cannot be selected again.
- Already equipped passives are greyed out in the passive list and cannot be selected again.

## Verification

- Extracted inline script and ran `node --check`; passed.
- Served `index.html` through a local Node HTTP server; response returned `200`.
- Confirmed compact action-slot image CSS, equipped disabled class, and duplicate checks for actions, equipment, and passives are present.

## Notes / Risks

- Duplicate prevention is local UI enforcement for the current mockup data.
