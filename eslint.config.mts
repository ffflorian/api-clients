import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import {defineConfig, globalIgnores} from 'eslint/config';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  globalIgnores(['**/node_modules/**', '**/dist/**', '**/docs/**']),
  tseslint.configs.recommended,
  {
    extends: ['js/recommended', importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {globals: {...globals.browser, ...globals.node}},
    plugins: {js},
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'import/order': 'error',
      'no-unused-vars': 'off',
    },
  },
]);
