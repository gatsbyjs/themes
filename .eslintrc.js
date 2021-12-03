module.exports = {
  parser: `@babel/eslint-parser`,
  extends: [
    `google`,
    `eslint:recommended`,
    `plugin:react/recommended`,
    `prettier`,
  ],
  plugins: [`prettier`, `react`, `filenames`],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: `module`,
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: [`@babel/preset-react`],
    },
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    before: true,
    after: true,
    spyOn: true,
    __PATH_PREFIX__: true,
    __BASE_PATH__: true,
    __ASSET_PREFIX__: true,
  },
  rules: {
    "arrow-body-style": [
      `error`,
      `as-needed`,
      { requireReturnForObjectLiteral: true },
    ],
    "no-unused-expressions": [
      `error`,
      {
        allowTaggedTemplates: true,
      },
    ],
    "filenames/match-regex": [`error`, `^[a-z-\\d\\.]+$`, true],
    "no-console": `off`,
    "no-inner-declarations": `off`,
    "prettier/prettier": `error`,
    quotes: [`error`, `backtick`],
    "react/display-name": `off`,
    "react/jsx-key": `warn`,
    "react/no-unescaped-entities": `off`,
    "react/prop-types": `off`,
    "require-jsdoc": `off`,
    "valid-jsdoc": `off`,
  },
  overrides: [
    {
      files: [
        `packages/**/gatsby-browser.js`,
        `packages/gatsby/cache-dir/**/*`,
      ],
      env: {
        browser: true,
      },
      globals: {
        ___loader: false,
        ___emitter: false,
      },
    },
    {
      files: [`cypress/e2e/**/*`, `cypress/support/**/*`],
      globals: {
        cy: false,
        Cypress: false,
      },
    },
  ],
  settings: {
    react: {
      version: `16.4.2`,
    },
  },
}
