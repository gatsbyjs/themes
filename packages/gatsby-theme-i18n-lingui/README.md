# gatsby-theme-i18n-lingui

A Gatsby theme for providing localization support via [LinguiJS](https://lingui.js.org/). This theme sets up Lingui's context provider so that you can access your translations on every page.

## Installation

1. Install the theme

```shell
npm install gatsby-theme-i18n-lingui
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

```
{
  "localeDir": "i18n/lingui",
  "srcPathDirs": ["src/"],
  "srcPathIgnorePatterns": ["__tests__"],
  "format": "po",
  "sorting": "origin",
  "extractBabelOptions": {
    "presets": [
      "babel-preset-gatsby"
    ]
  }
}
```

You can find all options in [Lingui's documentation](https://lingui.js.org/ref/conf.html).
Make sure that the `localeDir` is identical with the same option in the theme.

4. Add three scripts to your `package.json`file:

```json
"scripts": {
  "add-locale": "lingui add-locale",
  "extract": "lingui extract",
  "compile": "lingui compile"
},
```

## Usage

Use Lingui's scripts to add locales, extract messages and compile those to `messages.js` files. The theme will leverage those compiled files, so make sure that you did those steps before using the theme.

### Theme options

| Key         | Default Value | Description                                       |
| ----------- | ------------- | ------------------------------------------------- |
| `localeDir` | none          | The directory where you'll store the lingui files |
