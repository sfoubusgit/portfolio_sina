@echo off
echo Starte PNG/JPG zu WEBP Konverter...
echo.
python converter.py
if errorlevel 1 (
    echo.
    echo Ein Fehler ist aufgetreten!
    pause
)

