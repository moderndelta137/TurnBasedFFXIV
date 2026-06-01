# Lobby Square Loadout Tooltips

## Summary

Changed the lobby loadout rows into square icon cells and added shared tooltip popups for equipment and actions.

## Files Changed

- `index.html`
- `log/2026-05-26-lobby-square-loadout-tooltips.md`

## Behavior Changed

- Equipment and action loadout rows now use square icon buttons instead of wide rectangles.
- Equipment icons show slot and item name inside the square.
- Action icons show action symbol, action name, and timing inside the square.
- Hovering or focusing equipment shows a command-window tooltip with item details.
- Hovering or focusing actions shows a command-window tooltip using the same combat action tooltip surface.

## Verification

- Extracted inline script and ran `node --check`; passed.
- Served `index.html` through a local Node HTTP server; response returned `200`.
- Confirmed served markup contains square loadout CSS, lobby tooltip binding, equipment detail text, and loadout icon markup.

## Notes / Risks

- Equipment icons and descriptions are still prototype static data until real equipment data exists.
