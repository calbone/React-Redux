module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      ecmaVersion: 2017,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 100,
        "singleQuote": true,
        "tabWidth": 4
      }
    ],
    "react/prop-types": "warn",
    "no-extra-semi": "error",
    // indent: ["error", "tab"],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: [
      "error",
      "always",
      {
        omitLastInOneLineBlock: true
      }
    ]
  }
};
