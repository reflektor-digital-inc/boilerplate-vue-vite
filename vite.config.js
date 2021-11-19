import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins : [vue()],

  // sass
  css : { preprocessorOptions : { scss : { additionalData : '@import "src/styles/_shared.scss";', }, }, },

  // import aliases
  resolve : {
    alias : {
      '@/'            : path.resolve(__dirname, 'src/'),
      '@/components'  : path.resolve(__dirname, 'src/components'),
      '@/pages'       : path.resolve(__dirname, 'src/pages'),
      '@/assets'      : path.resolve(__dirname, 'src/assets'),
      '@/styles'      : path.resolve(__dirname, 'src/styles'),
      '@/settings'    : path.resolve(__dirname, 'src/settings'),
      '@/utils'       : path.resolve(__dirname, 'src/utils'),
      '@/store'       : path.resolve(__dirname, 'src/store'),
      '@/composables' : path.resolve(__dirname, 'src/composables'),
      '@/canvas'      : path.resolve(__dirname, 'src/components/_canvas'),
      '@/shaders'     : path.resolve(__dirname, 'src/shaders'),
    },
  },
});
