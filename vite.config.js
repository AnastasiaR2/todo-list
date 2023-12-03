import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportAsDefault: false,
      },
    }),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
});
