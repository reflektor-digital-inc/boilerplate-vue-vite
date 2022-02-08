import path from 'path';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import svgLoader from 'vite-svg-loader';
import vue from '@vitejs/plugin-vue';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins : [
    vue(),
    svgr(),
    svgLoader({
      svgoConfig : {
        plugins : [
          {
            name   : 'preset-default',
            params : {
              overrides : {
                removeViewBox             : false,
                addAttributesToSVGElement : { attributes : [`preserveAspectRatio="xMidYMid meet"`] },
                removeHiddenElems         : false,
                mergePaths                : false,
                prefixIds                 : false,
                cleanupIDs                : false
              }
            }
          },
          'convertShapeToPath'
        ]
      }
    })
  ],

  // sass
  css : {
    preprocessorOptions : {
      scss : {
        additionalData : `
          @use "sass:math";
          @import "src/styles/_shared.scss";
        `
      }
    }
  },

  // import aliases
  resolve : {
    alias : {
      '@'            : path.resolve(__dirname, 'src/'),
      '@components'  : path.resolve(__dirname, 'src/components'),
      '@pages'       : path.resolve(__dirname, 'src/pages'),
      '@assets'      : path.resolve(__dirname, 'src/assets'),
      '@styles'      : path.resolve(__dirname, 'src/styles'),
      '@settings'    : path.resolve(__dirname, 'src/settings'),
      '@utils'       : path.resolve(__dirname, 'src/utils'),
      '@store'       : path.resolve(__dirname, 'src/store'),
      '@composables' : path.resolve(__dirname, 'src/composables')
    },
  },
});
