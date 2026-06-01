# Enemy Punish Damage

## Summary
- Raised enemy damage so failed mechanic handling is dangerous.
- Added a target max HP damage floor for enemy threat hits.
- Made Warrior Cover redirect more single-target enemy attacks.

## Files Changed
- `index.html`
- `data/enemy_actions.csv`
- `log/2026-05-26-enemy-punish-damage.md`

## Behavior Changed
- Enemy threat hits now deal at least 62% of the target's max HP before mitigation.
- Guard Wall still reduces incoming threat damage.
- Correctly stacked `Crushing Meteor` uses a lower shared damage floor.
- `Cover` now redirects `Savage Strike`, `Heavy Smash`, and `Crush Armor` when it protects the targeted ally.
- Enemy action CSV modifiers now match the harsher damage tuning used by the fallback data.

## Verification
- Extracted inline `<script>` from `index.html` and ran `node --check`.
- Ran `node --check scripts\serve.mjs`.
- Served `index.html` with `node scripts/serve.mjs` and confirmed `http://127.0.0.1:4173/` returned `200`.
- Checked floor math: failed threat hit = 62% max HP; Guard Wall reduces it to about 34%.

## Notes / Risks
- Bad choices can now quickly kill damaged characters.
- Party-wide attacks are much more punishing without Guard Wall or interrupt.
