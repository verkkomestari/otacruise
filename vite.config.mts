import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
    }),
    react(),
  ],
  server: {
    open: true,
  },
})
