/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
    rollupOptions: {
      output: {
        manualChunks: {
          'angular-core': ['@angular/core'],
          'angular-common': ['@angular/common'],
          'angular-router': ['@angular/router'],
        }
      },
      // Reduce memory usage during build
      maxParallelFileOps: 2,
    }
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      // Completely disable SSR and prerendering to reduce memory usage
      ssr: false,
      nitro: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
