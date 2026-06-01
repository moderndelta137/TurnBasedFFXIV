# 2026-05-25 Lobby Screen

## Summary

Added a mobile co-op lobby screen before combat, based on the supplied blue crystal RPG reference.

## Files Changed

- `index.html`
- `log/2026-05-25-lobby-screen.md`

## Behavior Changed

- Game now opens on a lobby screen.
- Lobby shows player profile, currency, party slots, central Warrior sprite, room actions, and a large Ready button.
- Bottom lobby tabs switch between Loadout, Dungeon / Raid, and Options.
- Ready button enters the existing battle screen.
- Options tab has local Sound and VFX toggles.

## Verification

- Parsed inline script with `new Function`.
- Ran a mocked DOM smoke test through lobby render and Ready-to-battle transition.
- Started local server through `npm.cmd run dev` in a temporary background job.
- Confirmed `http://127.0.0.1:4173/` returned HTTP 200.
- Confirmed served HTML contains lobby and Ready markup.

## Notes / Risks

- Chrome and Edge headless screenshot capture failed because local GPU process policy rejected headless rendering.
- Lobby uses CSS-built pixel character and icons; no external image assets were added.
- Loadout and dungeon data are prototype UI only, except Ready which enters battle.

