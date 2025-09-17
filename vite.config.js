import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader';
import svgoConfig from './svgo.config.js';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    // For svg icons
    svgLoader({svgoConfig}),
  ],
  resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
  },
})
