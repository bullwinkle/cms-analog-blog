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
      // Disable prerendering to reduce memory usage
      // prerender: {
      //   routes: [
      //     '/blog',
      //     '/about',
      //     '/contact',
      //   ],
      //   // Reduce memory usage during prerendering
      //   concurrency: 1,
      // },
      nitro: {
        preset: 'vercel',
        rollupConfig: {
          output: {
            manualChunks: {
              'angular-ssr': ['@angular/platform-server'],
            }
          }
        },
        // Optimize memory usage for SSR builds
        experimental: {
          wasm: false
        },
        minify: false, // Reduce memory during minification
        storage: {
          // Disable file system cache to reduce memory
          fs: false
        },
      },      
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
