// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [react(), compression()],
  server: {
    fs: {
      deny: ['.env', '.env.*', '*.{crt,pem}', 'custom.secret']
    }
  },
  build: {
    sourcemap: true,
  },
});