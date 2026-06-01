# 2026-05-25 FFRK Low-Resolution Sprites

## Summary

Replaced the too-high-resolution job sprites with smaller Final Fantasy Record Keeper-style low-resolution sprite derivatives.

## Files Changed

- `index.html`
- `assets/sprites/ffrk/warrior.png`
- `assets/sprites/ffrk/white-mage.png`
- `assets/sprites/ffrk/black-mage.png`
- `assets/sprites/ffrk/dragoon.png`
- `assets/sprites/ffrk-preview.png`
- `prompts/sprite-generation.md`
- `log/2026-05-25-ffrk-low-res-sprites.md`

## Behavior Changed

- Lobby and battle now load tiny `assets/sprites/ffrk/*.png` sprites.
- Battle token size was reduced to fit the smaller sprite style.
- Lobby Warrior sprite now scales a low-resolution source image for a chunkier pixel-art look.
- Prompt notes now include an explicit low-resolution FFRK-style generation prompt.

## Verification

- Viewed `assets/sprites/ffrk-preview.png` to check low-resolution style.
- Confirmed low-resolution sprite files exist.
- Confirmed all four low-resolution sprite PNGs are 32x32 with transparent corners.
- Parsed inline JavaScript with `new Function`.
- Started local server and confirmed the page plus all four low-resolution sprite PNG URLs returned HTTP 200.

## Notes / Risks

- Current low-resolution sprites are derived from the previous generated sheet, then palette-reduced and resized.
- They are still static idle sprites, not animation frames.
