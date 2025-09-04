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
        'path-to-regexp',
        'path-to-regexp-updated',
        // Astro and related
        'astro',
        '@astrojs/vercel',
        '@astrojs/react',
        '@astrojs/markdown-remark',
        '@vercel/routing-utils',
        // Build tools
        'magic-string',
        'rollup',
        '@rollup/plugin-commonjs',
        '@rollup/plugin-node-resolve',
        'vite',
        // Markdown and content
        'remark-gfm',
        'deterministic-object-hash',
      ],
    },
  },
  markdown: {
    remarkPlugins: ['remark-gfm'],
  },
});
