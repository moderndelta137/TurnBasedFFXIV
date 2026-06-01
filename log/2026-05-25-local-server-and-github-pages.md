# 2026-05-25 Local Server And GitHub Pages

## Summary

Added a zero-dependency local static server and GitHub Actions workflow for GitHub Pages deployment.

## Files Changed

- `package.json`
- `scripts/serve.mjs`
- `.github/workflows/pages.yml`
- `.nojekyll`
- `log/2026-05-25-local-server-and-github-pages.md`

## Behavior Changed

- Game can run locally with `npm.cmd run dev`.
- Static site can deploy through GitHub Pages on pushes to `main` or manual workflow runs.
- No gameplay behavior changed.

## Verification

- Ran `node --check scripts/serve.mjs`.
- Started server through `npm.cmd run dev` in a temporary background job.
- Confirmed `http://127.0.0.1:4173/` returned HTTP 200.
- Confirmed response contained `Co-op Positioning RPG Prototype`.
- GitHub Pages workflow uses official Pages actions.
- Gameplay source file was not edited.

## Notes / Risks

- GitHub repository must enable Pages source as GitHub Actions.
- Workflow deploy branch is `main`; change branch list if repository uses another default branch.
- Leaving a persistent background server running was blocked by local shell policy, but the server command was smoke-tested successfully.
