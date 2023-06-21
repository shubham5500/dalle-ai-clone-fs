module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:node/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "mongoose/no-model-alias": "error",
    "mongoose/no-invalid-findoneandupdate": "error",
    "mongoose/no-invalid-model": "error",
    "mongoose/no-unsupported-features": "warn"
  },
};
