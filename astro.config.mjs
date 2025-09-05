// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://ChimiGit.github.io',
  base: '/alife-web',
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        '.ngrok-free.app',
        '.ngrok.io',
        '.ngrok.app',
      ],
      headers: {
        'ngrok-skip-browser-warning': 'true',
      },
    },
  },
  markdown: {
    remarkPlugins: ['remark-gfm'],
  },
});
