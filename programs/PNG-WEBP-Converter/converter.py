import tkinter as tk
from tkinter import filedialog, messagebox, ttk
import os
import sys
from pathlib import Path

# Versuche PIL zu importieren, zeige Fehler wenn nicht verfügbar
try:
    from PIL import Image
except ImportError:
    print("FEHLER: Pillow ist nicht installiert!")
    print("Bitte installieren Sie es mit: pip install Pillow")
    input("Drücken Sie Enter zum Beenden...")
    sys.exit(1)


class ImageConverter:
    def __init__(self, root):
        self.root = root
        self.root.title("PNG/JPG zu WEBP Konverter")
        self.root.geometry("800x600")
        self.root.resizable(True, True)
        
        # Liste der ausgewählten Dateien
        self.selected_files = []
        
        self.setup_ui()
        
    def setup_ui(self):
        # Hauptframe
        main_frame = ttk.Frame(self.root, padding="10")
        main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        self.root.columnconfigure(0, weight=1)
        self.root.rowconfigure(0, weight=1)
        main_frame.columnconfigure(1, weight=1)
        
        # Titel
        title_label = ttk.Label(main_frame, text="PNG/JPG zu WEBP Konverter", 
                               font=("Arial", 16, "bold"))
        title_label.grid(row=0, column=0, columnspan=3, pady=(0, 20))
        
        # Dateien auswählen Button
        select_btn = ttk.Button(main_frame, text="Dateien auswählen", 
                               command=self.select_files)
        select_btn.grid(row=1, column=0, columnspan=3, pady=10, sticky=(tk.W, tk.E))
        
        # Liste der ausgewählten Dateien
        list_frame = ttk.Frame(main_frame)
        list_frame.grid(row=2, column=0, columnspan=3, sticky=(tk.W, tk.E, tk.N, tk.S), pady=10)
        main_frame.rowconfigure(2, weight=1)
        
        # Scrollbar für Liste
        scrollbar = ttk.Scrollbar(list_frame)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
        
        # Listbox
        self.file_listbox = tk.Listbox(list_frame, yscrollcommand=scrollbar.set, 
                                       selectmode=tk.EXTENDED, height=10)
        self.file_listbox.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.config(command=self.file_listbox.yview)
        
        # Bind Double-Click zum Bearbeiten
        self.file_listbox.bind('<Double-Button-1>', self.edit_filename)
        
        # Buttons für Dateien verwalten
        btn_frame = ttk.Frame(main_frame)
        btn_frame.grid(row=3, column=0, columnspan=3, pady=10)
        
        edit_btn = ttk.Button(btn_frame, text="Dateiname bearbeiten", 
                             command=self.edit_filename)
        edit_btn.pack(side=tk.LEFT, padx=5)
        
        remove_btn = ttk.Button(btn_frame, text="Ausgewählte entfernen", 
                               command=self.remove_selected)
        remove_btn.pack(side=tk.LEFT, padx=5)
        
        clear_btn = ttk.Button(btn_frame, text="Alle entfernen", 
                             command=self.clear_all)
        clear_btn.pack(side=tk.LEFT, padx=5)
        
        # Ausgabeordner
        output_frame = ttk.LabelFrame(main_frame, text="Ausgabeordner", padding="10")
        output_frame.grid(row=4, column=0, columnspan=3, sticky=(tk.W, tk.E), pady=10)
        output_frame.columnconfigure(1, weight=1)
        
        # Standard-Ausgabeordner (Windows-kompatibel)
        default_output = os.path.join(os.path.expanduser("~"), "Desktop")
        if not os.path.exists(default_output):
            default_output = os.path.expanduser("~")
        self.output_path_var = tk.StringVar(value=default_output)
        output_entry = ttk.Entry(output_frame, textvariable=self.output_path_var, 
                                state="readonly")
        output_entry.grid(row=0, column=0, columnspan=2, sticky=(tk.W, tk.E), padx=5)
        
        output_btn = ttk.Button(output_frame, text="Ordner wählen", 
                               command=self.select_output_folder)
        output_btn.grid(row=1, column=0, columnspan=2, pady=5)
        
        # Konvertieren Button
        convert_btn = ttk.Button(main_frame, text="Zu WEBP konvertieren", 
                                command=self.convert_files, style="Accent.TButton")
        convert_btn.grid(row=5, column=0, columnspan=3, pady=20, sticky=(tk.W, tk.E))
        
        # Status Bar
        self.status_var = tk.StringVar(value="Bereit")
        status_bar = ttk.Label(main_frame, textvariable=self.status_var, 
                              relief=tk.SUNKEN, anchor=tk.W)
        status_bar.grid(row=6, column=0, columnspan=3, sticky=(tk.W, tk.E))
        
    def select_files(self):
        """Dateien auswählen"""
        files = filedialog.askopenfilenames(
            title="PNG/JPG Dateien auswählen",
            filetypes=[
                ("Bilddateien", "*.png *.jpg *.jpeg"),
                ("PNG Dateien", "*.png"),
                ("JPG Dateien", "*.jpg *.jpeg"),
                ("Alle Dateien", "*.*")
            ]
        )
        
        if files:
            for file_path in files:
                if file_path.lower().endswith(('.png', '.jpg', '.jpeg')):
                    self.selected_files.append({
                        'path': file_path,
                        'original_name': os.path.basename(file_path),
                        'new_name': os.path.splitext(os.path.basename(file_path))[0]
                    })
                    self.file_listbox.insert(tk.END, os.path.basename(file_path))
            self.status_var.set(f"{len(self.selected_files)} Datei(en) ausgewählt")
    
    def edit_filename(self, event=None):
        """Dateinamen bearbeiten"""
        selection = self.file_listbox.curselection()
        if not selection:
            messagebox.showwarning("Keine Auswahl", "Bitte wählen Sie eine Datei aus der Liste aus.")
            return
        
        index = selection[0]
        if index < len(self.selected_files):
            file_info = self.selected_files[index]
            current_name = file_info['new_name']
            
            # Dialog zum Umbenennen
            dialog = tk.Toplevel(self.root)
            dialog.title("Dateiname bearbeiten")
            dialog.geometry("400x150")
            dialog.transient(self.root)
            dialog.grab_set()
            
            ttk.Label(dialog, text="Neuer Dateiname (ohne Endung):").pack(pady=10)
            
            name_var = tk.StringVar(value=current_name)
            name_entry = ttk.Entry(dialog, textvariable=name_var, width=40)
            name_entry.pack(pady=5)
            name_entry.select_range(0, tk.END)
            name_entry.focus()
            
            def save_name():
                new_name = name_var.get().strip()
                if new_name:
                    # Entferne ungültige Zeichen
                    invalid_chars = '<>:"/\\|?*'
                    for char in invalid_chars:
                        new_name = new_name.replace(char, '_')
                    
                    file_info['new_name'] = new_name
                    # Aktualisiere Listbox
                    self.file_listbox.delete(index)
                    self.file_listbox.insert(index, f"{new_name} ({file_info['original_name']})")
                    dialog.destroy()
                else:
                    messagebox.showwarning("Ungültiger Name", "Der Dateiname darf nicht leer sein.")
            
            def cancel():
                dialog.destroy()
            
            btn_frame = ttk.Frame(dialog)
            btn_frame.pack(pady=10)
            
            ttk.Button(btn_frame, text="Speichern", command=save_name).pack(side=tk.LEFT, padx=5)
            ttk.Button(btn_frame, text="Abbrechen", command=cancel).pack(side=tk.LEFT, padx=5)
            
            name_entry.bind('<Return>', lambda e: save_name())
            name_entry.bind('<Escape>', lambda e: cancel())
    
    def remove_selected(self):
        """Ausgewählte Dateien entfernen"""
        selection = self.file_listbox.curselection()
        if not selection:
            messagebox.showwarning("Keine Auswahl", "Bitte wählen Sie Dateien aus der Liste aus.")
            return
        
        # Entferne in umgekehrter Reihenfolge, um Indizes nicht zu verschieben
        for index in reversed(selection):
            if index < len(self.selected_files):
                self.file_listbox.delete(index)
                self.selected_files.pop(index)
        
        self.status_var.set(f"{len(self.selected_files)} Datei(en) ausgewählt")
    
    def clear_all(self):
        """Alle Dateien entfernen"""
        if self.selected_files:
            if messagebox.askyesno("Bestätigen", "Möchten Sie wirklich alle Dateien entfernen?"):
                self.file_listbox.delete(0, tk.END)
                self.selected_files.clear()
                self.status_var.set("Bereit")
    
    def select_output_folder(self):
        """Ausgabeordner auswählen"""
        folder = filedialog.askdirectory(
            title="Ausgabeordner wählen",
            initialdir=self.output_path_var.get()
        )
        if folder:
            self.output_path_var.set(folder)
    
    def convert_files(self):
        """Dateien zu WEBP konvertieren"""
        if not self.selected_files:
            messagebox.showwarning("Keine Dateien", "Bitte wählen Sie zuerst Dateien aus.")
            return
        
        output_folder = self.output_path_var.get()
        if not os.path.exists(output_folder):
            try:
                os.makedirs(output_folder)
            except Exception as e:
                messagebox.showerror("Fehler", f"Konnte Ausgabeordner nicht erstellen:\n{e}")
                return
        
        # Progressbar
        progress_window = tk.Toplevel(self.root)
        progress_window.title("Konvertierung")
        progress_window.geometry("400x150")
        progress_window.transient(self.root)
        progress_window.grab_set()
        
        progress_label = ttk.Label(progress_window, text="Konvertiere Dateien...")
        progress_label.pack(pady=10)
        
        progress_bar = ttk.Progressbar(progress_window, length=300, mode='determinate')
        progress_bar.pack(pady=10)
        progress_bar['maximum'] = len(self.selected_files)
        
        converted = 0
        errors = []
        
        for i, file_info in enumerate(self.selected_files):
            try:
                file_path = file_info['path']
                output_name = f"{file_info['new_name']}.webp"
                output_path = os.path.join(output_folder, output_name)
                
                # Wenn Datei bereits existiert, Nummer hinzufügen
                counter = 1
                original_output_path = output_path
                while os.path.exists(output_path):
                    base_name = file_info['new_name']
                    output_name = f"{base_name}_{counter}.webp"
                    output_path = os.path.join(output_folder, output_name)
                    counter += 1
                
                # Öffne und konvertiere Bild
                with Image.open(file_path) as img:
                    # Konvertiere RGBA zu RGB wenn nötig (WEBP unterstützt RGBA, aber für bessere Kompatibilität)
                    if img.mode in ('RGBA', 'LA', 'P'):
                        # Erstelle weißes Hintergrundbild für transparente Bilder
                        if img.mode == 'P' and 'transparency' in img.info:
                            img = img.convert('RGBA')
                        if img.mode in ('RGBA', 'LA'):
                            background = Image.new('RGB', img.size, (255, 255, 255))
                            if img.mode == 'RGBA':
                                background.paste(img, mask=img.split()[3])
                            else:
                                background.paste(img, mask=img.split()[1])
                            img = background
                        else:
                            img = img.convert('RGB')
                    elif img.mode != 'RGB':
                        img = img.convert('RGB')
                    
                    # Speichere als WEBP mit hoher Qualität
                    img.save(output_path, 'WEBP', quality=90)
                
                converted += 1
                progress_label.config(text=f"Konvertiere: {output_name} ({i+1}/{len(self.selected_files)})")
                progress_bar['value'] = i + 1
                progress_window.update()
                
            except Exception as e:
                errors.append(f"{file_info['original_name']}: {str(e)}")
                progress_bar['value'] = i + 1
                progress_window.update()
        
        progress_window.destroy()
        
        # Ergebnis anzeigen
        if errors:
            error_msg = f"Konvertierung abgeschlossen!\n\n{converted} Datei(en) erfolgreich konvertiert.\n\nFehler:\n" + "\n".join(errors)
            messagebox.showwarning("Konvertierung mit Fehlern", error_msg)
        else:
            messagebox.showinfo("Erfolg", f"Alle {converted} Datei(en) wurden erfolgreich zu WEBP konvertiert!\n\nSpeicherort: {output_folder}")
            self.status_var.set(f"{converted} Datei(en) konvertiert")


def main():
    try:
        root = tk.Tk()
        app = ImageConverter(root)
        root.mainloop()
    except Exception as e:
        # Zeige Fehler in einem Dialog, falls tkinter verfügbar ist
        try:
            error_root = tk.Tk()
            error_root.withdraw()  # Verstecke Hauptfenster
            messagebox.showerror("Fehler beim Starten", 
                               f"Das Programm konnte nicht gestartet werden:\n\n{str(e)}\n\n"
                               f"Bitte stellen Sie sicher, dass:\n"
                               f"1. Python korrekt installiert ist\n"
                               f"2. Pillow installiert ist (pip install Pillow)\n"
                               f"3. tkinter verfügbar ist")
            error_root.destroy()
        except:
            # Falls auch das fehlschlägt, zeige in Konsole
            print(f"FEHLER beim Starten des Programms: {e}")
            print("\nBitte stellen Sie sicher, dass:")
            print("1. Python korrekt installiert ist")
            print("2. Pillow installiert ist: pip install Pillow")
            print("3. tkinter verfügbar ist (normalerweise mit Python installiert)")
            input("\nDrücken Sie Enter zum Beenden...")
        sys.exit(1)


if __name__ == "__main__":
    main()

