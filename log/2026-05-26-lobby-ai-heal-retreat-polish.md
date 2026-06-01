# Lobby AI Heal Retreat Polish

## Summary

Polished lobby arrows and loadout sizing, made White Mage heals slow, staggered AI planning, and fixed final retreat.

## Files Changed

- `index.html`
- `data/player_actions.csv`
- `log/2026-05-26-lobby-ai-heal-retreat-polish.md`

## Behavior Changed

- Job arrows are borderless, windowless, and farther from the character sprite.
- Loadout panel is taller and square icons are larger.
- Cure and Cura are Slow actions.
- Moving before Cure or Cura makes them invalid through the existing Slow-plus-move timing rule.
- AI allies choose actions one by one instead of all immediately.
- Action choice now emits a short character effect and floating action label.
- Final boss retreat now returns to the lobby and keeps earned gold / EXP instead of opening a stuck restart-only flow.

## Verification

- Extracted inline script and ran `node --check`; passed.
- Confirmed `data/player_actions.csv` sets Cure and Cura to `Slow`.
- Served `index.html` through a local Node HTTP server; response returned `200`.
- Confirmed served markup contains borderless arrow CSS, taller panel CSS, larger icon CSS, staggered AI planning, choice effect CSS, and `retreatRun`.

## Notes / Risks

- Heal prediction is now more important, but current AI still uses simple HP thresholds.
