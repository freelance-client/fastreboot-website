import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Fastreboot-Landing-Page/', // Set the base URL for GitHub Pages
  plugins: [react()]
})