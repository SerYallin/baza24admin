// @ts-check
import eslint from '@eslint/js';
import { configs } from 'eslint-config-airbnb-extended/legacy';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginImport from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';

const project = './tsconfig.json';



export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...configs.base.typescript,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      import: pluginImport,
      react: reactPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',
      'react/display-name': ['off', { ignoreTranspilerName: false }],
      'import/no-extraneous-dependencies': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/order': ['warn', { 'newlines-between': 'always' }],
      'import/prefer-default-export': 'off',
      'import/extensions': ['error', { 'jsx-a11y': 'off' }],
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: ['state'],
        },
      ],
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: ['function-declaration', 'arrow-function'],
          unnamedComponents: 'arrow-function',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        alias: {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
          map: [
            ['@app', './src'],
            ['@components', './src/components'],
            ['@locales', './src/locales'],
            ['@entities', './src/entities'],
            ['@resources', './src/resources'],
            ['@admin', './src/admin'],
            ['@middlewares', './src/middlewares'],
            ['@utils', './src/utils'],
            ['@db', './src/db'],
          ],
        },
        typescript: {
          alwaysTryTypes: true,
          project,
        },
      },
    },
  },
);