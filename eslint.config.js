import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
  {
    ignores: ["node_modules/**", "dist/**", "build/**", "coverage/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },
  },
  {
    files: ["packages/web/**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["packages/core/**/*.{js,mjs,cjs}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@tactics/web",
              message: "core darf web nicht importieren. Siehe docs/RULES.md.",
            },
            {
              name: "@tactics/sim",
              message: "core darf sim nicht importieren. Siehe docs/RULES.md.",
            },
          ],
          patterns: [
            {
              group: ["@tactics/web/*", "**/packages/web/**", "../web/**"],
              message: "core darf web nicht importieren. Siehe docs/RULES.md.",
            },
            {
              group: ["@tactics/sim/*", "**/packages/sim/**", "../sim/**"],
              message: "core darf sim nicht importieren. Siehe docs/RULES.md.",
            },
          ],
        },
      ],
      "no-restricted-properties": [
        "error",
        {
          object: "Math",
          property: "random",
          message:
            "Zufall in core nur über einen injizierten, seedbaren Generator. Siehe docs/RULES.md.",
        },
      ],
    },
  },
  eslintConfigPrettier,
];
