module.exports = {
  env: {
    browser: true,
    node: true,
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
      jsx: true
    },
    sourceType: "module",
    ecmaVersion: 2017
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/display-name": 0,
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        singleQuote: true,
        tabWidth: 2,
      }
    ],
    "no-console": "off",
    "react/prop-types": "warn",
    "no-extra-semi": "error",
    "linebreak-style": ["error", "unix"],
    semi: [
      "error",
      "always",
      {
        omitLastInOneLineBlock: true
      }
    ]
  }
};
