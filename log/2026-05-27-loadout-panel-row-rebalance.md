# Loadout Panel Row Rebalance

## Summary

Adjusted the Loadout tab equipped area to match the requested row structure and removed the redundant top header.

## Files Changed

- `index.html`
- `log/2026-05-27-loadout-panel-row-rebalance.md`

## Behavior Changed

- Removed the top character sprite / loadout title section.
- Character card now only occupies the same row as passive slots.
- Passive slots sit to the right of the character card.
- Equipment slots now occupy their own row.
- Action slots now occupy their own row.
- Inventory remains in the lower section and still changes by selected slot type.

## Verification

- Extracted inline script and ran `node --check`; passed.
- Served `index.html` through a local Node HTTP server; response returned `200`.
- Confirmed top customize header markup is absent.
- Confirmed equipped area uses three rows with character/passives, equipment, and actions.

## Notes / Risks

- Still mock layout/data, not final data model.
