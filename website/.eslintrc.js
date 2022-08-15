// @ts-check

const { getTsconfigPath } = require("@grikomsn/style-guide/eslint/helpers");

/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    require.resolve("@grikomsn/style-guide/eslint/base"),
    require.resolve("@grikomsn/style-guide/eslint/react"),
    require.resolve("@grikomsn/style-guide/eslint/next"),
    require.resolve("@grikomsn/style-guide/eslint/typescript"),
  ],
  ignorePatterns: [".next", "__generated__", "node_modules", "out", "public/assets", "ui/seo/*.jsx"],
  parserOptions: {
    project: getTsconfigPath(),
  },
  root: true,
};

module.exports = eslintConfig;
