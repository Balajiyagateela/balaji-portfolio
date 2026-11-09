@echo off
set "PATH=C:\Program Files\nodejs;C:\Users\Lenovo\AppData\Local\Programs\node20\node-v20.18.0-win-x64;%PATH%"
cd backend
echo ===================================================
echo Starting Portfolio Express Backend API on port 5000
echo ===================================================
npm run dev
pause
