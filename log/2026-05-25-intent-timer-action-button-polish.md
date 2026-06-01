# 2026-05-25 Intent Timer Action Button Polish

## Summary

Polished intent, timer, action button, and tooltip presentation for the combat command UI.

## Files Changed

- `index.html`
- `log/2026-05-25-intent-timer-action-button-polish.md`

## Behavior Changed

- Enemy intent panel now uses the same blue command-window style as the action UI.
- Tooltip window now uses the command-window style and follows the mouse near the hovered action.
- Center timer is hidden until 3 seconds remain.
- Intent panel progress bar fills as the planning timer counts down.
- Action buttons now display icon, name, and MP/TP cost in one row.

## Verification

- Parsed inline JavaScript with `new Function`.
- Ran mocked DOM smoke test for timer hide/show behavior, intent bar progress, and mouse-positioned tooltip.
- Started local server and confirmed the page returned HTTP 200.
- Confirmed intent bar, action icon, and tooltip markup are served.

## Notes / Risks

- Action icons are simple text glyphs for now.
- Tooltip positioning is bounded inside the game container.
