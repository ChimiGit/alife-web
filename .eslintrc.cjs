module.exports = {
  extends: ['astro', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  root: true,
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Prettier integration
    'prettier/prettier': 'error',

    // TypeScript specific rules
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'off',

    // General rules
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-unused-vars': 'off', // Use TypeScript version instead
    'prefer-const': 'off', // Use TypeScript version instead

    // Astro specific rules
    'astro/no-conflict-set-directives': 'error',
    'astro/no-unused-define-vars-in-style': 'error',

    // Disable problematic rules
    'max-len': 'off',
    'no-plusplus': 'off',
    'no-restricted-properties': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'no-use-before-define': 'off',
    'func-names': 'off',

    // Disable parsing errors for Astro files
    'astro/no-unused-define-vars-in-style': 'off',
  },
  overrides: [
    {
      // Apply to Astro files
      files: ['*.astro'],
      extends: ['plugin:astro/recommended'],
      rules: {
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'off',
        'astro/no-conflict-set-directives': 'off',
      },
    },
    {
      // Apply to TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn',
      },
    },
  ],
};
