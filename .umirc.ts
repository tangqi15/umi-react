import { defineConfig } from 'umi';
const { resolve } = require('path');
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  dva: { immer: true },
  alias: {
    components: resolve(__dirname, './src/components'),
    common: resolve(__dirname, './src/common'),
    utils: resolve(__dirname, './src/utils'),
    // '@': resolve(__dirname, './src')
  },
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:10086',
      changeOrigin: true,
    },
  },
});
