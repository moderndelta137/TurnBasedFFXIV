# GDD: UI and UX

Purpose: Screen structure, battle screen, command windows, panels, options popup, and interaction states.

Source: split from former root GDD on 2026-05-28.

## 13. UI / UX Design

## 13.1 Screen Structure

The game uses a vertical mobile layout.

```text
Upper 2/3: Battle Screen
Lower 1/3: Command Window
```

---

## 13.2 Battle Screen

The battle screen shows:

- Wave number
- Turn number
- Timer
- Gold gained in run
- Compact Options button in the top-right battle chrome
- Enemy sprites on the left
- Party sprites on the right
- HP bars
- Enemy intention display
- Target arrows
- Combat VFX

Example layout:

```text
Wave / Turn / Timer / Gold / Options

Enemy Intent

Boss          P1
              P2
              P3
              P4
```

### Target Indicators

Use clear visual indicators:

| Indicator | Meaning |
|---|---|
| Red arrow | Enemy attack target |
| Purple arrow | Debuff target |
| Yellow warning circle | AoE |
| Blue shield icon | Protected ally |
| Cast bar | Enemy is casting |
| Warning icon | Dangerous boss mechanic |

### Options Popup

The battle top-right Options button opens a compact popup.

Current prototype options:

- Sound volume slider.
- Abandon run.

Abandon run should require confirmation, stop the turn timer, cancel any stale resolution flow, reset current run state, and return the player to the lobby.

---

## 13.3 Command Window

The command window should show all 4 character panels equally.

The user prefers that every character panel uses the same layout:

1. Character name and job icon in the first row
2. HP bar
3. MP / TP bar
4. Four skill icons in the last row

The Stamp Panel stays at the bottom.

### Command Window Structure

```text
Character Panel 1
Character Panel 2
Character Panel 3
Character Panel 4
Stamp Panel
```

### Character Panel Structure

```text
[Job Icon] Character Name
HP 420 / 520
MP 32 / 50
[Skill 1] [Skill 2] [Skill 3] [Skill 4]
```

For physical jobs:

```text
WAR / DRG / NIN -> TP
```

For magical jobs:

```text
WHM / BLM / SCH -> MP
```

### Example Command Window

```text
[WAR] Aegis
HP 520 / 620
TP 42 / 100
[Strike][Provoke][Cover][Wall]

[WHM] Luma
HP 350 / 470
MP 60 / 80
[Smite][Cure][Cura][Esuna]

[BLM] Nox
HP 310 / 430
MP 72 / 90
[Fire][Firaga][Focus][Ice]

[DRG] Vair
HP 460 / 520
TP 36 / 100
[Thrust][Jump][Dive][Sweep]

[Use!] [No!] [Heal!] [Guard!] [Interrupt!]
```

### Command Interaction

For the local prototype:

- Tap a skill icon to select that character's action.
- Selected skill gains a glowing border.
- A checkmark appears after action selection.
- Long-press a skill icon to show tooltip.
- Tap or long-press stamps to place coordination hints.

### Panel States

No action selected:

```text
[BLM] Nox
HP 310 / 430
MP 72 / 90
[Fire] [Firaga] [Focus] [Blizzard]
```

Action selected:

```text
[BLM] Nox
HP 310 / 430
MP 72 / 90
[Fire] [FIRAGA*] [Focus] [Blizzard]
```

Slow timing warning:

```text
[BLM] Nox
HP 310 / 430
MP 72 / 90
[Fire] [FIRAGA* Slow] [Focus] [Blizzard]
```

