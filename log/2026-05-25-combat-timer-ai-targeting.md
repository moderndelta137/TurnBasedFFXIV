# 2026-05-25 Combat Timer AI Targeting

## Summary

Added combat planning timer, AI-controlled ally decisions, target indicator curves, and centered the enemy on the combat board.

## Files Changed

- `index.html`
- `log/2026-05-25-combat-timer-ai-targeting.md`

## Behavior Changed

- Combat planning starts with a 15-second timer.
- If the human slot does not choose an action before timeout, AI chooses for WAR.
- WHM, BLM, and DRG are AI-controlled during combat.
- When all living characters have actions selected, the timer cuts down to 3 seconds.
- Selected actions draw curved FF12-style target lines toward party members or the enemy.
- Enemy sprite now sits in the center of the battle grid instead of the left side.

## Verification

- Parsed inline JavaScript with `new Function`.
- Ran mocked DOM smoke test for lobby-to-battle transition, AI action assignment, and timer state.
- Confirmed all-ready state cuts timer to 3 seconds and target lines are generated in mocked DOM.
- Started local server and confirmed the page returned HTTP 200 with timer and target-line markup.

## Notes / Risks

- Human-controlled slot is currently fixed to `p1` / WAR.
- AI decision rules are tactical but simple; future multiplayer should replace local AI for connected player slots.
- Browser screenshot verification is still blocked by local headless GPU policy.
