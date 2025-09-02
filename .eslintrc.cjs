module.exports = {
  extends: ["astro", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // TypeScript specific rules
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": "off",

    // General rules
    "no-console": "warn",
    "no-debugger": "error",
    "no-unused-vars": "off", // Use TypeScript version instead
    "prefer-const": "off", // Use TypeScript version instead

    // Astro specific rules
    "astro/no-conflict-set-directives": "error",
    "astro/no-unused-define-vars-in-style": "error",

    // Code style
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "never"],
    "no-trailing-spaces": "error",
    "eol-last": "error",

    // Disable problematic rules
    "max-len": "off",
    "no-plusplus": "off",
    "no-restricted-properties": "off",
    "no-param-reassign": "off",
    "consistent-return": "off",
    "no-use-before-define": "off",
    "func-names": "off",

    // Disable parsing errors for Astro files
    "astro/no-unused-define-vars-in-style": "off",
  },
  overrides: [
    {
      // Apply to Astro files
      files: ["*.astro"],
      extends: ["plugin:astro/recommended"],
      rules: {
        "astro/no-conflict-set-directives": "error",
        "astro/no-unused-define-vars-in-style": "off",
        "astro/no-conflict-set-directives": "off",
      },
    },
    {
      // Apply to TypeScript files
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-non-null-assertion": "warn",
      },
    },
  ],
};
