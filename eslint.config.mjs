// @ts-check

import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  stylistic.configs.customize({
    flat: true,
    indent: 2,
    quotes: 'single',
    semi: true,
    jsx: true,
    commaDangle: 'always-multiline',
    arrowParens: true,
    blockSpacing: true,
    braceStyle: '1tbs',
    quoteProps: 'consistent',
  }),
  {
    name: '@stylistic/override',
    rules: {
      '@stylistic/quotes': ['error', 'single', {
        'avoidEscape': true,
        'allowTemplateLiterals': true,
      }],
      '@stylistic/jsx-closing-tag-location': ['error', 'line-aligned'],
      '@stylistic/jsx-closing-bracket-location': ['error', 'after-props'],
      '@stylistic/jsx-one-expression-per-line': 'off',
      '@stylistic/jsx-wrap-multilines': ['error', {}],
    },
  },
  {
    rules: {
      'react/no-children-prop': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {
        'ignoreRestSiblings': true,
      }],
    },
  },
  {
    files: ['**/*.config.*'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
];

export default eslintConfig;
