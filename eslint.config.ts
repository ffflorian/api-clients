import js from '@eslint/js';
import globals from 'globals';
import {configs as tseslintConfigs} from 'typescript-eslint';
import {defineConfig, globalIgnores} from 'eslint/config';
import oxlint from 'eslint-plugin-oxlint';
import perfectionist from 'eslint-plugin-perfectionist';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  globalIgnores(['**/node_modules/**', '**/dist/**']),
  js.configs.recommended,
  tseslintConfigs.recommended,
  {
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      perfectionist.configs['recommended-alphabetical'],
    ],
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
      '@typescript-eslint/array-type': ['error', {default: 'array-simple'}],
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': ['error', {ignoreParameters: true}],
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/typedef': 'error',
      'constructor-super': 'error',
      curly: 'error',
      'id-length': ['error', {exceptions: ['_']}],
      'import/order': 'off',
      'no-console': ['error', {allow: ['error', 'info', 'warn']}],
      'no-const-assign': 'error',
      'no-duplicate-case': 'error',
      'no-else-return': 'error',
      'no-inner-declarations': 'error',
      'no-lonely-if': 'error',
      'no-magic-numbers': ['error', {ignore: [-1, 0, 1, 2]}],
      'no-prototype-builtins': 'off',
      'no-redeclare': 'off',
      'no-return-await': 'error',
      'no-sequences': 'error',
      'no-sparse-arrays': 'error',
      'no-trailing-spaces': 'error',
      'no-undef': 'error',
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'error',
      'no-unused-vars': 'off',
      'no-useless-return': 'error',
      'no-var': 'error',
      'one-var': ['error', 'never'],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      quotes: ['error', 'single', {allowTemplateLiterals: true, avoidEscape: true}],
      'sort-keys': 'off',
      'sort-vars': 'error',
      strict: ['error', 'global'],
    },
  },
  ...oxlint.configs['flat/recommended'],
]);
