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
        // Core dependencies
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
        'es-module-lexer',
        'devalue',
        'unstorage',
        'destr',
        // Astro and related
        'astro',
        '@astrojs/vercel',
        '@astrojs/react',
        '@astrojs/markdown-remark',
        // Build tools
        'magic-string',
        'rollup',
        '@rollup/plugin-commonjs',
        '@rollup/plugin-node-resolve',
        'vite',
        // Markdown and content
        'remark-gfm',
      ],
    },
  },
  markdown: {
    remarkPlugins: ['remark-gfm'],
  },
});
