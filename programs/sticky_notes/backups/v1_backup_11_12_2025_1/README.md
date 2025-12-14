# Sticky Notes v1

A simple, modern desktop application for creating and managing sticky notes on your desktop.

## Features

- ✨ Create unlimited sticky notes
- 🎨 5 color options (yellow, white, blue, green, pink)
- 📝 Edit note content with auto-save
- 🖱️ Drag notes anywhere on your desktop
- 💾 Automatic position and content saving
- ⌨️ Global shortcut: Ctrl+Shift+N (or Cmd+Shift+N on Mac) to create new note
- 🗑️ Delete notes with confirmation
- 📌 System tray integration

## Installation

1. Make sure you have Node.js installed (v14 or higher)

2. Install dependencies:
```bash
npm install
```

3. Run the application:
```bash
npm start
```

## Usage

- **Create a new note**: Click the system tray icon or press `Ctrl+Shift+N`
- **Move a note**: Click and drag the note header
- **Edit content**: Click inside the note and start typing
- **Change color**: Click the color button in the note header
- **Delete note**: Click the × button in the note header

## Notes

- Notes are automatically saved when you move, resize, or edit them
- All notes are restored when you restart the application
- The application runs in the system tray - close all windows to keep it running in the background

## Technical Details

- Built with Electron
- Data is stored in: `%APPDATA%/sticky-notes/notes-data.json` (Windows)
- Each note is a separate window for true desktop placement

## Creating an Icon

The application expects an `icon.png` file in the v1 folder. If you don't have one, the system tray will use a default icon. You can add a 16x16 or 32x32 PNG icon file named `icon.png` to customize it.

