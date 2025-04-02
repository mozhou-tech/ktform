import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'src'),
      'c': path.resolve(__dirname,'components'),
      '_c': path.resolve(__dirname,'src/components'),
      'types': path.resolve(__dirname,'types'),
    }
  },
})
