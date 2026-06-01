# Action Slots Match Equipment

## Summary

Changed equipped action slots to use the same card layout behavior as equipment slots.

## Files Changed

- `index.html`
- `log/2026-05-27-action-slots-match-equipment.md`

## Behavior Changed

- Equipped action slots no longer use full-bleed image-card styling.
- Action slots now use normal blue card backgrounds, border, padding, icon, and label layout like equipment slots.
- Small-height layout keeps action icons scaled inside the same card shape.

## Verification

- Extracted inline script and ran `node --check`; passed.
- Served `index.html` through a local Node HTTP server; response returned `200`.
- Confirmed scoped equipped-action card CSS, blue card background, static icon layout, and small-height action card override are present.

## Notes / Risks

- Inventory action cards still keep the full image-card style.
