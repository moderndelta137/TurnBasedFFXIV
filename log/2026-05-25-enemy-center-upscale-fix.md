# Enemy Center Upscale Fix

## Summary

Fixed enemy sprite art anchoring and forced generated boss PNGs to upscale inside their display boxes.

## Files Changed

- `index.html`
- `log/2026-05-25-enemy-center-upscale-fix.md`

## Behavior Changed

- Enemy art now centers inside the enemy sprite box instead of bottom-aligning.
- Enemy PNGs now use `width: 100%` and `height: 100%`, so CSV display dimensions actually scale them up.
- Enemy flip transform now applies only to the image, so wrapper centering cannot be shifted by facing changes.

## Verification

- Confirmed `index.html` inline JavaScript parses after extracting script body.
- Confirmed CSV display sizes remain doubled:
  - Goblin Raider = 360x336
  - Crystal Knight = 408x448
  - Iron Ogre = 440x448
- Confirmed local server returns HTTP 200 for `/`.

## Notes / Risks

- Large sprites can overlap command/log area on short screens; later pass may need responsive scale limits.
- Browser automation visual check was blocked by local execution policy, so verification is code/server based for this pass.
- Server stop command reported the temporary process was already gone after HTTP check; request had already passed.
