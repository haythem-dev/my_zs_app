import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      'my-zs-app-1.onrender.com',
      '.onrender.com' // Ceci permettra tous les sous-domaines onrender.com
    ]
  },
  server: {
    host: true, // Nécessaire pour Render
    port: process.env.PORT || 3000,
  }
})
