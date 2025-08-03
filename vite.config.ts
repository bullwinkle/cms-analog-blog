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
      }
    }
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      prerender: {
        routes: [
          '/blog',
          '/blog/posts/build-analog-blog',
          '/blog/posts/git-tutorial',
          '/blog/posts/view-transition-api',
          '/about',
          '/contact',
        ],
      },
      nitro: {
        preset: 'vercel',
        rollupConfig: {
          output: {
            manualChunks: {
              'angular-ssr': ['@angular/platform-server'],
            }
          }
        }
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
