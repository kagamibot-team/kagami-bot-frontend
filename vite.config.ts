import { fileURLToPath, URL } from 'node:url'

import { defineConfig, version as vite_version } from 'vite'
import vue from '@vitejs/plugin-vue'

import package_json from './package.json'
import { version as vue_version } from 'vue'

declare let process: NodeJS.Process;

// https://vitejs.dev/config/
export default defineConfig({
  base: '/kagami/pages/',
  plugins: [
    vue(),
  ],
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
      "/kagami/metadata": {
        target: 'http://localhost:21333',
        changeOrigin: true,
      },
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(package_json.version),
    __VITE_VERSION__: JSON.stringify(vite_version),
    __VUE_VERSION__: JSON.stringify(vue_version),
    __NODE_VERSION__: JSON.stringify(process.version),
  }
})
