# Lobby Job Change And Balanced Party

## Summary

Added lobby job rotation, larger loadout icons, and balanced AI party filling when starting battle.

## Files Changed

- `index.html`
- `log/2026-05-26-lobby-job-change-balanced-party.md`

## Behavior Changed

- Lobby loadout panel is taller.
- Equipment and action square icons are larger.
- Left and right arrow buttons beside the character rotate the player between WAR, WHM, BLM, and DRG.
- Changing job swaps the character sprite, job panel, equipment row, action row, and personal job level.
- Starting battle auto-fills AI party slots with the missing roles for a balanced tank / healer / ranged / melee team.
- Tank actions no longer assume WAR is always slot 1; AI tank Cover, Provoke, and Guard Wall can work from any party slot.

## Verification

- Extracted inline script and ran `node --check`; passed.
- Served `index.html` through a local Node HTTP server; response returned `200`.
- Confirmed served markup contains job arrows, balanced party fill function, taller panel CSS, larger square icon CSS, and slot-agnostic tank Cover logic.

## Notes / Risks

- Job levels and equipment are prototype static lobby data.
