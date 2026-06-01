# 2026-05-25 Action Layout Facing Boss Status

## Summary

Adjusted action button content, sprite facing and scale, role colors, and boss status display.

## Files Changed

- `index.html`
- `log/2026-05-25-action-layout-facing-boss-status.md`

## Behavior Changed

- Selected action keeps its normal icon and cost text; highlight alone shows selection.
- Action buttons now show icon, action name, cost on the first row and action speed on the second row.
- Enemy intent timer bar animates linearly between timer updates.
- Character sprites are 1.5x larger.
- Character sprite facing was corrected by flipping only left-side tokens.
- Job icon boxes now use role colors:
  - Tank = dark blue.
  - DPS = dark red.
  - Support / healer = dark green.
- Added boss name and large HP bar with numeric HP above the enemy intent window.
- Kept the existing boss HP bar under the sprite.
- Enemy name label no longer flips when enemy facing changes.

## Verification

- Parsed inline JavaScript with `new Function`.
- Ran mocked DOM smoke test for boss status name, numeric HP, HP bar width, and enemy art facing transform.
- Started local server and confirmed the page returned HTTP 200.
- Confirmed boss status, action speed, and role class markup are served.

## Notes / Risks

- Boss sprite art itself still flips for facing, but name and HP UI remain unflipped.
