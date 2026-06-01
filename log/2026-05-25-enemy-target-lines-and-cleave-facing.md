# 2026-05-25 Enemy Target Lines And Cleave Facing

## Summary

Adjusted enemy target line drawing and fixed non-target enemy attacks being manipulated like targeted attacks.

## Files Changed

- `index.html`
- `log/2026-05-25-enemy-target-lines-and-cleave-facing.md`

## Behavior Changed

- Enemy target line now uses the same solid curve style as player target lines, but in red.
- Enemy target line is drawn after player lines so it displays above them.
- Enemy target line uses a different curve angle to reduce overlap with player target lines.
- Non-target attacks like Front Cleave now choose and keep their own facing instead of facing the tank by default.
- Non-target attacks still cannot be provoked.
- AI movement avoidance for warning cells now uses the fixed non-target attack facing.

## Verification

- Parsed inline JavaScript with `new Function`.
- Started local server and confirmed the page returned HTTP 200.
- Confirmed enemy target line style, intent facing, and Front Cleave non-provokeable code are served.

## Notes / Risks

- Enemy target line only displays for intents with a real `targetId`.
