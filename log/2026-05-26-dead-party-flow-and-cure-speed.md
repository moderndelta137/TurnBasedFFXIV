# Dead Party Flow And Cure Speed

## Summary

Fixed turn progress when party members are dead and changed Cure back to Fast.

## Files Changed

- `index.html`
- `data/player_actions.csv`
- `log/2026-05-26-dead-party-flow-and-cure-speed.md`

## Behavior Changed

- Dead party members no longer block ready checks or turn resolution.
- Resolution loops now skip dead members with no selected action.
- Dead characters cannot select movement or actions.
- Dead characters revive at 10% max HP after a wave is cleared.
- Living characters still recover a small amount after a wave.
- Cure is Fast again.
- Cura remains Slow and still becomes invalid after movement.

## Verification

- Extracted inline script and ran `node --check`; passed.
- Confirmed `data/player_actions.csv` sets Cure to `Fast` and Cura to `Slow`.
- Served `index.html` through a local Node HTTP server; response returned `200`.
- Confirmed served markup contains alive-only ready logic, wave-end revive logic, 10% max HP revive value, dead input blocking, and Fast Cure fallback data.

## Notes / Risks

- Revive happens on wave clear, not mid-turn.
