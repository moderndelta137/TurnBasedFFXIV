# GDD: Grid and Positioning

Purpose: 4x4 battlefield, movement, facing, range warnings, and remaining positioning decisions.

Source: split from former root GDD on 2026-05-28.

## 6.6 Grid Positioning System

Positioning is a new core battle component.

The battlefield is a 4x4 grid.

- The enemy always occupies the central 2x2 area.
- Player characters can stand on any of the 12 outer squares.
- Player characters cannot enter the enemy’s central 2x2 area.
- Multiple player characters can freely stack on the same outer square with no occupancy limit.
- Horizontal opposite-side squares are considered connected across the enemy.
- Character sprites automatically face the correct horizontal direction.

### Grid Layout

```text
┌────┬────┬────┬────┐
│ P  │ P  │ P  │ P  │
├────┼────┼────┼────┤
│ P  │ EN │ EN │ P  │
├────┼────┼────┼────┤
│ P  │ EN │ EN │ P  │
├────┼────┼────┼────┤
│ P  │ P  │ P  │ P  │
└────┴────┴────┴────┘
```

`P` = player-available outer square  
`EN` = enemy-occupied center square

### Coordinate Draft

```text
(0,0) (1,0) (2,0) (3,0)
(0,1) (1,1) (2,1) (3,1)
(0,2) (1,2) (2,2) (3,2)
(0,3) (1,3) (2,3) (3,3)
```

Enemy-occupied center cells:

```text
(1,1), (2,1), (1,2), (2,2)
```

Player-available cells:

```text
Top row:    (0,0), (1,0), (2,0), (3,0)
Left side:  (0,1), (0,2)
Right side: (3,1), (3,2)
Bottom row: (0,3), (1,3), (2,3), (3,3)
```

Current prototype party starting cells:

```text
WAR: (3,0)
WHM: (3,1)
BLM: (3,2)
DRG: (3,3)
```

These starts place the whole party on the right edge. They may stack or move later, but reset/start positions should use this right-column line unless a future encounter explicitly overrides it.

### Opposite Side Connection

Player characters can move to the opposite side across the enemy without needing to move around the outer ring.

This means the battlefield treats horizontal opposite-side outer squares as connected movement destinations.

Example direct opposite connections:

| From | Connected Opposite |
|---|---|
| Left side squares | Right side squares across the enemy |
| Right side squares | Left side squares across the enemy |

The enemy still occupies the center 2x2 area, and players never enter those center cells. The connection is an abstraction that allows characters to reposition across the enemy quickly.

Vertical edge wrapping is not allowed. Top cells and bottom cells are normal grid distance apart. For example, `(0,0)` to `(0,3)` and `(3,0)` to `(3,3)` are 3 spaces apart, not adjacent.

Implementation note:

> Movement adjacency should include normal neighboring outer squares and valid horizontal opposite-side connections across the enemy. It should not include top-to-bottom or bottom-to-top wrapping.

This supports the intended “move across the enemy” behavior without requiring pathfinding through the blocked center.

---


---

## 6.7 Movement System

During the planning phase, each character may move before performing their selected action.

Movement ability is usually determined by job, but can be modified by equipment.

### Movement Types

| Movement Type | Description | Example |
|---|---|---|
| Step 1 | Move 1 adjacent square along the outer ring | Warrior |
| Step 2 | Move up to 2 adjacent squares along the outer ring | Dragoon / Ninja |
| No Move | Cannot move this turn | Heavy armor / rooted status |
| Teleport | Move to any available outer square | Mage movement or equipment |
| Conditional Move | Movement changes based on action or status | Jump, Shadow Step |

### Default Movement Draft

| Job | Default Movement |
|---|---|
| Warrior | Step 1 |
| White Mage | Step 1 |
| Black Mage | Step 1 by default; can gain Teleport through an equipped passive skill |
| Dragoon | Step 2 |

Black Mage can unlock a Teleport passive skill through job progression. The player must equip that passive for Teleport movement to take effect.

Other jobs may also gain Teleport or special movement through equipment.

### Movement and Action Timing Cost

Moving makes the selected action slower.

| Original Action Timing | Timing After Moving |
|---|---|
| Fast | Normal |
| Normal | Slow |
| Slow | Cannot be used after moving |
| Reaction | Usually cannot be manually combined with movement |
| EndTurn | No change unless action-specific |

Important rules:

- A Fast action becomes Normal after movement.
- A normal-speed action becomes a Slow action if used after movement.
- A slow action cannot be used after movement.
- Fast defensive actions downgraded to Normal can still protect because Normal resolves before enemy actions.
- Normal defensive actions downgraded to Slow may fail to protect because Slow resolves after enemy actions.
- Invalid actions should be disabled after movement is selected.

Examples:

```text
Black Mage selects Firaga.
Firaga is Slow.
If Black Mage also moves this turn, Firaga becomes unavailable.
```

```text
Dragoon moves 2 squares and uses Dragon Dive.
Dragon Dive is Normal.
After moving, it becomes Slow and resolves after the enemy action.
```

### Movement UI

For the local prototype:

1. Tap a character panel.
2. Valid destination squares flash.
3. Tap a destination square.
4. Select one skill.
5. The character panel shows both selected movement and action.

Battlefield sprites are visual markers only in the current prototype. Enemy and player sprites should not block grid-cell clicks. Clicking a teammate sprite on the battlefield should not select that teammate or consume movement input; character selection belongs to the command panels.

Example panel state:

```text
[DRG] Vair
HP ███████   TP ████
Move: +2 clockwise
[Thrust][Jump][DIVE✓ Slow][Sweep]
```

---


---

## 6.8 Facing, Aggro, and Positional Damage

Enemies and characters only face left or right.

They do not face up or down.

### Enemy Facing

The enemy always faces the horizontal direction of the character with aggro.

If the aggro target is on the left side, the enemy faces left.  
If the aggro target is on the right side, the enemy faces right.

For top or bottom row positions, facing is determined by x-position:

- x = 0 or 1 → enemy faces left
- x = 2 or 3 → enemy faces right

### Player Facing

Player sprites automatically face the enemy.

Suggested rule:

- Characters on the left side face right.
- Characters on the right side face left.
- Characters on top or bottom face toward the closest horizontal side of the enemy.

### Positional Damage Bonus

Attacking from behind or from the side grants a damage bonus.

Final rule:

If enemy faces right:

- Right-side attackers are in front.
- Left-side attackers are behind.
- Top and bottom attackers are always side attackers.

If enemy faces left:

- Left-side attackers are in front.
- Right-side attackers are behind.
- Top and bottom attackers are always side attackers.

Draft values:

| Position | Damage Modifier |
|---|---|
| Front | x1.00 |
| Side | x1.10 |
| Behind | x1.25 |

These values are placeholders for prototype tuning.

### Aggro Implication

The Tank can control enemy facing by holding aggro.

Example:

- Tank holds aggro on the right side.
- Enemy faces right.
- DPS move to the left side for behind attacks.
- Healer stays outside dangerous range.

---


---

## 6.9 Grid-Based Enemy Attack Ranges

Some enemy attacks have grid range patterns.

Before the enemy acts, affected squares flash on the battlefield.

A character standing in the highlighted area when the enemy action resolves is hit.  
A character outside the highlighted area avoids the attack completely.

When movement and enemy warning highlights overlap during planning, the movement border must remain readable above the warning color. Enemy danger can own the cell fill, but valid movement needs a distinct border or outline layer.

During action resolution, hide movement-choice borders and selected-destination highlights. Enemy warnings may remain visible for readability.

### Range Attack Types

| Range Type | Description |
|---|---|
| Targeted Hit | Always hits the target regardless of position |
| Melee Arc | Hits nearby squares on the enemy-facing side |
| Side Cleave | Hits left or right side depending on enemy facing |
| Line | Hits a straight row or column |
| Ring | Hits all outer squares or selected ring segments |
| AoE All | Hits all characters regardless of position |
| Stack Marker | Damage must be shared by characters on the same square |
| Safe Zone Attack | Most squares are dangerous, specific squares are safe |

### Example: Front Cleave

If the enemy faces right:

```text
Safe  Safe  Hit   Hit
Safe  EN    EN    Hit
Safe  EN    EN    Hit
Safe  Safe  Hit   Hit
```

If the enemy faces left:

```text
Hit   Hit   Safe  Safe
Hit   EN    EN    Safe
Hit   EN    EN    Safe
Hit   Hit   Safe  Safe
```

### Example: Full AoE

```text
Hit   Hit   Hit   Hit
Hit   EN    EN    Hit
Hit   EN    EN    Hit
Hit   Hit   Hit   Hit
```

### Example: Stack Attack

The boss targets one character with a stack marker.

All characters on the same square share the damage.

The Tank may need to move to the target’s square and use a protection skill.

---


---

## 22. Positioning System Decisions and Remaining Questions

### 22.1 Multiple Characters on One Square

Decision:

> Multiple characters can stack freely on one square.

There is no occupancy limit for player characters on outer squares.

This supports stack markers, tank protection skills, and coordinated defensive positioning.

### 22.2 Opposite Side Movement Connection

Decision:

> Players can move horizontally to the opposite side across the enemy without needing to go around it.

This is not only outer-ring movement. The grid should allow valid left-side to right-side and right-side to left-side movement connections across the center enemy area.

The enemy’s center 2x2 cells remain blocked, but movement can abstractly cross over them.

Top-to-bottom and bottom-to-top edge wrapping is not allowed. Top and bottom cells remain 3 spaces apart when they share the same x coordinate.

### 22.3 Normal Actions After Movement

Decision:

> Normal actions after movement are treated exactly like Slow actions for now.

This keeps timing simple for the prototype.

Timing after movement:

| Original Timing | After Movement |
|---|---|
| Fast | Normal |
| Normal | Slow |
| Slow | Cannot use |

### 22.4 Defensive Actions After Movement

Decision:

> Fast defensive actions are downgraded to Normal after movement, but can still protect against enemy attacks.

Example:

- Warrior moves to an ally’s square and uses Cover.
- Cover is Fast.
- Movement changes Cover to Normal.
- Because Normal still resolves before the enemy, Cover can still protect.

However:

> Normal defensive actions are downgraded to Slow after movement and may not protect against enemy attacks in time.

This creates an important distinction between emergency defensive tools and slower defensive tools.

### 22.5 Healing Position Range

Decision:

> Some healing actions have range, and some healing actions do not.

Examples:

| Healing Type | Range Rule |
|---|---|
| Cure | Can be global for simple single-target healing |
| Cura | May heal all allies globally or in a wide range, depending on tuning |
| Healing Field | Only heals characters on the same square or nearby squares |
| Prayer / Regen | Can be global or target-rule based |
| Emergency Heal | Usually global for reliability |

This allows positioning to matter for some healer builds without making every recovery action difficult to use.

### 22.6 Melee Attack Reach

Decision:

> Melee attacks can hit the center enemy from any of the 12 outer squares.

Position affects damage bonus and enemy range interaction, but it does not prevent melee characters from attacking.

This keeps the 4x4 grid simple and avoids frustrating “out of range” failures for basic melee actions.

### 22.7 Top and Bottom Positional Classification

Decision:

> Top and bottom positions always count as side attacks.

They do not become front or behind based on x-position.

This keeps positional damage simple and readable:

| Enemy Facing | Front | Behind | Side |
|---|---|---|---|
| Facing Right | Right side | Left side | Top / Bottom |
| Facing Left | Left side | Right side | Top / Bottom |

### 22.8 Black Mage Teleport

Decision:

> Teleport is not a default Black Mage movement ability.

Black Mage can unlock Teleport as a passive skill through job progression. The player must equip that passive for Teleport movement to take effect.

Other jobs can also gain Teleport or similar special movement through equipment.

This creates build choice and prevents Teleport from being a free advantage in every Black Mage loadout.
