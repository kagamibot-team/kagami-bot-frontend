import { defineConfig, version as vite_version } from 'vite'
import vue from '@vitejs/plugin-vue'

import package_json from './package.json'
import { version as vue_version } from 'vue'
import getGitCommit from './scripts/getGitCommit';

declare let process: NodeJS.Process;

const base: string = "/kagami/pages/"

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  plugins: [
    vue(),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: base }
    ]
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
      "/kagami/metadata": {
        target: 'http://localhost:21333',
        changeOrigin: true,
      },
      "/kagami-res": {
        target: 'http://localhost:21333',
        changeOrigin: true,
      },
    },
    allowedHosts: true,
  },
  define: {
    __APP_VERSION__: JSON.stringify(package_json.version),
    __VITE_VERSION__: JSON.stringify(vite_version),
    __VUE_VERSION__: JSON.stringify(vue_version),
    __NODE_VERSION__: JSON.stringify(process.version),
    __COMMIT_HASH__: JSON.stringify(getGitCommit()),
  }
})
