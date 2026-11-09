@echo off
set "PATH=C:\Program Files\nodejs;C:\Users\Lenovo\AppData\Local\Programs\node20\node-v20.18.0-win-x64;%PATH%"

echo ========================================================
echo Launching Balaji Yagateela - Python Backend Portfolio
echo ========================================================
echo Starting Backend API (Express.js on port 5000)...
start "Portfolio Backend API" cmd /k "set PATH=C:\Program Files\nodejs;C:\Users\Lenovo\AppData\Local\Programs\node20\node-v20.18.0-win-x64;%PATH% && cd backend && npm run dev"

timeout /t 3 /nobreak >nul

echo Starting Frontend UI (React Vite on http://localhost:5173)...
start "Portfolio Frontend UI" cmd /k "set PATH=C:\Program Files\nodejs;C:\Users\Lenovo\AppData\Local\Programs\node20\node-v20.18.0-win-x64;%PATH% && cd frontend && npm run dev"

echo Both services are now launching in separate windows!
echo - Backend:  http://localhost:5000/api/health
echo - Frontend: http://localhost:5173
