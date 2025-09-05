// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://ChimiGit.github.io',
  base: '/',
  devToolbar: {
    enabled: false,
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'terser',
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
