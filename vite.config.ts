import { defineConfig } from 'vite'

import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  server:{
    port: 8088,
    open: true
  },
  plugins: [
    vue(),
    vueJsx()
  ],
})
