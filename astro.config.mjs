// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: false,
    },
    speedInsights: {
      enabled: false,
    },
  }),
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
    ssr: {
      noExternal: true,
    },
  },
  markdown: {
    remarkPlugins: ['remark-gfm'],
  },
});
