# Randomized Enemy Run Order

## Summary

- Randomized enemy wave order at run start.
- Added a compact in-game log line showing the generated run order for verification.

## Files Changed

- `index.html`
- `log/2026-06-01-randomized-enemy-run-order.md`

## Behavior Changed

- Each new run shuffles all available enemy waves.
- Restart starts a fresh shuffled order.
- Retreat and abandon clear the active shuffled order.

## Verification

- Parsed the inline `index.html` script with Node `new Function(...)`: pass.
- Confirmed `shuffleWaves`, `startNewRunWaves`, `currentRunWaves`, and run-order log hooks exist.

## Notes / Risks

- Random order can place harder prototype enemies early.
- This is intended for mechanic verification, not final progression tuning.
