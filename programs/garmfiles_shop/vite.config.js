import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Use relative paths for GitHub Pages compatibility
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})

