// @ts-check

import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        rules: {
            'semi': 'error',
            'react/no-children-prop': 'off',
            '@typescript-eslint/no-unused-vars': ["error", {
                'ignoreRestSiblings': true,
            }]
        }
    },
];

export default eslintConfig;
