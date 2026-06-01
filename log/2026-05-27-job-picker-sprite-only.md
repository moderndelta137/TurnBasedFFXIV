# Job Picker Sprite Only

## Summary

Changed the Loadout job picker to show larger sprites without card backgrounds or borders.

## Files Changed

- `index.html`
- `log/2026-05-27-job-picker-sprite-only.md`

## Behavior Changed

- Job picker cards no longer draw panel backgrounds.
- Job picker cards no longer draw borders.
- Job sprites are larger.
- Hover/selected state now highlights the sprite instead of the card frame.

## Verification

- Confirmed inline script syntax with `new Function(...)`.
- Ran headless Edge at mobile portrait size.
- Confirmed all job cards have transparent background, `0px` border, and no card box shadow.
- Confirmed sprite render size increased to about `50px x 58px` on short mobile viewport.
- Captured verification screenshot at `.tmp/job-picker-sprite-only.png`.

## Notes / Risks

- Text labels remain under sprites for job clarity.
