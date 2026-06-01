# Character Sprite Generation Prompts

## FFRK-Style Low-Resolution Prompt

Use this prompt for future low-resolution job sprites. It targets the smaller Final Fantasy Record Keeper-like style from the current revision.

```text
Use case: stylized-concept
Asset type: tiny 2D JRPG pixel character sprites for a mobile turn-based RPG.
Primary request: Create four separate tiny chibi pixel sprites in a Final Fantasy Record Keeper-inspired style, one per job: Warrior tank with sword and shield, White Mage healer with white/red robe and staff, Black Mage ranged caster with dark robe and wide wizard hat, Dragoon melee DPS with spear and dragon-like armor.
Sprite constraints: each character must read clearly at 24x32 to 32x32 pixels. Use low-resolution pixel art, chunky readable silhouettes, limited palette, hard 1-pixel dark outline, no painterly detail, no anti-aliased high-resolution rendering, no oversized illustration proportions.
Composition: arrange the four sprites in one row, same scale, full body, three-quarter front stance, standing idle pose, generous spacing, no labels, no UI.
Background: perfectly flat solid #00ff00 chroma-key background for background removal. The background must be one uniform color with no shadows, gradients, texture, reflections, floor plane, or lighting variation. Do not use #00ff00 anywhere in the sprites. No cast shadow, no contact shadow, no watermark, no labels.
Style consistency: all four sprites should look like they belong to the same 16-bit mobile RPG, same pixel density, same outline weight, same lighting direction, same palette intensity.
```

## Original High-Resolution Source Prompt

Use this prompt when regenerating the current job sprite sheet.

```text
Use case: stylized-concept
Asset type: 2D pixel art game character sprite sheet for a mobile fantasy turn-based RPG prototype.
Primary request: Create four separate full-body 2D Final Fantasy-inspired pixel art character sprites, one per job: Warrior tank with sword and shield, White Mage healer with white/red robe and staff, Black Mage ranged caster with dark robe wide hat and fire/ice magic detail, Dragoon melee DPS with spear and dragon-like armor. Style must be classic 16-bit/32-bit JRPG pixel art, crisp readable silhouette, front-facing three-quarter stance, heroic proportions, high-contrast fantasy colors, no text.
Composition: Arrange in one row, four isolated sprites evenly spaced, same scale, each standing upright. Each sprite should fit in its own invisible 128x128 cell with generous padding. No UI, no background scene.
Background: perfectly flat solid #00ff00 chroma-key background for background removal. The background must be one uniform color with no shadows, gradients, texture, reflections, floor plane, or lighting variation. Do not use #00ff00 anywhere in the sprites. No cast shadow, no contact shadow, no watermark, no labels.
Style consistency: all four sprites should look like they belong to the same game, same pixel density, same outline weight, same lighting direction, same palette intensity.
```

## Current Output Files

- `assets/sprites/job-sprites-source.png`
- `assets/sprites/job-sprites-sheet.png`
- `assets/sprites/warrior.png`
- `assets/sprites/white-mage.png`
- `assets/sprites/black-mage.png`
- `assets/sprites/dragoon.png`
- `assets/sprites/ffrk/warrior.png`
- `assets/sprites/ffrk/white-mage.png`
- `assets/sprites/ffrk/black-mage.png`
- `assets/sprites/ffrk/dragoon.png`
- `assets/sprites/ffrk-preview.png`
- `assets/sprites/enemies/enemy-sprites-source.png`
- `assets/sprites/enemies/enemy-sprites-sheet.png`
- `assets/sprites/enemies/boss-sprites-source.png`
- `assets/sprites/enemies/boss-sprites-sheet.png`
- `assets/sprites/enemies/goblin-raider.png`
- `assets/sprites/enemies/crystal-knight.png`
- `assets/sprites/enemies/iron-ogre.png`

## Post-Processing Notes

- Source image generated with a flat green chroma-key background.
- Chroma key removed with `remove_chroma_key.py`.
- Initial individual job sprites were cropped from the transparent sheet.
- Current in-game sprites use 32x32 low-resolution FFRK-style derivatives under `assets/sprites/ffrk/`.
- Keep all future sprites front-facing three-quarter stance unless animation work requires directional frames.

## Enemy Sprite Prompt

Use this prompt for enemy sprites that match current party sprite density.

```text
Use case: stylized-concept
Asset type: enemy sprite sheet for a mobile 2D JRPG turn-based battle game.
Primary request: Create three enemy sprites in a Final Fantasy Record Keeper-inspired tiny pixel art style, same pixel density and palette feel as 24x32 to 32x32 chibi party sprites, but enemies can be larger. Enemies: Goblin Raider, Crystal Knight, Iron Ogre.
Sprite constraints: low-resolution pixel art, chunky readable silhouettes, limited palette, hard 1-pixel dark outline, no painterly high-resolution rendering, no anti-aliased illustration style. Goblin Raider should read around 40x40 pixels, Crystal Knight around 48x48 pixels, Iron Ogre boss around 64x64 pixels. Same lighting direction and outline weight as a classic 16-bit mobile RPG.
Design: Goblin Raider = small green goblin with dagger and rough leather. Crystal Knight = armored humanoid enemy with blue crystal armor and sword. Iron Ogre = bulky purple/iron ogre boss with horns and heavy fists.
Composition: Arrange the three sprites in one row, isolated, same baseline, generous spacing, no labels, no UI.
Background: perfectly flat solid #00ff00 chroma-key background for background removal. The background must be one uniform color with no shadows, gradients, texture, reflections, floor plane, or lighting variation. Do not use #00ff00 anywhere in the sprites. No cast shadow, no contact shadow, no watermark, no labels.
Style consistency: all three enemies should look like they belong to the same game as tiny FFRK-style party sprites, same pixel density, same outline weight, same palette intensity.
```

## Large Boss Sprite Prompt

Use this prompt when enemy sprites need FF5-style boss size and menace while keeping party sprite pixel density.

```text
Use the attached FF5 boss sprite reference images only for layout language, scale, pixel density, and intimidating boss presence. Do not copy any exact character design.

Asset type: three large 2D JRPG boss sprites for a mobile turn-based RPG, one-row sprite sheet.

Create three original enemy boss sprites in a classic Final Fantasy V / 16-bit JRPG boss pixel art style. They must be much larger and more intimidating than tiny player sprites, while keeping the same visible pixel density and hard pixel clusters. No chibi proportions. Large readable silhouettes, dramatic stance, complex armor and weapons, boss-size presence.

Sprites:
1. Goblin Raider boss: goblin warlord, hunched but tall, green skin, jagged dagger or cleaver, spiked leather/iron armor, trophy bones, aggressive face.
2. Crystal Knight boss: tall armored humanoid knight, blue crystal plate armor, horned crystal helm, large shield and crystalline sword, elegant dangerous stance.
3. Iron Ogre boss: massive purple-and-dark-iron ogre, horned helm, heavy fists/gauntlets, skull/metal belt, broad shoulders, raid-boss scale.

Pixel constraints:
- Same pixel density as 16-bit FF boss sprites, larger canvas than party characters.
- Goblin boss should read around 96x112 pixels after downsample.
- Crystal Knight boss should read around 128x144 pixels after downsample.
- Iron Ogre boss should read around 144x144 pixels after downsample.
- Crisp pixel art, limited palette, black/dark 1-2 pixel outline, no painterly smoothness, no anti-aliased illustration, no high-res rendered look.
- Front-facing or three-quarter front battle stance, same baseline, full body visible.

Composition: arrange all three sprites in one horizontal row with generous spacing, no labels, no UI, no ground shadows.

Background: perfectly flat solid #00ff00 chroma-key background. The background must be one uniform color with no shadows, gradients, texture, reflections, floor plane, or lighting variation. Do not use #00ff00 anywhere in sprites.

Style consistency: all three sprites belong to the same 16-bit FF boss sprite set and match current party sprite pixel density, but are much bigger and more threatening.
```
