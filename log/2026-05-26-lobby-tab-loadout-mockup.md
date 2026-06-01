# Lobby Tab And Loadout Mockup

## Summary

Added a default Lobby tab and rebuilt Loadout as a mock editor for actions, equipment, and passives.

## Files Changed

- `index.html`
- `log/2026-05-26-lobby-tab-loadout-mockup.md`

## Behavior Changed

- Bottom tabs now include `Lobby`.
- `Lobby` is the default selected tab.
- Loadout action buttons no longer use native browser `title` tooltips, so only the in-game tooltip appears.
- Loadout tab now has sub-modes for Actions, Gear, and Passive.
- Action mode supports selecting a current action slot and tapping a pool action to swap into that slot.
- Gear mode supports selecting a current equipment slot and tapping a pool item to equip it.
- Passive mode supports selecting a passive slot and tapping a passive skill to equip it.

## Verification

- Extracted inline script and ran `node --check`; passed.
- Served `index.html` through a local Node HTTP server; response returned `200`.
- Confirmed default tab state is `home`.
- Confirmed loadout, action swap, gear swap, and passive editor render functions exist.
- Confirmed native tooltip attributes/usages are absent from the page source.

## Notes / Risks

- Loadout page is still mock data and local-only.
