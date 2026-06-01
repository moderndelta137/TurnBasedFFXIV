# 2026-05-25 Victory Transition And Intent Tooltip

## Summary

Added enemy intent tooltip, centered character tokens, victory result display, and battle transition flow.

## Files Changed

- `index.html`
- `log/2026-05-25-victory-transition-and-intent-tooltip.md`

## Behavior Changed

- Boss HP header no longer uses a panel/window border or background.
- Character sprites now sit at the center of their current grid square.
- Enemy intent panel now shows a tooltip on hover using the same command-window style as action tooltips.
- Enemy no longer attacks after player actions reduce enemy HP to 0.
- After victory, party returns to right-side grid positions and a result window shows EXP, gold, and equipment earned.
- Between normal waves, party walks left, black wipe transitions the screen, then the next wave enters with party from right and enemy from left.
- Existing small HP bar remains below the enemy sprite.

## Verification

- Parsed inline JavaScript with `new Function`.
- Confirmed kill-before-enemy-action guard exists after player Fast / Normal actions.
- Started local server and confirmed the page returned HTTP 200.
- Confirmed result window, screen wipe, and intent tooltip markup are served.

## Notes / Risks

- Victory transition uses CSS class animations.
- Boss wave still shows the retreat / continue modal after the result window.
