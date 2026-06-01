@echo off
setlocal

cd /d "%~dp0"

set "URL=http://127.0.0.1:4173/"

echo Starting TurnBasedFFXIV dev server...
start "TurnBasedFFXIV Dev Server" cmd /k "npm.cmd run dev"

timeout /t 2 /nobreak >nul

echo Opening %URL%
start "" "%URL%"

endlocal
