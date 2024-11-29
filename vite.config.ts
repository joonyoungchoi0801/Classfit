import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import fs from 'fs';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // build 오류 방지
  },
  base: '/',
  server: {
    https: {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem'),
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      // { find: '@components', replacement: '/src/components' },
      // { find: '@styles', replacement: '/src/styles' },
      // { find: '@pages', replacement: '/src/pages' },
      // { find: '@utils', replacement: '/src/utils' },
      // { find: '@hooks', replacement: '/src/hooks' },
      // { find: '@api', replacement: '/src/api' },
      // { find: '@assets', replacement: '/src/assets' },
      // { find: '@public', replacement: '/public' },
    ],
  },
});
