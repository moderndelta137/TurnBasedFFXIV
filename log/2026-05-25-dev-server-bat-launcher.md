# 2026-05-25 Dev Server Bat Launcher

## Summary

Added a Windows batch launcher for starting the local dev server and opening the game site.

## Files Changed

- `start-dev.bat`
- `log/2026-05-25-dev-server-bat-launcher.md`

## Behavior Changed

- Double-clicking `start-dev.bat` starts `npm.cmd run dev` in a command window.
- The launcher opens `http://127.0.0.1:4173/` after a short delay.
- No gameplay behavior changed.

## Verification

- Confirmed `start-dev.bat` exists.
- Confirmed launcher points at the existing local server URL.
- Gameplay source file was not edited.

## Notes / Risks

- Requires Node.js and npm available on PATH.
- Server window stays open so logs remain visible; close that window to stop the server.

