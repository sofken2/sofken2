// @ts-check

import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  // stylistic.configs.customize({
  //   flat: true,
  //   indent: 2,
  //   quotes: 'single',
  //   semi: true,
  //   jsx: false,
  //   commaDangle: 'always-multiline',
  //   arrowParens: true,
  //   blockSpacing: true,
  //   braceStyle: '1tbs',
  //   quoteProps: 'consistent',
  // }),
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'quotes': ['error', 'single'],
      'react/no-children-prop': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {
        'ignoreRestSiblings': true,
      }],
    },
  },
];

export default eslintConfig;
