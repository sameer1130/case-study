import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// vite.config.js
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'


export default {
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: false})],
    }),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './src')}/`,
    },
  },
}


