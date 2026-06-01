# Loadout Inventory Layout

## Summary

Reworked the Loadout tab into an equipment paper-doll style page with a lower inventory that changes by selected slot type.

## Files Changed

- `index.html`
- `log/2026-05-27-loadout-inventory-layout.md`

## Behavior Changed

- Loadout tab upper area now shows character info, passive slots, equipment slots, and action slots.
- Selecting an action slot changes the lower inventory to available actions.
- Selecting an equipment slot changes the lower inventory to valid gear for that slot.
- Selecting a passive slot changes the lower inventory to a vertical passive skill list.
- Action and equipment inventory entries support click-to-swap and drag/drop onto matching slots.
- Passive skills use long text list rows and click-to-equip.

## Verification

- Extracted inline script and ran `node --check`; passed.
- Served `index.html` through a local Node HTTP server; response returned `200`.
- Confirmed equipped-zone, lower inventory area, action inventory, equipment inventory, passive list, and drag/drop markers are present.

## Notes / Risks

- Inventory contents still use mock/local data.
