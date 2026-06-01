# Loadout Action Icons Full Bleed

## Summary

Changed equipped action slots in the Loadout page to use full-bleed action icons with name overlays.

## Files Changed

- `index.html`
- `log/2026-05-27-loadout-action-icons-full-bleed.md`

## Behavior Changed

- Action icons in the Loadout page now fill the whole action card.
- Action names render as compact overlays on top of the icon.
- Equipment/action row alignment from the previous fix is preserved.

## Verification

- Ran headless Edge at mobile portrait size.
- Confirmed all 4 equipped action slots use `has-action-img`.
- Confirmed action image rects fill the card interior: card `94px x 69px`, image `92px x 67px` after border.
- Confirmed action label overlays use the same dark gradient style as lobby loadout action tiles.
- Captured verification screenshot at `.tmp/loadout-fullbleed-after-fix.png`.

## Notes / Risks

- Scoped to equipped action slots only.
