import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  console.log("⚡ Vite running in mode:", mode);

  return {
    plugins: [react()],
    base: mode === 'production' ? "/"    : '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
