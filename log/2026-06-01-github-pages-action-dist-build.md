# 2026-06-01 GitHub Pages Action Dist Build

## Summary

Added a GitHub Pages build step that creates a clean static deployment artifact.

## Files Changed

- `package.json`
- `scripts/build-pages.mjs`
- `.github/workflows/pages.yml`
- `.gitignore`
- `log/2026-06-01-github-pages-action-dist-build.md`

## Behavior Changed

- `npm run build:pages` now copies `index.html`, `data/`, and `assets/` into `dist/`.
- The Pages workflow uploads `dist/` instead of the full repository.
- `.nojekyll` is included in the built artifact.
- No gameplay behavior changed.

## Verification

- Ran `node --check scripts/build-pages.mjs`.
- Ran `node --check scripts/serve.mjs`.
- Ran `npm.cmd run build:pages`.
- Confirmed `dist/index.html`, `dist/data/player_actions.csv`, `dist/assets/sprites/warrior.png`, and `dist/.nojekyll` exist.
- Confirmed `dist/log` and `dist/.github` are not included.
- Started local server and confirmed `/` returned HTTP 200 with `Co-op Positioning RPG Prototype`.
- Confirmed `/data/player_actions.csv` returned HTTP 200.

## Notes / Risks

- Repository Settings -> Pages must use GitHub Actions as source.
- Workflow deploys from pushes to `main` and manual dispatch.
