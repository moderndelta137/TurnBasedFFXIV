# Loadout Action Slot Alignment

## Summary

Fixed the Loadout page action slot row so it spans the same width as the equipment row.

## Files Changed

- `index.html`
- `log/2026-05-27-loadout-action-slot-alignment.md`

## Behavior Changed

- Equipped action slots are no longer squeezed into the first quarter of the row.
- Action slots now align under the equipment slots and keep the same card/icon sizing.
- The upper equipped area keeps enough height for equipment and action rows before the inventory tabs.

## Verification

- Confirmed source cause: global `.actions` grid styles leaked into `.equipped-stack.actions`.
- Confirmed `.equipped-stack.actions` now explicitly uses one grid column.
- Confirmed equipped slot rows stretch to their grid track height.
- Confirmed short-height layout gives the equipped area a minimum height before inventory.
- Ran headless Edge at mobile portrait size. Equipment/action slot x positions matched: `43, 142, 241, 339`; widths matched at `94px`; action icon images measured `32px x 32px`.
- Captured verification screenshot at `.tmp/loadout-after-fix.png`.

## Notes / Risks

- In-app browser backend was unavailable in this session, so live verification used local headless Edge via Chrome DevTools Protocol.
