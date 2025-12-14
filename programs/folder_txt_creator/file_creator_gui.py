import tkinter as tk
from tkinter import ttk, messagebox, scrolledtext, filedialog
from pathlib import Path
import os

class FileCreatorApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Folder and File Creator")
        self.root.geometry("700x600")
        self.root.resizable(True, True)
        
        # Variables
        self.folder_name = tk.StringVar()
        self.save_location = tk.StringVar(value=os.getcwd())  # Default to current directory
        self.num_files = tk.StringVar(value="1")
        self.file_entries = []  # List to store file name and content entries
        
        self.create_widgets()
    
    def create_widgets(self):
        # Main frame
        main_frame = ttk.Frame(self.root, padding="10")
        main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        
        # Configure grid weights
        self.root.columnconfigure(0, weight=1)
        self.root.rowconfigure(0, weight=1)
        main_frame.columnconfigure(1, weight=1)
        
        # Folder name
        ttk.Label(main_frame, text="Folder Name:").grid(row=0, column=0, sticky=tk.W, pady=5)
        folder_entry = ttk.Entry(main_frame, textvariable=self.folder_name, width=40)
        folder_entry.grid(row=0, column=1, sticky=(tk.W, tk.E), pady=5, padx=5)
        
        # Save location
        ttk.Label(main_frame, text="Save Location:").grid(row=1, column=0, sticky=tk.W, pady=5)
        location_frame = ttk.Frame(main_frame)
        location_frame.grid(row=1, column=1, sticky=(tk.W, tk.E), pady=5, padx=5)
        location_frame.columnconfigure(0, weight=1)
        location_entry = ttk.Entry(location_frame, textvariable=self.save_location, width=30, state="readonly")
        location_entry.grid(row=0, column=0, sticky=(tk.W, tk.E), padx=(0, 5))
        browse_btn = ttk.Button(location_frame, text="Browse...", command=self.browse_folder)
        browse_btn.grid(row=0, column=1, sticky=tk.W)
        
        # Number of files
        ttk.Label(main_frame, text="Number of Files:").grid(row=2, column=0, sticky=tk.W, pady=5)
        num_entry = ttk.Entry(main_frame, textvariable=self.num_files, width=40)
        num_entry.grid(row=2, column=1, sticky=(tk.W, tk.E), pady=5, padx=5)
        
        # Update files button
        update_btn = ttk.Button(main_frame, text="Update File Fields", command=self.update_file_fields)
        update_btn.grid(row=3, column=0, columnspan=2, pady=10)
        
        # Scrollable frame for file entries
        canvas_frame = ttk.Frame(main_frame)
        canvas_frame.grid(row=4, column=0, columnspan=2, sticky=(tk.W, tk.E, tk.N, tk.S), pady=10)
        main_frame.rowconfigure(4, weight=1)
        
        # Canvas with scrollbar
        canvas = tk.Canvas(canvas_frame)
        scrollbar = ttk.Scrollbar(canvas_frame, orient="vertical", command=canvas.yview)
        self.scrollable_frame = ttk.Frame(canvas)
        
        self.scrollable_frame.bind(
            "<Configure>",
            lambda e: canvas.configure(scrollregion=canvas.bbox("all"))
        )
        
        canvas.create_window((0, 0), window=self.scrollable_frame, anchor="nw")
        canvas.configure(yscrollcommand=scrollbar.set)
        
        canvas.pack(side="left", fill="both", expand=True)
        scrollbar.pack(side="right", fill="y")
        
        # Create button
        create_btn = ttk.Button(main_frame, text="Create Folder and Files", command=self.create_files)
        create_btn.grid(row=5, column=0, columnspan=2, pady=20)
        
        # Status label
        self.status_label = ttk.Label(main_frame, text="Ready", foreground="green")
        self.status_label.grid(row=6, column=0, columnspan=2, pady=5)
        
        # Initialize with one file entry
        self.update_file_fields()
    
    def update_file_fields(self):
        # Clear existing entries
        for widget in self.scrollable_frame.winfo_children():
            widget.destroy()
        self.file_entries.clear()
        
        # Get number of files
        try:
            num = int(self.num_files.get())
            if num <= 0:
                messagebox.showerror("Error", "Number of files must be positive!")
                return
        except ValueError:
            messagebox.showerror("Error", "Please enter a valid number!")
            return
        
        # Create file entry fields
        for i in range(num):
            # File frame
            file_frame = ttk.LabelFrame(self.scrollable_frame, text=f"File {i+1}", padding="10")
            file_frame.grid(row=i, column=0, sticky=(tk.W, tk.E), pady=5, padx=5)
            file_frame.columnconfigure(1, weight=1)
            
            # File name
            ttk.Label(file_frame, text="File Name:").grid(row=0, column=0, sticky=tk.W, pady=5)
            file_name_var = tk.StringVar(value=f"file_{i+1}.txt")
            file_name_entry = ttk.Entry(file_frame, textvariable=file_name_var, width=30)
            file_name_entry.grid(row=0, column=1, sticky=(tk.W, tk.E), pady=5, padx=5)
            
            # File content
            ttk.Label(file_frame, text="Content:").grid(row=1, column=0, sticky=tk.NW, pady=5)
            content_text = scrolledtext.ScrolledText(file_frame, width=40, height=5, wrap=tk.WORD)
            content_text.grid(row=1, column=1, sticky=(tk.W, tk.E), pady=5, padx=5)
            
            # Store references
            self.file_entries.append({
                'name': file_name_var,
                'content': content_text
            })
    
    def browse_folder(self):
        """Open a dialog to select the folder where the new folder will be created."""
        folder_selected = filedialog.askdirectory(initialdir=self.save_location.get())
        if folder_selected:
            self.save_location.set(folder_selected)
    
    def create_files(self):
        # Validate folder name
        folder_name = self.folder_name.get().strip()
        if not folder_name:
            messagebox.showerror("Error", "Please enter a folder name!")
            return
        
        # Get save location
        save_location = self.save_location.get().strip()
        if not save_location:
            messagebox.showerror("Error", "Please select a save location!")
            return
        
        # Create folder path
        folder_path = Path(save_location) / folder_name
        try:
            folder_path.mkdir(exist_ok=True)
            self.status_label.config(text=f"Folder '{folder_name}' created", foreground="green")
        except Exception as e:
            messagebox.showerror("Error", f"Failed to create folder: {e}")
            return
        
        # Create files
        created_count = 0
        errors = []
        
        for i, entry in enumerate(self.file_entries):
            file_name = entry['name'].get().strip()
            file_content = entry['content'].get("1.0", tk.END).rstrip()
            
            if not file_name:
                file_name = f"file_{i+1}.txt"
            
            # Add .txt extension if not present
            if not file_name.endswith('.txt'):
                file_name += '.txt'
            
            # Create file
            file_path = folder_path / file_name
            try:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(file_content)
                created_count += 1
            except Exception as e:
                errors.append(f"File {i+1} ('{file_name}'): {e}")
        
        # Show result
        if errors:
            error_msg = f"Created {created_count} file(s) successfully.\n\nErrors:\n" + "\n".join(errors)
            messagebox.showwarning("Partial Success", error_msg)
        else:
            messagebox.showinfo("Success", f"Successfully created {created_count} file(s) in folder '{folder_name}'!\n\nLocation: {folder_path}")
            self.status_label.config(text=f"Created {created_count} file(s) in '{folder_path}'", foreground="green")

def main():
    root = tk.Tk()
    app = FileCreatorApp(root)
    root.mainloop()

if __name__ == "__main__":
    main()

