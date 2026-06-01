# GDD: Enemy Pattern Idea Pool

Purpose: Store raw and shaped enemy attack ideas for future encounter design.

Source: player-proposed mechanic foundations on 2026-06-01.

This document is not implementation truth yet. Combat and grid docs still own final runtime rules. Use this as a pattern bank when designing enemies, bosses, CSV actions, and future status rules.

## Design Targets

- Keep patterns readable on a 4x4 mobile grid.
- Favor clear FFXIV-style raid counterplay: dodge, stack, spread, cleanse, cover, interrupt, soak, bait, rotate.
- Combine two simple pressures instead of one unclear complex rule.
- Preserve role moments:
  - WAR controls target, facing, cover, mitigation.
  - WHM cleanses, heals over time, recovers mistakes.
  - BLM chooses risky slow casts around safe windows.
  - DRG interrupts, jumps, exploits movement windows.

## Raw Mechanic Pool

| Mechanic | Core Ask | Useful Counterplay |
|---|---|---|
| Burning ground | Fire attack leaves AoE on squares for a few turns | Avoid stepping into persistent hazards |
| Meteor rain | Random squares get hit across several turns | Read marks, keep moving, avoid corner traps |
| Rotating laser | Two opposite lasers rotate clockwise every turn | Track rotation and pre-position |
| Landslide rocks | Rocks drop onto squares and block movement routes | Plan pathing, avoid being boxed in |
| Poison | DoT debuff on player | Esuna or heal through |
| Ice prison | Player cannot move | Cover, stack support, cleanse/break prison |
| Gather attack | Massive damage shared by players on same square | Stack tightly on marked player |
| Splash attack | Damage falls off with distance from source | Move away from marked source |
| Charge attack | Attack spends multiple turns charging | Burst, interrupt, prepare mitigation |
| Debuffs | Poison, paralysis, damage down, MP drain | Cleanse, adjust plan, spend resources |
| Tower attack | Marked squares need player soaks | Assign players to towers or suffer raidwide |
| Lightning charge | Hits each player and adjacent grids | Spread so AoEs do not overlap |
| Target chase | Repeatedly hits one character's current square | Bait and kite without trapping party |

## Cohesive Pattern Families

### 1. Burning Arena

FFXIV inspiration: Ifrit fire puddles, Eden floor management, P8S-style tile pressure.

Core loop:

1. Boss marks 2 to 3 outer cells with fire.
2. Those cells become burning ground for 2 turns.
3. Standing on or moving into fire causes damage or burn debuff.
4. Later attack asks party to stack or spread while safe cells are reduced.

Good enemy actions:

| Action | Type | Counterplay |
|---|---|---|
| Cinder Drop | Fire / Hazard | Move out before fire persists |
| Wildfire Step | Fire / Chase | Target player baits fire away from common stack cells |
| Furnace Roar | Raidwide / Fire | Guard Wall, then avoid remaining burn tiles |

Design note: This creates "future cost" movement. Do not place too many hazards on 4x4, or planning becomes impossible.

### 2. Falling Sky

FFXIV inspiration: Meteor markers, exaflares, sequential AoE baiting.

Core loop:

1. Meteor shadows appear on random outer cells.
2. They resolve at end of current or next turn.
3. A second wave appears before first wave is fully gone.
4. Players must move through safe lanes.

Good enemy actions:

| Action | Type | Counterplay |
|---|---|---|
| Starfall I | Delayed AoE | Avoid marked cells next turn |
| Starfall II | Delayed AoE / Chain | Track two waves at once |
| Comet Bait | Target Chase | Marked player moves away from stack route |

Design note: Keep targetable cells visible in intent and grid warnings. Random must avoid impossible full coverage.

### 3. Clockwise Execution

FFXIV inspiration: rotating lasers, clock positions, Alexander-style mechanical reads.

Core loop:

1. Boss fires two opposite laser lanes.
2. Lanes rotate clockwise each turn.
3. After 3 rotations, boss performs a raidwide or stack check.
4. Good play prepositions before next rotation.

Good enemy actions:

| Action | Type | Counterplay |
|---|---|---|
| Twin Laser: East-West | Line AoE | Stand north/south safe cells |
| Twin Laser: North-South | Line AoE | Stand east/west safe cells |
| Overclock Beam | Charge / Pattern | Interrupt or prepare final safe zone |

Design note: Rotation should be predictable. Surprise rotation feels unfair on mobile.

### 4. Broken Ground

FFXIV inspiration: Titan landslides, falling rocks, arena denial.

Core loop:

1. Landslide marks lane or cells.
2. Rocks fall after hit and block movement for 1 to 2 turns.
3. Blocked squares cannot be entered or crossed.
4. Follow-up attack punishes players trapped on wrong side.

Good enemy actions:

| Action | Type | Counterplay |
|---|---|---|
| Landslide | Line / Physical | Dodge lane |
| Rockfall | Terrain Block | Avoid blocked routes |
| Quake Split | Side Cleave | Move before rocks restrict path |

Design note: Grid is small. Use 1 or 2 blockers max unless boss explicitly teaches trap management.

### 5. Plague And Prison

FFXIV inspiration: cleansable debuffs, binds, healer triage.

Core loop:

1. Boss poisons or binds one player.
2. Next attack threatens that player.
3. WHM can cleanse, heal over time, or WAR can cover.
4. If ignored, repeated hits become lethal.

Good enemy actions:

| Action | Type | Counterplay |
|---|---|---|
| Toxic Needle | Debuff / DoT | Esuna or heal through |
| Ice Prison | Bind | Cleanse, Cover, or stack support |
| Shatter Lock | Targeted Kill | Protect immobilized target |

Design note: Ice prison should create a party problem, not remove player agency for too long. 1 turn bind is safest first implementation.

### 6. Soak And Scatter

FFXIV inspiration: stack markers, spread markers, proximity damage, lightning spreads.

Core loop:

1. Boss alternates gather attack and spread attack.
2. Gather requires same-square sharing.
3. Lightning spread hits adjacent cells around each player.
4. Splash source rewards moving away from danger origin.

Good enemy actions:

| Action | Type | Counterplay |
|---|---|---|
| Gravity Crush | Stack / Magic | Gather on marked player |
| Chain Lightning | Spread / Lightning | Separate by at least 1 cell |
| Splash Flare | Proximity / Fire | Move far from source cell |

Design note: Never combine gather and spread on same resolve unless encounter has clearly taught the pair.

### 7. Tower Duty

FFXIV inspiration: soak towers, missed tower raidwide, role assignment.

Core loop:

1. Boss marks 1 to 3 tower cells.
2. Each tower needs at least one living player standing there.
3. Soaked tower deals moderate damage to occupant.
4. Unsoaked tower explodes as massive party AoE.

Good enemy actions:

| Action | Type | Counterplay |
|---|---|---|
| Arcane Tower | Soak | Assign one player to marked cell |
| Double Tower | Multi-soak | Split party while keeping healer range simple |
| Failed Seal | Raidwide Punish | Guard Wall cannot fully save repeated misses |

Design note: First tower pattern should use 1 tower. Later bosses can use 2. 3 towers may be late-game only.

### 8. Charged Doom

FFXIV inspiration: long casts, enrage mini-checks, telegraphed tankbusters.

Core loop:

1. Boss begins charging over multiple turns.
2. Intent shows remaining charge turns.
3. Party can interrupt, burst, mitigate, or prepare recovery.
4. If ignored, boss releases severe attack.

Good enemy actions:

| Action | Type | Counterplay |
|---|---|---|
| Doom Charge | Charge | Burst during safe window |
| Doom Release | Raidwide / High | Interrupt before or Guard Wall + Cura after |
| Mana Siphon | Debuff / MP | Cleanse or conserve resources |

Design note: Charge creates safe DPS windows for BLM slow casts.

## Candidate Boss Concepts

### Ember Prophet

Theme: Fire prophet who burns future safe zones.

Main lesson: persistent hazards plus stack/spread decisions.

Pattern script:

1. Cinder Drop leaves 3 burning cells.
2. Chain Lightning forces spread around burn.
3. Gravity Crush forces stack on remaining safe square.
4. Furnace Roar tests mitigation.

### Storm Clockwork

Theme: Magitek machine with rotating beam logic.

Main lesson: predictable rotation and tower duties.

Pattern script:

1. Twin Laser starts east-west.
2. Laser rotates north-south.
3. Arcane Tower marks one safe cell.
4. Overclock Beam charges for 2 turns.

### Stonewarden Titan

Theme: Titan-like landslide and rock blocker boss.

Main lesson: blocked movement changes future turns.

Pattern script:

1. Landslide marks side lane.
2. Rockfall blocks 1 to 2 cells.
3. Target Chase baits attacks around rocks.
4. Quake Split punishes trapped side.

### Plague Chimera

Theme: Poison, prison, and healer triage.

Main lesson: cleanse vs heal vs cover decisions.

Pattern script:

1. Toxic Needle poisons lowest HP non-tank.
2. Ice Prison binds a random DPS.
3. Shatter Lock targets imprisoned player.
4. Dragon Voice outer-ring hit forces movement after bind clears.

## First Implementation Candidates

Lowest-risk mechanics to add first:

1. Poison debuff.
2. Gather/stack attack variant.
3. Lightning spread attack.
4. Rotating laser using predictable turn state.
5. Single tower soak.

Higher-risk mechanics:

1. Persistent burning ground.
2. Movement-blocking rocks.
3. Multi-turn meteor queue.
4. Ice prison with cover targeting.

Risk reason: these need new state, UI warnings, and cleanup timing. Implement them only after one simple debuff/soak pattern proves readable.

## Prototype Implementation: 2026-06-01

Implemented first pass enemies:

| Enemy | Pattern Families | Runtime Notes |
|---|---|---|
| Ember Prophet | Burning Arena, Soak And Scatter | Adds persistent burning ground, wildfire bait, stack damage, and fire raidwide |
| Storm Clockwork | Clockwise Execution, Tower Duty, Charged Doom | Adds rotating twin beams, one-player tower soak, interruptible charge, and charged raidwide |
| Plague Chimera | Plague And Prison | Adds poison, Ice Prison movement lock, prison follow-up target, and wide edge blast |

Implementation constraints:

- Uses generated bespoke enemy sprite assets for Ember Prophet, Storm Clockwork, and Plague Chimera.
- Keeps tower count to 1 for first readability pass.
- Ice Prison binds for one planning turn after application unless cleansed.
- Burning ground persists briefly and damages players who stand on it.
- Storm Clockwork rotating beam alternates between top/bottom and left/right lanes.
- Current threat tuning makes the new bosses intentionally harsher: Cinder Drop marks 3 cells, Twin Beam and Dragon Voice are High danger, missed towers have a stronger raidwide punish, and Overclock Beam is near wipe-level without interrupt or mitigation.
