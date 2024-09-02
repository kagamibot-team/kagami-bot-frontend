import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";

import eslint from '@eslint/js';
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default tseslint.config(
    eslint.configs.recommended,
    includeIgnoreFile(gitignorePath),
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        plugins: {
            'typescript-eslint': tseslint.plugin,
        },
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                project: './tsconfig.json',
                extraFileExtensions: ['.vue'],
                sourceType: 'module',
            },
        },
        files: [
            "**/*.ts",
            "**/*.cts",
            "**/*.js",
            "**/*.jsx",
            "**/*.cjs",
            "**/*.mjs",
            "**/*.vue",
        ],
        rules: {
            'vue/prop-name-casing': ["error", "snake_case"],
        }
    },
    eslintConfigPrettier,
);