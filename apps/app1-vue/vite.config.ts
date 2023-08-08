import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9010
  },
  base: '',
  build: {
    outDir: path.join(__dirname, 'dist'),
    rollupOptions: {
      input: 'src/main.ts',
      output: {
        format: 'system',
        entryFileNames: `js/[name].js`,
        chunkFileNames: `js/[name].js`,
        assetFileNames: `js/[name].[ext]`
      },
      preserveEntrySignatures: 'strict'
    }
  },
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: '/src'
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
