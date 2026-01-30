import js from '@eslint/js';
import globals from 'globals';
import {configs as tseslintConfigs} from 'typescript-eslint';
import {defineConfig, globalIgnores} from 'eslint/config';
import oxlint from 'eslint-plugin-oxlint';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  globalIgnores(['**/node_modules/**', '**/dist/**']),
  js.configs.recommended,
  tseslintConfigs.recommended,
  {
    extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {js},
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      'import/order': 'error',
      'no-prototype-builtins': 'off',
      'no-redeclare': 'off',
      'no-unused-vars': 'off',
    },
  },
  ...oxlint.configs['flat/recommended'],
]);
