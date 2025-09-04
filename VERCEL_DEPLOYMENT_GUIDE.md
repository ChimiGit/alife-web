# Vercel Deployment Guide for Astro

## Problem

Serverless functions on Vercel were crashing with `ERR_MODULE_NOT_FOUND` errors because Vite was treating dependencies as external instead of bundling them.

## Solution

Use `noExternal` configuration in Vite to force bundling of all required dependencies.

## Configuration

### astro.config.mjs

```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: false },
    speedInsights: { enabled: false },
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
```

### vercel.json

```json
{
  "framework": "astro",
  "functions": {
    "dist/server/entry.mjs": {
      "maxDuration": 30,
      "runtime": "nodejs22.x"
    }
  },
  "buildCommand": "pnpm run build",
  "outputDirectory": ".vercel/output",
  "installCommand": "pnpm install",
  "build": {
    "env": {
      "NODE_ENV": "production"
    }
  },
  "regions": ["iad1"]
}
```

## Required Dependencies

Install these packages to ensure all dependencies are available:

```bash
pnpm add kleur cookie es-module-lexer devalue unstorage magic-string rollup @rollup/plugin-commonjs @rollup/plugin-node-resolve @types/node@^20.0.0 destr
```

## Why This Works

1. **noExternal Configuration**: Forces Vite to bundle dependencies instead of treating them as external
2. **Comprehensive List**: Includes all common dependencies that might be missing
3. **Proper Vercel Config**: Ensures correct runtime and build settings

## Troubleshooting

If you encounter new `ERR_MODULE_NOT_FOUND` errors:

1. Install the missing package: `pnpm add <package-name>`
2. Add it to the `noExternal` list in `astro.config.mjs`
3. Rebuild: `pnpm run build`

### Common Missing Dependencies

The following packages are commonly missing and should be added to `noExternal`:

- `kleur` - Console colors
- `cookie` - Cookie parsing
- `es-module-lexer` - ES module parsing
- `devalue` - Data serialization
- `unstorage` - Storage abstraction
- `destr` - Destructuring utilities
- `magic-string` - String manipulation
- `rollup` - JavaScript bundler

## Notes

- This approach bundles all dependencies into the serverless function
- Function size will be larger but more reliable
- No need to install packages one by one in the future
- Works with Astro 5.12.0 and Vercel adapter
