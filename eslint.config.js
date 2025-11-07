import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import cypress from 'eslint-plugin-cypress'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'no-undef': 'off', // <- important for TS files
    },
  },
   {
    files: [
      'cypress/**/*.{ts,tsx,js,jsx}',
      'cypress/**/*.{cy,spec}.{ts,tsx,js,jsx}',
    ],
    plugins: { cypress },
    // Equivalent of "plugin:cypress/recommended" in flat config:
    rules: {
      ...cypress.configs.recommended.rules,
      // Chai-style assertions can trip these:
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-undef': 'off',
    },
    languageOptions: {
      // Tell ESLint about Mocha/Cypress globals
      globals: {
        ...globals.mocha, // describe/it/before/after
        cy: 'readonly',
        Cypress: 'readonly',
      },
      // (Optional) point type-aware rules at your tsconfigs for Cypress files
      parserOptions: {
        project: ['./tsconfig.app.json', './cypress/tsconfig.json'],
        tsconfigRootDir: new URL('.', import.meta.url).pathname,
      },
    },
  },
])
