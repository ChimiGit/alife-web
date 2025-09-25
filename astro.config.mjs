// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  site: 'https://ChimiGit.github.io/alife-web',
  base: '/alife-web/',
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
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        '.ngrok-free.app',
        '.ngrok.io',
        '.ngrok.app',
        '.trycloudflare.com',
        'americas-municipal-express-philips.trycloudflare.com',
        'https://reservations-poker-trademark-teacher.trycloudflare.com',
        'https://chimigit.github.io/alife-web',
      ],
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
