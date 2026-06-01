# Action Slots Use Equipment Card

## Summary

Changed equipped action slots to use the exact same loadout card class as equipment slots.

## Files Changed

- `index.html`
- `log/2026-05-27-action-slots-use-equipment-card.md`

## Behavior Changed

- Equipped action slots now render as `loadout-cell compact` cards instead of `lobby-act` image cards.
- Action slots inherit the same width, height, padding, and icon layout as equipment slots.
- Removed the special square override that was still fighting the action image-card style.

## Verification

- Extracted inline script and ran `node --check`; passed.
- Confirmed equipped action slots now use `loadout-cell compact`.
- Confirmed equipped action slots no longer use `lobby-act compact` image-card class.
- Confirmed action row stretches like equipment row.
- Local server returned `200`.

## Notes / Risks

- Inventory action cards still use richer image styling; only equipped action slots changed.
