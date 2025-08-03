/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog, { type PrerenderContentFile } from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      prerender: {
        routes: [
          '/',
          '/blog',
          {
            contentDir: 'src/content/blog',
            transform: (file: PrerenderContentFile) => {
              if (file.attributes['draft']) return false;
              const slug = file.attributes['slug'] || file.name;
              return `/blog/posts/${slug}`;
            }
          },
          // '/blog/posts/build-analog-blog',
          // '/blog/posts/bun-better-then-nodejs',
          // '/blog/posts/git-tutorial',
          // '/blog/posts/view-transition-api',
          '/about',
          '/contact',
          '/404.html',
        ],
      },
      nitro: {
        // preset: 'vercel',
        routeRules: {
          '/404.html': { prerender: false },
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
