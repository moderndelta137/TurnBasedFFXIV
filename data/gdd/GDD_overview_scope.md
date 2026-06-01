# GDD: Overview and Scope

Purpose: Vision, pillars, platform, multiplayer foundation, MVP boundaries, risks, and success criteria.

Source: split from former root GDD on 2026-05-28.

# GDD: Mobile Co-op Turn-Based RPG Prototype

## 1. High Concept

A mobile-first, 2D pixel-art, multiplayer-foundation turn-based RPG inspired by classic Final Fantasy mobile battle presentation and FF Record Keeper-style pixel visuals, combined with FF14-inspired party roles and job identity.

The first prototype is a **local simulated multiplayer** HTML game where one player controls a full 4-character party. The long-term goal is to support up to 4 online players forming a party, selecting jobs, preparing action loadouts, and challenging wave-based enemy encounters together.

The core gameplay is:

> Read enemy intentions, coordinate the party's limited actions and positions, survive the turn, defeat increasingly dangerous waves, then decide whether to retreat with rewards or continue for higher risk and better loot.

---

## 2. Design Pillars

### 2.1 Cooperative Role-Based Combat

Each character has a clear role, similar to FF14:

- Tank
- Healer
- Melee DPS
- Ranged DPS

Each role should have situations where it is uniquely valuable.

### 2.2 Enemy Intention Reading

Before each turn, enemies reveal what they are going to do.

Players can see:

- Enemy action name
- Target
- Attack type
- Danger level
- Whether the action is interruptible
- Whether it is single-target, AoE, buff, debuff, or special mechanic

The main tactical challenge is choosing the correct party actions before the enemy acts.

Current prototype tuning should make failed counterplay dangerous. If a character eats the wrong threat hit, such as staying inside a warned range or leaving a DPS exposed to a single-target strike, the hit should deal at least about 60% of that character's max HP before mitigation. Correct actions such as movement, Cover, Guard Wall, stack grouping, interrupt, or healing should be required to stay stable.

### 2.3 Grid Positioning and Movement

The battlefield is a compact 4x4 grid. The enemy occupies the central 2x2 area, while the 4 player characters can stand on any of the 12 outer squares.

During the player planning phase, each character may choose both:

- One action
- One movement destination

Movement destination highlights are planning-only UI. They should not remain visible during player or enemy action resolution.

Positioning affects:

- Whether the character is inside or outside enemy attack range
- Whether the character attacks from the front, side, or behind
- Whether the Tank can protect allies by gathering them into the same square
- How enemy-facing and aggro influence damage opportunities

Movement has a timing cost. If a character moves before acting, their action becomes slower.

### 2.4 Simple Mobile Command Input

Each character has only 4 available actions during battle.

This keeps the mobile UI readable and makes every loadout decision meaningful.

### 2.5 Risk and Reward Run Structure

The party clears waves of enemies. Every 3rd wave is a boss.

After each boss, the party votes to either:

- Retreat and keep all rewards
- Continue and face stronger waves for better rewards

If the party is defeated:

- EXP is kept
- Run-gained equipment is lost
- Half of run-gained gold is lost

If one party member is KO during a wave:

- Living party members continue choosing movement and actions.
- KO party members do not block turn readiness.
- KO party members revive with 10% max HP after the battle is won.

### 2.6 Multiplayer Foundation First

The first version is local-only, but the internal structure should treat each character as a separate player slot so that online multiplayer can be added later.

---


---

## 3. Target Platform

### Primary Platform

- Mobile browser
- Portrait orientation
- HTML / CSS / JavaScript prototype

### Future Platforms

- Mobile web with real-time multiplayer
- Possible app wrapper
- Possible desktop browser support

---


---

## 15. Multiplayer Foundation

The first prototype is local-only.

However, the code should treat each character as an independent player slot.

### Player Slot Model

```text
PlayerSlot 1 → Warrior
PlayerSlot 2 → White Mage
PlayerSlot 3 → Black Mage
PlayerSlot 4 → Dragoon
```

Each player slot should own:

- Character name
- Job
- Level
- Current HP
- Current MP / TP
- Equipment
- Action loadout
- Selected action
- Lock-in state
- Stamp interactions in future

### Future Online Replacement

In the local prototype:

```text
PlayerSlot input = local click input
```

In the online version:

```text
PlayerSlot input = network player input
```

The battle system should not care where the input came from.

---


---

## 17. MVP Scope

The first HTML prototype should include:

- Portrait mobile layout
- FFRK-style pixel battle presentation
- Local simulated 4-player party
- 4 jobs:
  - Warrior
  - White Mage
  - Black Mage
  - Dragoon
- 8 action records per job
- 4 equipped battle actions per character
- CSV-backed action, equipment, and passive pools
- Loadout job sprite picker
- Local browser autosave for current job, options, gold/EXP, and per-job loadouts
- Enemy intention preview
- Pure turn-based combat
- Fast / Normal / Slow action timing
- Auto-targeting
- 4x4 positioning grid
- Enemy fixed in center 2x2 area
- Player movement on 12 outer squares
- Movement timing cost
- Positional damage bonus
- Grid-based enemy range warnings
- Stack-block mechanic prototype
- Equal 4-character command panels
- Stamp panel UI
- 3-wave run:
  - Wave 1: Normal enemy
  - Wave 2: Elite enemy
  - Wave 3: Iron Ogre boss
- Basic EXP / gold reward display
- Boss clear retreat / continue vote mock UI

---


---

## 18. Out of Scope for First Prototype

The first prototype should not include:

- Real online multiplayer
- Account system
- Permanent cloud save
- Account-based cross-device save
- Large equipment database
- Many jobs
- Many bosses
- Chat system
- Complex procedural generation
- Advanced animation system
- Real matchmaking
- Monetization systems

These can be added after the core combat loop is proven fun.

---


---

## 19. Main Design Risks

### 19.1 Command Window Density

Showing 4 full character panels plus skill icons plus stamps may become crowded on a phone.

Mitigation:

- Use compact pixel UI.
- Use icons first, text on tooltip.
- Keep skill names short.
- Use long press for detailed tooltips.
- Use color and icons for timing and resource cost.

### 19.2 Tank Gameplay Could Become Repetitive

If every danger is solved by Cover or Provoke, Tank play may become boring.

Mitigation:

- Include AoE attacks that require party mitigation.
- Include debuffs that require healer cleanse.
- Include casts that require DPS interrupt.
- Include attacks that punish incorrect provoke timing.

### 19.3 Healer Could Become Too Reactive

If healing is always the best action, healer choices may become shallow.

Mitigation:

- Add MP pressure.
- Make overhealing inefficient.
- Add cleanse timing.
- Add shield/prevention actions in future.
- Add windows where healer can safely attack.

### 19.4 Slow Casts Could Feel Bad

Slow magic resolves after enemy actions, so Black Mage may feel punished.

Mitigation:

- Make Slow spells meaningfully stronger.
- Let Focus amplify them.
- Create boss openings where Slow spells are safe.
- Use visual warnings so the risk is clear.

### 19.5 Enemy Intentions Must Be Readable

The game depends on players understanding enemy intent quickly.

Mitigation:

- Use consistent icons.
- Use short text.
- Use color-coded danger levels.
- Use target arrows.
- Put detailed explanation behind tap / long press.

### 19.6 Positioning Could Overload the Mobile UI

Movement adds another decision layer on top of action selection.

Mitigation:

- Keep the grid only 4x4.
- Keep enemy in the center.
- Restrict players to 12 outer squares.
- Use flashing range previews.
- Let movement selection happen directly on the battle grid.
- Show selected movement compactly inside each character panel.

### 19.7 Movement Cost Could Make Actions Feel Unresponsive

If moving often delays actions, players may feel punished for using the positioning system.

Mitigation:

- Make range dodging and positional bonuses valuable enough.
- Keep Fast actions useful after movement.
- Clearly show when an action becomes delayed.
- Disable invalid Slow actions immediately after movement.
- Add equipment that improves movement or reduces movement penalty.

---


---

## 20. Prototype Success Criteria

The prototype is successful if:

- The player can understand enemy intention without reading long text.
- The player can choose actions and movement for 4 characters quickly on mobile.
- The 4x4 grid makes positioning readable rather than confusing.
- Tank, Healer, Melee DPS, and Ranged DPS each feel useful.
- The timing difference between Fast, Normal, and Slow actions is clear.
- The movement timing cost is clear.
- Enemy range previews are readable.
- Positional attacks and stack mechanics create meaningful tactical decisions.
- The boss creates at least a few meaningful tactical decisions.
- The command window feels like a party coordination board.
- The player wants to try “one more wave” after clearing the boss.

---


---

## 21. Recommended Next Step

Build a single-file HTML prototype with:

1. Static pixel-style UI
2. Four equal character command panels
3. One enemy with visible intention
4. 4x4 positioning grid
5. Movement selection
6. Action selection and lock-in
7. Turn resolution
8. Grid range warnings
9. Simple VFX and damage numbers
10. Iron Ogre boss test encounter

The first goal is not content volume.

The first goal is to prove that:

> A mobile command-board UI plus enemy-intention turn combat can create the feeling of a small cooperative FF-style raid battle.


---

