# GDD: Game Flow and Rewards

Purpose: Lobby flow, run loop, reward rules, loss rules, and stamp communication.

Source: split from former root GDD on 2026-05-28.

## 5. Game Flow

### 5.1 Lobby Flow

In the final multiplayer version, players enter a lobby before a run.

Each player chooses:

- Job
- Equipment
- 4-action loadout
- Ready status

Recommended party composition:

- 1 Tank
- 1 Healer
- 2 DPS

However, the game should not hard-lock party roles. Instead, it should show warnings.

Example warnings:

- “No Tank: enemy target control may be difficult.”
- “No Healer: recovery options are limited.”
- “Low DPS: boss fights may become longer and more dangerous.”

### 5.2 Prototype Lobby

For the local prototype, the lobby is a mobile-first menu screen before combat.

Current bottom tabs:

- Lobby
- Loadout
- Dungeon / Raid
- Options

Lobby tab:

- Focuses on the selected player character.
- Uses left / right job arrows to rotate the player's job.
- Shows current job info, job level, role, and EXP.
- Shows compact current loadout summary:
  - Row 1: 4 equipped gear slots.
  - Row 2: 4 equipped battle actions.

Loadout tab:

- Switches to a separate customization screen.
- Keeps the bottom tab panel visible.
- Supports action, equipment, and passive swapping.
- Character card is clickable and changes the lower inventory into a job sprite picker.
- Job picker shows available job sprites without card backgrounds or borders.
- Selecting a job swaps the player job and that job's saved actions, equipment, and passives.

When starting a run, the local player controls one primary slot. The AI fills the remaining party slots with jobs that form a balanced team:

- 1 Tank
- 1 Healer
- 1 Ranged DPS
- 1 Melee DPS

### 5.3 Run Flow

A run consists of enemy waves.

Example structure:

| Wave | Encounter Type |
|---|---|
| Wave 1 | Normal enemy |
| Wave 2 | Elite enemy |
| Wave 3 | Boss |
| Wave 4 | Stronger normal enemy |
| Wave 5 | Stronger elite enemy |
| Wave 6 | Boss |
| Wave 9 | Major boss |

Every 3rd wave is a boss encounter.

---


---

## 11. Reward and Run Loss Rules

### Rewards During a Run

The party can gain:

- EXP
- Gold
- Equipment
- Consumables in future

### Boss Rewards

Every 3rd wave boss gives major rewards:

- Large EXP
- Large gold
- Higher rarity equipment

### Retreat Rules

After each boss fight, the party votes:

- Retreat
- Continue

If the majority votes retreat, the run ends safely.

The party keeps:

- EXP
- Gold
- Equipment

### Defeat Rules

If the party is defeated:

| Reward Type | Result |
|---|---|
| EXP | Kept |
| Run-gained gold | Lose 50% |
| Run-gained equipment | Lost |
| Pre-run equipment | Kept |

This makes failure painful but not meaningless.

---


---

## 14. Stamp System

The Stamp Panel stays at the bottom of the command window.

The stamp system is the main lightweight communication method for future multiplayer.

### First Stamp Set

| Stamp | Meaning |
|---|---|
| Use This | Suggest using an action |
| Don’t | Warn against using an action |
| Heal | Request healing |
| Guard | Request protection |
| Interrupt | Request interruption |
| Attack This | Focus target |
| Ready | Confirm plan |
| Wait | Ask others not to lock yet |

### Stamp Interaction

Possible input model:

1. Tap a stamp.
2. Tap a target UI element.
3. The stamp appears directly on that target.
4. The stamp fades after 2 seconds.

Example:

```text
Player taps [Interrupt]
Player taps Dragoon’s Leg Sweep
→ “Interrupt!” stamp appears over Leg Sweep
```

In the local prototype, stamps are mainly used to test UI and future multiplayer readability.

---

