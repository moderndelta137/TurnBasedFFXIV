# New Boss Sprites

## Summary

- Generated pixel-art boss sprites for Ember Prophet, Storm Clockwork, and Plague Chimera.
- Removed chroma-key backgrounds and saved transparent PNGs into the enemy sprite folder.
- Wired the three new enemies to their new sprite assets in fallback data and CSV data.

## Files Changed

- `assets/sprites/enemies/ember-prophet.png`
- `assets/sprites/enemies/storm-clockwork.png`
- `assets/sprites/enemies/plague-chimera.png`
- `index.html`
- `data/enemies.csv`
- `log/2026-06-01-new-boss-sprites.md`

## Behavior Changed

- Ember Prophet, Storm Clockwork, and Plague Chimera now display unique boss sprites instead of reused placeholder enemy sprites.

## Verification

- Checked all three processed PNGs have transparent corners and non-empty opaque pixels.
- Parsed the inline `index.html` script with Node `new Function(...)`: pass.
- Confirmed CSV and fallback data reference the new sprite filenames.
- Served the three sprite files through a local Node static server on port 8791: HTTP 200.

## Notes / Risks

- Sprites are generated art and may need manual art pass later for exact house style.
- Source generated images remain in Codex generated image storage; project uses processed transparent PNGs.
