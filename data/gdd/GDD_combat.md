# GDD: Combat System

Purpose: Turn structure, enemy intent, player planning, timing, targeting, boss design, and core combat counterplay.

Source: split from former root GDD on 2026-05-28.

## 6. Battle System

---

## 6.1 Battle Overview

Each turn follows this structure:

1. Enemy intention reveal
2. Player planning phase
3. Player action resolution
4. Enemy action resolution
5. Slow player action resolution
6. Reaction and end-of-turn effects
7. Next turn

There is no ATB system.

This is a pure turn-based system.

---


---

## 6.2 Enemy Intention Reveal

At the start of each turn, enemies announce their next action.

Displayed information:

- Action name
- Target
- Action category
- Damage type
- Danger level
- Counter hint, if needed

Example:

```text
Iron Ogre
Next Action: Heavy Smash
Target: White Mage
Type: Single Target / Physical / High Damage
Counter Hint: Cover, Provoke, Cure
```

Compact in-battle display:

```text
Heavy Smash → WHM
[Single] [Physical] [High]
```

### Intention Types

| Type | Example | Counterplay |
|---|---|---|
| Single-target attack | Heavy Smash | Cover, Provoke, Shield, Heal |
| AoE attack | Earth Roar | Guard Wall, Cura |
| Tankbuster | Skull Crusher | Tank guard, mitigation |
| Debuff | Crush Armor | Esuna, cleanse |
| Persistent hazard | Cinder Drop | Avoid burning cells over multiple turns |
| Tower soak | Clock Tower | Assign one player to the marked square |
| Bind / prison | Ice Prison | Esuna, Cover, or protect the trapped ally |
| Rotating pattern | Twin Beam | Track the next safe side and pre-position |
| Charge attack | Overclock | Interrupt or prepare mitigation |
| Buff | Rage | Burst damage, dispel in future |
| Interruptible cast | Brutal Cast | Leg Sweep |
| Boss special | Meteor Cast | Specific mechanic response |

---


---

## 6.3 Player Planning Phase

During the planning phase, each character chooses one action.

### Timer

Recommended values:

| Encounter Type | Timer |
|---|---|
| Normal wave | 20 seconds |
| Boss wave | 30 seconds |
| Late-run boss | 25 seconds |

For the local prototype, the timer can be optional at first, then added later.

### Lock-in Rules

In future multiplayer:

- Each player selects one action.
- Their selected action becomes visible to the party.
- A lock/checkmark appears when confirmed.
- When all players lock in, the turn resolves.
- If the timer expires, unselected characters use a default action.

For the local prototype:

- The player selects one action for each of the 4 characters.
- Once all 4 have selected an action, the turn can resolve.

---


---

## 6.4 Action Resolution

The player side generally acts before the enemy.

However, some actions have special timing.

### Action Timing Categories

| Timing | Description | Examples |
|---|---|---|
| Fast | Resolves before other player actions and before enemy actions | Guard, Cover, Provoke, Cure |
| Normal | Standard player action before enemy actions | Strike, Fire, Thrust |
| Enemy | Enemy performs announced action | Heavy Smash, Earth Roar |
| Slow | Resolves after enemy actions | Firaga, Meteor, delayed attacks |
| Reaction | Resolves when a condition is met | Counter, emergency passive |
| EndTurn | Resolves at the end of the turn | Poison, regen, burn |

### Resolution Order

```text
Fast Player Actions
↓
Normal Player Actions
↓
Enemy Actions
↓
Slow Player Actions
↓
Reaction Effects
↓
End Turn Effects
```

This allows important role actions to feel reliable while still enabling riskier delayed cast actions.

### Threat Damage Tuning

Enemy threat hits should be tuned around clear pass / fail counterplay.

- Failed mechanic hit: at least about 60% of the target's max HP before mitigation.
- Guard Wall and similar mitigation reduce this after the threat floor is applied.
- Correctly shared stack mechanics may use a lower per-character damage floor.
- Interruptible casts should be severe when missed and harmless when interrupted.
- Healing should recover from one mistake, but repeated mistakes should still kill.
- New prototype boss mechanics intentionally trend harsher for verification:
  - Unsoaked towers can exceed the normal failed-mechanic floor.
  - Charged raidwide attacks should feel close to wipe-level if not interrupted or mitigated.
  - Persistent hazards should create turn-to-turn pressure, not instant unavoidable kills.

---

### Player Damage Formula

The runtime player-to-enemy damage formula should be readable from CSV data.

Required sheets:

- Player/job info: `data/jobs.csv`
- Player action info: `data/player_actions.csv`
- Enemy info: `data/enemies.csv`

Formula:

```text
raw = action.power + attacker.stat - enemy.defenseStat
modified = raw * positionMultiplier * statusMultiplier
damage = round(max(1, modified))
```

Stat selection:

| Action effect_type | Attacker stat | Enemy defense stat |
|---|---|---|
| physical | attack | defense |
| interrupt, when not interrupting | attack | defense |
| jump landing | attack | defense |
| dot first hit | attack + half magic | defense |
| magic | magic | magic_defense |
| magicWeak | magic | magic_defense |

Position multiplier:

| Position | Multiplier |
|---|---:|
| Front | 1.00 |
| Side | 1.10 |
| Behind | 1.25 |

Status multiplier:

| Status | Multiplier |
|---|---:|
| Focus on next magic action | x1.55 |
| Enemy weakened | x1.12 |
| None | x1.00 |

Manual example:

```text
BLM Fire vs Iron Ogre from side, no status:
action.power = 46
BLM magic = 28
Iron Ogre magic_defense = 12
side multiplier = 1.10

damage = round(max(1, (46 + 28 - 12) * 1.10))
damage = 68
```

Damage-over-time actions can have a separate follow-up tick value. The first hit uses `power + attack + half magic - defense`, then applies position and status multipliers.

---


---

## 6.5 Targeting System

The game uses auto-targeting based on action type.

Manual target selection is avoided for the first prototype to keep mobile input simple.

### Target Rules

| Target Rule | Description | Example Actions |
|---|---|---|
| Self | Targets the user | Focus, Guard |
| LowestHPAlly | Targets the ally with the lowest HP percentage | Cure |
| AllAllies | Targets all party members | Cura, Guard Wall |
| EnemyLeader | Targets the primary enemy | Strike, Fire |
| AllEnemies | Targets all enemies | Firaga |
| EnemyCasting | Targets an enemy currently casting | Leg Sweep |
| EnemyTargetingAlly | Targets enemy currently aiming at an ally | Provoke |
| TargetedAlly | Targets ally currently being attacked | Cover |
| MostDebuffedAlly | Targets ally with the most dangerous debuff | Esuna |

### Action Tooltip Requirement

Because targets are automatic, each action tooltip should clearly describe its targeting logic.

Example:

```text
Cure
Fast / MP 8
Heals the ally with the lowest HP percentage.
```

---


---

## 6.10 Tank Stack Block Mechanics

Some enemy attacks require the party to gather on the same square so the Tank can block the attack.

### Example: Shield Stack

Enemy intention:

```text
Crushing Meteor → White Mage
[Stack] [Magic] [High]
```

Counterplay:

1. Party members move to White Mage’s square.
2. Warrior uses a stack-blocking skill.
3. Damage is shared and reduced.
4. If players are spread out, the target may die.

### Example Tank Action

```text
Phalanx Guard
Timing: Fast
Target Rule: SameSquareAllies
Effect:
Reduces incoming stack damage to all allies on Warrior’s square.
If 3 or more allies are on the same square, grants extra mitigation.
```

Recommended introduction:

- Wave 1: basic movement dodge
- Wave 2: positional bonus
- Boss 1: simple front cleave and stack marker

---


---

## 6.11 Positioning and Auto-Targeting Interaction

Auto-targeting still applies.

Positioning adds conditions to the action result rather than requiring manual target selection.

Examples:

```text
Strike
Target: EnemyLeader
Effect changes based on attacker position:
Front x1.00 / Side x1.10 / Behind x1.25
```

```text
Cure
Target: LowestHPAlly
Some healing actions ignore position, while others only affect characters within a defined range.
```

Current prototype Cure is the high-value emergency heal. It should heal for roughly double the previous single-target heal amount so White Mage can recover one ally after a major failed mechanic.

For the first prototype, action range should stay simple. The main positioning rules should focus on enemy range avoidance, positional damage bonus, and stack-block mechanics.

---


---

## 6.12 Positioning Prototype Scope

For the first positioning prototype, implement:

- 4x4 grid
- Enemy occupying center 2x2
- 12 outer player squares
- Multiple players can stack on the same square
- Step 1 movement
- Black Mage Teleport as an equipped passive skill, plus possible equipment-granted Teleport for other jobs
- Movement slows action timing
- Slow actions disabled after movement
- Enemy-facing based on aggro target
- Front / side / behind damage bonus
- At least 2 enemy range patterns:
  - Front cleave
  - Stack marker
- Grid flashing before enemy attacks
- Character sprites auto-facing left or right

The goal is to test whether movement adds meaningful decisions without making the mobile command UI too complex.

---


---

## 12. Enemy and Boss Design

## 12.1 Enemy Design Philosophy

Enemies should create clear tactical problems.

Each role should have moments where its action is the best answer.

### Threat Types

| Threat | Best Counter |
|---|---|
| Single-target heavy attack | Tank Cover / Provoke |
| AoE attack | Guard Wall / Cura |
| Interruptible cast | Dragoon Leg Sweep |
| Debuff | White Mage Esuna |
| High HP enemy | DPS burst |
| Multiple enemies | Black Mage Firaga |
| Low HP execution attack | Fast heal / Cover |
| Persistent floor hazard | Movement planning / safe tile preservation |
| Tower soak | Assigned player movement and mitigation |
| Bind / prison follow-up | Esuna / Cover / Guard Wall |
| Rotating laser | Pattern tracking and pre-positioning |
| Multi-turn charge | Dragoon interrupt or planned mitigation |

---

## 12.2 Prototype Boss: Iron Ogre

The first prototype boss should test the basic party roles.

### Boss Actions

| Action | Type | Target | Counter |
|---|---|---|---|
| Heavy Smash | Single-target physical high damage | One party member | Cover / Provoke / Cure |
| Earth Roar | AoE physical damage | All allies | Guard Wall / Cura |
| Crush Armor | Debuff | Usually Tank | Esuna |
| Brutal Cast | Interruptible cast | All allies or one target | Leg Sweep |
| Rage | Self-buff | Self | Burst damage before it becomes dangerous |

### Boss Behavior by HP

| HP Range | Behavior |
|---|---|
| 100% to 60% | Heavy Smash, Earth Roar |
| 60% to 30% | Crush Armor, Brutal Cast |
| 30% or below | Rage, increased Heavy Smash frequency |

### Boss Design Goal

Iron Ogre should teach:

- How to read enemy intention
- How Tank protection works
- How Healer recovery works
- How Dragoon interrupt works
- How Black Mage slow casts create risk and reward

## 12.3 Prototype Expansion Bosses

The current prototype route includes six randomized enemy waves. Three new bosses add more raid-like mechanics for verification and tuning.

### Ember Prophet

Theme: fire floor, safe-square preservation, and stack pressure.

| Action | Type | Target / Area | Counter |
|---|---|---|---|
| Cinder Drop | Fire hazard | 3 random outer squares | Avoid marked cells; preserve stack lanes |
| Wildfire Bait | Fire chase | Targeted player square | Bait away from shared safe tiles |
| Gravity Crush | Stack / magic | Targeted player square | Gather to share damage |
| Furnace Roar | Raidwide fire | All players | Guard Wall, Cura, recovery |

### Storm Clockwork

Theme: predictable rotating lasers, tower assignment, and charge punish.

| Action | Type | Target / Area | Counter |
|---|---|---|---|
| Twin Beam | Rotating laser | Top/bottom or left/right outer lanes | Move to next safe side |
| Clock Tower | Tower soak | 1 marked outer square | One living player stands in tower |
| Overclock | Interruptible charge | Boss self-charge | Leg Sweep |
| Overclock Beam | Charged raidwide | All players | Interrupt earlier, or Guard Wall + Cura |

### Plague Chimera

Theme: healer cleanse priority and trapped-player protection.

| Action | Type | Target / Area | Counter |
|---|---|---|---|
| Toxic Needle | Poison debuff | Weak non-tank target | Esuna or heal through |
| Ice Prison | Bind / magic | Random target | Esuna, Cover, or Guard Wall |
| Shatter Lock | Prison punish | Imprisoned target | Cover if prison remains |
| Dragon Voice | Wide edge blast | Top and bottom outer rows | Move to side-middle safe cells |

Design note: these enemies are currently randomized for faster mechanic verification. Final progression should reorder and retune them once their readability is proven.

