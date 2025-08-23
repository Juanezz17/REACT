import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,   // 👈 acá definís el puerto fijo
    open: true    // opcional: abre el navegador automáticamente
  }
})
