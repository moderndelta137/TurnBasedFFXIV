# Loadout Tab Customize Screen

## Summary

Reworked the tab behavior so Lobby keeps the compact kit panel and Loadout opens a separate customization screen.

## Files Changed

- `index.html`
- `log/2026-05-26-loadout-tab-customize-screen.md`

## Behavior Changed

- Lobby tab now restores the compact two-row equipment/action panel.
- Loadout tab now switches to a separate customization screen while keeping the bottom tabs visible.
- Customization screen focuses on the selected character and contains action, gear, and passive mock swap panels.
- Native browser tooltips remain disabled.

## Verification

- Extracted inline script and ran `node --check`; passed.
- Served `index.html` through a local Node HTTP server; response returned `200`.
- Confirmed customize screen markup and `customize-mode` CSS exist.
- Confirmed Lobby panel render uses compact equipment/action rows.
- Confirmed customization render function exists.
- Confirmed native tooltip attributes/usages are absent from the page source.

## Notes / Risks

- Customization data remains mock/local for now.
