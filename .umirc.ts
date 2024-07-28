import { defineConfig } from 'umi';
const { resolve } = require('path');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mock: false,
  publicPath: '/',
  dva: { immer: true, hmr: false },
  alias: {
    api: resolve(__dirname, './src/servicer/'),
    components: resolve(__dirname, './src/components'),
    common: resolve(__dirname, './src/common'),
    hook: resolve(__dirname, './src/hook'),
    // config: resolve(__dirname, './src/utils/config'),
    // themes: resolve(__dirname, './src/themes'),
    utils: resolve(__dirname, './src/utils'),
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:10086',
      changeOrigin: true,
    },
  },
});
