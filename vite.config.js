import { viteMockServe } from "vite-plugin-mock";
import { defineConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "components": resolve(__dirname, "./src/components"),
      "styles": resolve(__dirname, "./src/styles"),
      "utils": resolve(__dirname, "./src/utils"),
    }
  },
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'mock',
      prodEnabled: ConfigEnv !== 'serve',
      injectCode: `
        import { setupProdMockServer } from './mockProdServer';
        setupProdMockServer();
      `,
    })]
})
