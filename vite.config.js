import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Battlefield-Frontend/', // GitHub Pages sub-path
  plugins: [react()],
})