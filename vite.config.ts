import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/multiagentdronesystems.com/', // must match your GitHub repo name
  plugins: [react()],
  build: {
    outDir: 'dist', // stay consistent with deploy.yml
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
