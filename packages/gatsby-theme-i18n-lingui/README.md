# gatsby-theme-i18n-lingui

A Gatsby theme for providing localization support via [Lingui](https://lingui.js.org/). This theme sets up [Lingui's context provider](https://lingui.js.org/ref/react.html#i18nprovider) so that you can access your translations on every page.

## Installation

**Note:** This theme is designed to work as an add-on to [`gatsby-theme-i18n`](https://www.gatsbyjs.com/plugins/gatsby-theme-i18n/) and will not work without it! Please follow its setup instructions before starting with these here!

1. Install the theme and its peerDependencies.

```shell
npm install gatsby-theme-i18n-lingui @lingui/react @lingui/core
```

Also install any devDependencies.

```shell
npm install --dev babel-preset-gatsby @lingui/macro @lingui/cli
```

2. Add the configuration to your `gatsby-config.js` file:

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-i18n-lingui`,
      options: {
        localeDir: `./i18n/lingui`,
      },
    },
  ],
}
```

3. Create a `.linguirc` file at the root of your project:

```json
{
  "locales": ["your", "locales"],
  "catalogs": [
    {
      "path": "<rootDir>/i18n/lingui/{locale}/messages",
      "include": ["<rootDir>/src"],
      "exclude": ["**/node_modules/**", "**/__tests__/**"]
    }
  ],
  "format": "po",
  "extractBabelOptions": {
    "presets": ["babel-preset-gatsby"]
  }
}
```

You can find all options in [Lingui's documentation](https://lingui.js.org/ref/conf.html).
Make sure that the `localeDir` is identical with the same option in the theme.

4. Add three scripts to your `package.json`file:

```json
{
  "scripts": {
    "extract": "lingui extract",
    "compile": "lingui compile"
  }
}
```

## Usage

Use Lingui's scripts to extract messages and compile those to `messages.js` files. The theme will leverage those compiled files, so make sure that you did those steps before using the theme. The `localeDir` option must be aligned with the [`catalogs`](https://lingui.js.org/ref/conf.html#catalogs) option of Lingui's config option.

You can also see an [official example](https://github.com/gatsbyjs/themes/tree/master/starters/example-lingui) to learn more.

### Theme options

| Key         | Default Value | Description                                       |
| ----------- | ------------- | ------------------------------------------------- |
| `localeDir` | none          | The directory where you'll store the Lingui files |
