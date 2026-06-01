# Enemy Threat Tuning

## Summary

- Increased damage on the new boss attack patterns.
- Expanded selected area attacks so they cover more of the 4x4 battlefield.

## Files Changed

- `index.html`
- `data/enemy_actions.csv`
- `log/2026-06-01-enemy-threat-tuning.md`

## Behavior Changed

- Ember Prophet:
  - Cinder Drop now marks 3 fire cells instead of 2.
  - Fire, stack, and raidwide damage modifiers increased.
- Storm Clockwork:
  - Twin Beam is now High danger and hits harder.
  - Tower soak hits harder.
  - Missed tower now deals a stronger raidwide punish.
  - Overclock Beam hits harder.
- Plague Chimera:
  - Poison, Ice Prison, and Shatter Lock damage increased.
  - Dragon Voice became Wide Edge Blast, hitting top and bottom edge rows instead of only corners.

## Verification

- Parsed the inline `index.html` script with Node `new Function(...)`: pass.
- Confirmed fallback data and `data/enemy_actions.csv` contain the updated damage modifiers and danger/range labels.
- Parsed `data/enemy_actions.csv` and checked target action rows: pass.

## Notes / Risks

- Randomized run order means these harder enemies can appear early.
- Tuning may need another pass after phone-size playtest.
