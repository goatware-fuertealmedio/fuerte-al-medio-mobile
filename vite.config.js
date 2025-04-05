import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/fuerte-al-medio-mobile/', // 👈 importante para que funcione el deploy en GitHub Pages
  plugins: [react()],
})
