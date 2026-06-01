# 2026-05-25 Target Line Color

## Summary

Changed AI teammate targeting lines to use the same blue color as the player targeting line.

## Files Changed

- `index.html`
- `log/2026-05-25-target-line-color.md`

## Behavior Changed

- AI teammate target lines now use blue instead of orange.
- No combat logic changed.

## Verification

- Confirmed `.target-line.ai` now uses `#75e8ff`.

## Notes / Risks

- Healing target lines still use green to distinguish healing actions.

