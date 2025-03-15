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
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1000kb
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'ui-vendor': ['@mui/material', '@emotion/react', '@emotion/styled', 'framer-motion'],
        },
      },
    },
    target: 'esnext', // Modern browsers for better performance
    minify: 'terser', // Use Terser for better minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true
      }
    },
    sourcemap: false // Disable sourcemaps in production for better performance
  },
})
