# GDD: Data Model

Purpose: Design-facing data objects for characters, actions, passives, equipment, and enemy intent.

Source: split from former root GDD on 2026-05-28.

## 16. Data Model Draft

---



---

### Character

---



---

```json

---

{

---

  "id": "p1",

---

  "name": "Aegis",

---

  "job": "warrior",

---

  "role": "tank",

---

  "level": 1,

---

  "hp": 620,

---

  "maxHp": 620,

---

  "resourceType": "TP",

---

  "resource": 50,

---

  "maxResource": 100,

---

  "stats": {

---

    "attack": 20,

---

    "magic": 5,

---

    "defense": 18,

---

    "speed": 10

---

  },

---

  "actions": ["strike", "provoke", "cover", "guard_wall"],

---

  "selectedAction": null,

---

  "locked": false,

---

  "statusEffects": []

---

}

---

```

---



---

### Action

---



---

```json

---

{

---

  "id": "firaga",

---

  "name": "Firaga",

---

  "job": "BLM",

---

  "role": "ranged",

---

  "timing": "Slow",

---

  "costType": "MP",

---

  "cost": 22,

---

  "power": 90,

---

  "effectType": "magic",

---

  "targetRule": "EnemyLeader",

---

  "description": "Large fire damage after enemy action."

---

}

---

```

---



---

Current action CSV schema:

---



---

```text

---

id,name,job,role,timing,cost_type,cost,power,effect_type,target_rule,description

---

```

---



---

Player damage actions use `power` plus the matching job stat from `data/jobs.csv`.

Manual damage lookup needs:

- `data/jobs.csv`: `attack`, `magic`
- `data/player_actions.csv`: `power`, `effect_type`
- `data/enemies.csv`: `defense`, `magic_defense`

Use the combat formula in `GDD_combat.md`.

---

### Job Info Sheet

Current job CSV schema:

---

```text

---

id,name,role,max_hp,max_resource,resource_type,attack,magic,defense,move_type,sprite,actions

---

```

---

The `attack` stat powers physical player actions. The `magic` stat powers magic player actions. The `defense` stat is used when enemies damage that player slot.

---

### Enemy Info Sheet

Current enemy CSV schema:

---

```text

---

id,name,max_hp,defense,magic_defense,gold_reward,exp_reward,equipment_reward,action_set_id,sprite,sprite_width,sprite_height

---

```

---

The `defense` stat reduces physical player action damage. The `magic_defense` stat reduces magic player action damage. With job stats, action power/type, and enemy defenses, damage for a specific job/action/enemy can be calculated by hand.

---

### Enemy Action Sheet

Current enemy action CSV schema:

```text
id,name,type,danger,hint,target_rule,range_rule,attack_modifier,effect_type,damage_type,provokeable,interruptible
```

Important fields:

| Field | Meaning |
|---|---|
| `target_rule` | How the runtime chooses target or marked cells |
| `range_rule` | Which grid pattern should warn and resolve |
| `attack_modifier` | Enemy damage multiplier used by runtime tuning |
| `effect_type` | Runtime behavior bucket such as damage, hazard, tower, charge, or debuff |
| `provokeable` | Whether Warrior Provoke can redirect target |
| `interruptible` | Whether Dragoon Leg Sweep cancels the action |

Current expanded target rules include:

| Target Rule | Meaning |
|---|---|
| `hazard_random` | Select random outer cells for persistent hazards |
| `tower_random` | Select random outer cells that need a player soak |
| `immobilized` | Prefer a player affected by Ice Prison |

Current expanded range rules include:

| Range Rule | Meaning |
|---|---|
| `hazard_cells` | Warns cells that become burning ground |
| `rotating_laser` | Warns alternating outer lanes |
| `tower_cells` | Warns tower soak cells |
| `edge_blast` | Warns top and bottom outer rows |

### Enemy Action Set Sheet

Current enemy action set CSV schema:

```text
set_id,turn_order,action_id,weight,hp_below_pct
```

The current runtime uses `turn_order` as a looping sequence. `weight` and `hp_below_pct` are reserved for future weighted or phase-gated selection.

---

### Passive

---



---

```json

---

{

---

  "id": "teleport_mastery",

---

  "job": "BLM",

---

  "status": "proposed",

---

  "name": "Teleport Mastery",

---

  "icon": "TELE",

---

  "description": "Equip to keep Teleport movement.",

---

  "effectType": "movement",

---

  "effectValue": "teleport"

---

}

---

```

---



---

Current passive CSV schema:

---



---

```text

---

id,job,status,name,icon,description,effect_type,effect_value

---

```

---



---

### Equipment

---



---

```json

---

{

---

  "id": "ancient_grimoire",

---

  "job": "BLM",

---

  "status": "proposed",

---

  "slot": "Relic",

---

  "name": "Ancient Grimoire",

---

  "icon": "BOOK",

---

  "level": 22,

---

  "description": "Grants Meteor.",

---

  "effectType": "granted_action",

---

  "effectValue": "meteor",

---

  "grantsAction": "meteor"

---

}

---

```

---



---

Current equipment CSV schema:

---



---

```text

---

id,job,status,slot,name,icon,level,description,effect_type,effect_value,grants_action

---

```

---



---

Older JSON-oriented fields such as rarity and statBonus may return later, but the prototype now uses compact CSV rows.

---



---

### Enemy Intent

---



---

```json

---

{

---

  "enemyId": "iron_ogre",

---

  "actionId": "heavy_smash",

---

  "actionName": "Heavy Smash",

---

  "targetId": "p2",

---

  "type": "SingleTarget",

---

  "damageType": "Physical",

---

  "danger": "High",

---

  "interruptible": false

---

}

---

```

---



---

---

---


