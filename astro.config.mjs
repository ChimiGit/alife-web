// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      jsxRuntime: 'automatic',
    }),
  ],
  output: 'static',
  site: 'https://alife.institute',
  base: '/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  devToolbar: {
    enabled: false,
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets',
  },
  vite: {
    // @ts-ignore - Tailwind v4 compatibility issue
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      allowedHosts: ['localhost', '127.0.0.1', 'https://alife.institute'],
      headers: {
        'ngrok-skip-browser-warning': 'true',
        'cf-tunnel-skip-browser-warning': 'true',
      },
    },
  },
  markdown: {
    remarkPlugins: ['remark-gfm'],
  },
});
