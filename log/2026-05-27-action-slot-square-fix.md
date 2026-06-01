# Action Slot Square Fix

## Summary

Fixed equipped action slot sizing so image-backed action buttons render as square cards instead of squeezed strips.

## Files Changed

- `index.html`
- `log/2026-05-27-action-slot-square-fix.md`

## Behavior Changed

- Equipped action slots now force a square aspect ratio.
- Image-backed equipped action slots use bounded square sizing inside the action row.
- Small-height layout uses a smaller square cap so cards stay readable.

## Verification

- Extracted inline script and ran `node --check`; passed.
- Served `index.html` through a local Node HTTP server; response returned `200`.
- Confirmed equipped action slot square CSS, image slot max width, and small-height square cap are present.

## Notes / Risks

- This targets equipped action slots only; inventory grid cards already used square sizing.
