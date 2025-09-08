// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://ChimiGit.github.io',
  base: '/alife-web/',
  devToolbar: {
    enabled: false,
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
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
    server: {
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        '.ngrok-free.app',
        '.ngrok.io',
        '.ngrok.app',
        '.trycloudflare.com',
        'americas-municipal-express-philips.trycloudflare.com',
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
