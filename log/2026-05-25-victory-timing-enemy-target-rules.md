# 2026-05-25 Victory Timing Enemy Target Rules

## Summary

Adjusted victory timing, enemy visibility after defeat, transition timing, and enemy targeting/provoke rules.

## Files Changed

- `index.html`
- `log/2026-05-25-victory-timing-enemy-target-rules.md`

## Behavior Changed

- Victory result screen stays visible longer before transition.
- Enemy sprite, enemy HP bar, enemy intent window, and target lines hide after enemy defeat.
- Black wipe now starts at the same time as the party walking left.
- Enemy intent can draw a red target line to its actual target.
- AOE and arena attacks no longer have fake targets.
- Provoke only redirects explicitly provokeable single-target attacks.
- Tankbusters target the tank and require guard/heal/support instead of Provoke.
- Role-targeted attacks aim at weaker non-tank members and cannot be provoked.

## Verification

- Parsed inline JavaScript with `new Function`.
- Started local server and confirmed the page returned HTTP 200.
- Confirmed enemy-defeated, provokeable intent, and `Savage Strike` markup/code are served.

## Notes / Risks

- Enemy target line only appears when the intent has a real target.
- Current enemy pools now include `Savage Strike` as the provokeable single-target attack.
