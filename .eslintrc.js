/* eslint-disable no-undef */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
  },
};
