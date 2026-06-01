# GDD: Jobs, Loadout, and Progression

Purpose: Jobs, roles, action loadouts, equipment, passives, autosave, and job reward direction.

Source: split from former root GDD on 2026-05-28.

## 7. Jobs and Roles

## 7.1 Role Categories

### Tank

Main responsibilities:

- Protect allies
- Redirect enemy attacks
- Reduce party damage
- Survive dangerous hits

### Healer

Main responsibilities:

- Restore HP
- Cleanse debuffs
- Prevent wipe
- Stabilize the party after AoE damage

### Melee DPS

Main responsibilities:

- High single-target damage
- Interrupt enemy casts
- Handle dangerous mechanics
- Burst down priority enemies

### Ranged DPS

Main responsibilities:

- AoE damage
- Magic damage
- Delayed high-risk, high-reward attacks
- Enemy weakening

---

## 7.2 Initial Prototype Jobs

The first prototype should include four jobs.

### Warrior

Role: Tank

Theme:

- High HP
- Protection
- Target control
- Party mitigation

| Action | Timing | Target Rule | Effect |
|---|---|---|---|
| Strike | Normal | EnemyLeader | Deals basic physical damage |
| Provoke | Fast | EnemyTargetingAlly | Redirects an enemy's single-target attack to Warrior |
| Cover | Fast | TargetedAlly | Protects one ally from the next single-target attack |
| Guard Wall | Fast | AllAllies | Reduces party damage this turn |

### White Mage

Role: Healer

Theme:

- Direct healing
- AoE healing
- Debuff cleanse
- Light holy damage

| Action | Timing | Target Rule | Effect |
|---|---|---|---|
| Smite | Normal | EnemyLeader | Deals small holy damage |
| Cure | Fast | LowestHPAlly | Heals one ally |
| Cura | Fast | AllAllies | Heals all allies for a smaller amount |
| Esuna | Fast | MostDebuffedAlly | Removes one debuff |

### Black Mage

Role: Ranged DPS

Theme:

- Powerful magic
- AoE attacks
- Delayed cast risk
- Elemental effects

| Action | Timing | Target Rule | Effect |
|---|---|---|---|
| Fire | Normal | EnemyLeader | Deals single-target fire magic damage |
| Firaga | Slow | AllEnemies | Deals large AoE fire damage after enemy action |
| Focus | Fast | Self | Increases next magic damage |
| Blizzard | Normal | EnemyLeader | Deals ice damage and weakens the enemy's next action |

### Dragoon

Role: Melee DPS

Theme:

- Jump attacks
- Single-target burst
- Interrupts
- Temporary evasion

| Action | Timing | Target Rule | Effect |
|---|---|---|---|
| Thrust | Normal | EnemyLeader | Deals basic physical damage |
| Jump | Fast / Slow | Self / EnemyLeader | Avoids attacks this turn, then lands after enemy action and deals damage |
| Dragon Dive | Normal | EnemyLeader | Deals high single-target damage |
| Leg Sweep | Fast | EnemyCasting | Interrupts an enemy cast. If no enemy is casting, deals small damage |

---

## 8. Action Loadout System

Each character can equip only 4 actions into battle.

Current CSV action pool:

- Each job has 8 action records in `data/player_actions.csv`.
- The first 4 actions are the default loadout from `data/jobs.csv`.
- The other 4 actions are swap candidates shown in the Loadout page.
- Future equipment-granted actions should still appear in the same action pool UI.
- The same action cannot be equipped in multiple action slots.
- Equipped actions are greyed out in the action inventory.

Actions can come from:

- Job default actions
- Job level-up actions
- Equipment-granted actions
- Equipment-modified actions

### Current Action CSV

Source: `data/player_actions.csv`

| Job | Default Equipped Actions | Extra Swap Actions |
|---|---|---|
| WAR | Strike, Provoke, Cover, Guard Wall | Vengeance, Shield Bash, Steel Cyclone, Rampart |
| WHM | Smite, Cure, Cura, Esuna | Regen, Protect, Medica, Holy |
| BLM | Fire, Firaga, Focus, Ice | Meteor, Mana Barrier, Transpose, Thunder |
| DRG | Thrust, Jump, Dive, Sweep | Talon, Chaos, Elusive, Stardiver |

### Example Black Mage Loadout

```text
[Fire]
[Firaga]
[Focus]
[Meteor]
```

In this case, Meteor may come from equipment.

### Alternate Black Mage Loadout

```text
[Fire]
[Blizzard]
[Focus]
[Mana Barrier]
```

This version is safer and more defensive.

The 4-action limit should create meaningful build decisions.

### Loadout Page Layout

The Loadout tab is a separate customization screen, not the compact Lobby summary.

Upper equipped area:

- Row 1: character card plus 4 passive slots.
- Row 2: 4 equipment slots.
- Row 3: 4 action slots.

Lower inventory area changes based on the selected slot:

- Character card selected: show available jobs as large sprite buttons with minimal chrome.
- Action slot selected: show available actions in a square-icon grid.
- Equipment slot selected: show valid equipment for that job and slot in a square-icon grid.
- Passive slot selected: show available passive skills as long text rows.

Players can click an inventory entry or drag it onto a slot to swap. Equipped entries are disabled in the inventory and cannot be equipped twice.

Job switching in the Loadout page:

- Uses the character card as the entry point.
- Keeps available jobs visible as sprite-first choices.
- Switches current job immediately when a job sprite is clicked.
- Restores that job's action, equipment, and passive loadout.
- Stores passive and action choices separately per job.

---


---

## 9. Equipment And Passive System

Equipment can modify characters in several ways.

Current prototype equipment data lives in `data/equipment.csv`.
Current prototype passive data lives in `data/passives.csv`.

Current equipment slots:

- Weapon
- Head
- Body
- Relic

The Loadout page shows 4 equipped gear slots. Selecting one changes the lower inventory to valid gear for that job and equipment type. Equipped gear entries are greyed out and cannot be duplicated across equipped slots.

### Equipment Effect Types

| Effect Type | Description |
|---|---|
| Stat Boost | Raises HP, MP, TP, Attack, Magic, Defense, etc. |
| Passive Effect | Adds conditional effects |
| Granted Action | Adds a new action to the loadout pool |
| Action Upgrade | Modifies an existing action |

### Current Equipment Pool

| Job | Weapon | Head | Body | Relic |
|---|---|---|---|---|
| WAR | Mythril Axe, Bulwark Blade, Raider Axe, Berserker Axe | Aegis Helm, Iron Sallet, Helm of Command | Valor Mail, Ogre Plate, Guardian Plate | Oath Stone, Lion Crest, Hero Belt |
| WHM | Oak Cane, Sage Wand, Seraph Cane | Pilgrim Hood, Lily Veil, Warding Veil | Mender Robe, Chapel Robe, Liturgy Robe | Lily Charm, Mercy Bell, Pearl Rosary |
| BLM | Ash Rod, Cinder Rod, Flame Rod | Void Hat, Star Cap, Ice Charm | Ember Coat, Frost Coat | Mana Gem, Flare Shard, Ancient Grimoire, Casting Ring |
| DRG | Iron Lance, Wyvern Spear, Gale Lance | Wyvern Helm, Sky Visor, Visor of Sight | Scale Mail, Lancer Coat, Dragoon Harness | Dragon Eye, Sky Fang, Wyrmheart Charm |

### Passive Skill System

The Loadout page supports 4 passive slots. Selecting a passive slot changes the lower inventory to passive skill rows. Equipped passive entries are greyed out and cannot be duplicated across passive slots.

Each job has 7 passive records:

- 3 early / existing passives.
- 4 expanded passives.

Current passive effects are mostly data and selection UI. Combat math hooks should be added gradually as each passive becomes necessary for encounter testing.

| Job | Passive Pool |
|---|---|
| WAR | Iron Will, Last Stand, Oath, Unyielding Line, Protector Instinct, Battle Rhythm, Front Guard |
| WHM | Freecure, Thin Air, Lily, Swift Mend, Triage, Calm Prayer, Clean Ward |
| BLM | Starter, Umbral, Ley, Teleport Mastery, Astral Charge, Umbral Recovery, Still Casting |
| DRG | Blood, Sight, Skewer, High Jump, Flank Training, Quick Landing, Dragons Resolve |

---


---

## 10. Job Progression

Each job levels separately.

Example:

```text
Warrior Lv. 8
White Mage Lv. 6
Black Mage Lv. 10
Dragoon Lv. 4
```

EXP is kept even after the party is defeated.

### Local Prototype Autosave

The current prototype saves player data locally in the browser with `localStorage`.

Autosaved data includes:

- Current player job.
- Gold and EXP.
- Sound options.
- Per-job action loadouts.
- Per-job equipment choices.
- Per-job passive choices.

Autosave should run after loadout edits, job switches, option changes, run rewards, reset/abandon state changes, and page unload.

This is local cache only. It is not account save, cloud save, or multiplayer persistence.

### Job Level Rewards

Job levels may unlock:

- New actions
- Passive traits
- Stat bonuses
- New equipment slots
- Cosmetic titles in future

---

