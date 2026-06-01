# 2026-05-25 Character Sprite Assets

## Summary

Generated Final Fantasy-style 2D pixel character sprites for the four current jobs and replaced CSS placeholder character art.

## Files Changed

- `index.html`
- `assets/sprites/job-sprites-source.png`
- `assets/sprites/job-sprites-sheet.png`
- `assets/sprites/warrior.png`
- `assets/sprites/white-mage.png`
- `assets/sprites/black-mage.png`
- `assets/sprites/dragoon.png`
- `prompts/sprite-generation.md`
- `log/2026-05-25-character-sprite-assets.md`

## Behavior Changed

- Lobby Warrior display now uses the generated Warrior sprite.
- Lobby party slot now uses the generated Warrior sprite thumbnail.
- Battle tokens now use generated job sprites for WAR, WHM, BLM, and DRG.
- Prompt used for sprite generation is saved under `prompts/`.

## Verification

- Confirmed generated source sheet exists.
- Removed chroma-key background into transparent sprite sheet.
- Cropped four transparent job sprite PNGs.
- Parsed inline JavaScript with `new Function`.
- Started local server and confirmed the page plus all four sprite PNG URLs returned HTTP 200.

## Notes / Risks

- Sprites are static front-facing images, not animation sheets.
- Battle tokens scale down large source sprites through CSS.
- Future animation should generate direction/action frames using the saved prompt style.
