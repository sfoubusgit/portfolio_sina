# Folder and File Creator

A GUI application that allows you to create a folder with a custom name and add multiple text files with custom names and content.

## Features

- Create a folder with a custom name
- Specify the number of text files to create
- Customize each file's name and content
- User-friendly GUI interface
- Error handling and validation

## Requirements

- Python 3.x (tkinter is included with Python)

## How to Run

### Option 1: Run directly with Python
```bash
python file_creator_gui.py
```

### Option 2: Create an executable

1. Install PyInstaller:
```bash
pip install pyinstaller
```

2. Create executable:
```bash
pyinstaller --onefile --windowed --name "FileCreator" file_creator_gui.py
```

The executable will be created in the `dist` folder.

## Usage

1. Enter the folder name you want to create
2. Enter the number of text files you want to create
3. Click "Update File Fields" to generate input fields for each file
4. For each file:
   - Enter the file name (with or without .txt extension)
   - Enter the file content in the text area
5. Click "Create Folder and Files" to create everything

## Notes

- If a file name doesn't have a .txt extension, it will be added automatically
- If a file name is left empty, it will default to `file_1.txt`, `file_2.txt`, etc.
- The folder will be created in the same directory where you run the program


