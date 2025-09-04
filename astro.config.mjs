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
    ssr: {
      noExternal: [
        'kleur',
        'picocolors',
        'clsx',
        'cookie',
        'marked',
        'motion',
        'tailwind-merge',
        'radix-ui',
        'react',
        'react-dom',
      ],
    },
  },
  markdown: {
    remarkPlugins: ['remark-gfm'],
  },
});
