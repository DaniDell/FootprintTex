// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      deny: ['.env', '.env.*', '*.{crt,pem}', 'custom.secret']
    }
  },
  build: {
    sourcemap: true,
  },
});
