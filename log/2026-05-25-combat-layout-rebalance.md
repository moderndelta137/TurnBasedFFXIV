# 2026-05-25 Combat Layout Rebalance

## Summary

Rebalanced the combat screen layout to give the battlefield more vertical space and make the command window more compact, using the provided reference for layout only.

## Files Changed

- `index.html`
- `log/2026-05-25-combat-layout-rebalance.md`

## Behavior Changed

- Battle field height increased from 48% to 62%.
- Command window height reduced from 52% to 38%.
- Grid maximum size increased for clearer top-half combat space.
- Character command panels, action buttons, bars, stamps, and log rows were compressed.
- Combat log now sits just above the smaller command window.
- No combat rules changed.

## Verification

- Parsed inline JavaScript with `new Function`.
- Started local server and confirmed the page returned HTTP 200.
- Confirmed combat battle and command markup still serves.

## Notes / Risks

- Reference image was used only for layout proportions, not art style.
- Browser screenshot verification may still be blocked by local headless GPU policy.
