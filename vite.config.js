import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/kagami/pages/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      "/kagami/data": {
        target: 'http://localhost:21333',
        changeOrigin: true,
      },
      "/kagami/file": {
        target: 'http://localhost:21333',
        changeOrigin: true,
      },
    },
  }
})
