# 2026-05-25 Combat Command Layout And Tooltips

## Summary

Adjusted combat UI to better match classic Final Fantasy command-window layout references while keeping the current game art style.

## Files Changed

- `index.html`
- `log/2026-05-25-combat-command-layout-and-tooltips.md`

## Behavior Changed

- Moved the combat board upward so log messages cover it less.
- Moved timer from the command window to the middle of the battlefield.
- Hid the command-window timer row and Resolve Turn button.
- Simplified enemy intent panel to display only the attack name in a classic command-window style.
- AI party actions stay highlighted when selected instead of appearing fully greyed out.
- Added hover/focus tooltip window for action descriptions, target type, timing, and cost.

## Verification

- Parsed inline JavaScript with `new Function`.
- Ran mocked DOM smoke test for battle render, simplified intent name, center timer, and tooltip display.
- Started local server and confirmed the page returned HTTP 200.
- Confirmed tooltip and battlefield timer markup are served.

## Notes / Risks

- Manual Resolve button remains in DOM but hidden with the command hint row; combat now relies on timer auto-resolution.
- Browser screenshot verification may still be blocked by local headless GPU policy.
