# TurnBasedFFXIV Development Rules

## Voice

Default reply style = smart caveman.

- Very short sentences.
- No filler.
- No politeness padding.
- Dense meaning.
- Prefer compact symbols like `->`, `=`, `vs`.
- If user says turn off caveman mode, speak normally.

## Project Truth

- Game = mobile-first 2D pixel co-op turn-based RPG.
- Inspiration = FFXIV raid roles + classic 2D Final Fantasy turn combat.
- Current prototype = single-file HTML game in `index.html`.
- Design source = `data/gdd/GDD_index.md`, with topic docs in `data/gdd/`.
- Runtime data = `data/jobs.csv`, `data/player_actions.csv`, `data/equipment.csv`, `data/passives.csv`, enemy CSVs.
- Keep code and design aligned with GDD unless user explicitly changes direction.

## Current Prototype

- Local simulated multiplayer.
- One local user controls 4 character slots.
- Future goal = up to 4 online players, one slot each.
- Treat each character as future `PlayerSlot`.
- Avoid assumptions that make online multiplayer hard later.

## Combat Invariants

- Party size = 4.
- Jobs now:
  - WAR = tank.
  - WHM = healer.
  - BLM = ranged caster.
  - DRG = melee DPS.
- Each character chooses:
  - 1 movement destination.
  - 1 action.
- Each job has 8 action records in CSV for now.
- Each character equips 4 battle actions at a time.
- Loadout page must support action, gear, and passive swapping.
- Lobby tab keeps compact 2-row loadout summary: gear row, action row.
- Loadout tab is separate customization screen with upper equipped slots and lower inventory.
- Loadout character card opens a sprite-only job picker in the lower inventory.
- Job picker choices switch the player's job and restore that job's actions, equipment, and passives.
- Equipped action, gear, and passive inventory entries must be greyed out and cannot be duplicated.
- KO characters must not block remaining party action choice.
- KO characters revive with 10% max HP after battle victory.
- Enemy intent visible before planning.
- Enemy intent must show:
  - action name.
  - target.
  - type.
  - danger.
  - interruptible state when relevant.
- Failed major enemy mechanics should deal about 60%+ max HP before mitigation.
- Correct counterplay should matter: dodge range, Cover / Provoke, Guard Wall, stack, interrupt, or Cure.

## Grid Rules

- Battlefield = 4x4 grid.
- Enemy occupies center 2x2 cells.
- Players use 12 outer cells only.
- Players never enter center cells.
- Multiple players may stack on same outer cell.
- Horizontal opposite-side movement across enemy is allowed as an abstraction.
- Vertical top/bottom wrapping is not allowed.
- `(0,0)` to `(0,3)` and `(3,0)` to `(3,3)` = 3 spaces apart.
- Default party start cells = `(3,0)`, `(3,1)`, `(3,2)`, `(3,3)`.
- Position affects:
  - enemy range warnings.
  - front / side / behind damage modifier.
  - stack mechanics.
  - tank protection setup.

## Timing Rules

Turn order:

1. Enemy intention reveal.
2. Player planning.
3. Fast and Normal player actions.
4. Enemy action.
5. Slow player actions.
6. Reactions and end-turn effects.

Movement timing cost:

- Fast action + move -> Normal.
- Normal action + move -> Slow.
- Slow action + move -> invalid / disabled.
- Fast defensive actions after movement still resolve before enemy.
- Slow actions must feel risky but meaningfully stronger.

## UI Rules

- Mobile portrait first.
- Battlefield readable at phone size.
- Use compact fantasy command-window UI.
- Keep labels short.
- Make intent and danger obvious.
- Show selected movement inside each character panel.
- Show timing downgrade clearly.
- Use visible grid warnings for enemy attacks.
- If enemy warning and valid move highlight overlap, valid move border must remain readable.
- Move choice highlights should only show during planning, not action resolution.
- Enemy/player battlefield sprites must not block grid clicks.
- Battlefield teammate sprites are visual only; do not use them for character selection.
- Character panel name row should show square buff/debuff/passive icons.
- Buff/passive icon = up arrow; debuff icon = down arrow.
- Timed/value-limited effects should show circular infill inside square icon.
- Buff/debuff/passive icons need hover/focus tooltips.
- Battle top-right options menu should support sound volume and abandon run.
- Local autosave uses browser `localStorage` key `turnbasedffxiv.playerSave.v1`.
- Autosave covers current job, gold/EXP, sound options, and per-job actions, equipment, and passives.
- Keep log and stamp UI compact.
- Prefer icons / color / short labels over long text.

## Scope Rules

Do not add unless user asks:

- Real online multiplayer.
- Accounts.
- Cloud save.
- Account-based cross-device save.
- Matchmaking.
- Chat system.
- Monetization.
- Large equipment database.
- Many jobs.
- Many bosses.
- Complex procedural generation.

Default goal = prove combat loop first.

## Change Log Rules

- Every repo file change must add one Markdown log entry under `log/`.
- One implementation batch = one log file.
- Log filename format: `YYYY-MM-DD-short-change-title.md`.
- Example: `2026-05-25-agent-rules-and-log-folder.md`.
- Each log entry must include:
  - `Summary`
  - `Files Changed`
  - `Behavior Changed`
  - `Verification`
  - `Notes / Risks`

## Verification Rules

For doc-only changes:

- Confirm files exist.
- Confirm game files are untouched unless intended.

For game changes:

- Open or serve `index.html` when possible.
- Verify mobile portrait layout.
- Verify core turn loop still works.
- Verify movement timing cost.
- Verify enemy intent and range warnings.
- Verify logs / stamps remain readable.
