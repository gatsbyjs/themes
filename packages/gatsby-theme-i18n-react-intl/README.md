# gatsby-theme-i18n-react-intl

A Gatsby theme for providing localization support via [react-intl](https://formatjs.io/docs/react-intl). This theme sets up react-intl's context provider so that you can access your translations on every page.

## Installation

**Note:** This theme is designed to work as an add-on to [`gatsby-theme-i18n`](https://www.gatsbyjs.com/plugins/gatsby-theme-i18n/) and will not work without it! Please follow its setup instructions before starting with these here!

1. Install the theme and its peerDependencies.

```shell
npm install gatsby-theme-i18n-react-intl react-intl
```

2. Add the configuration to your `gatsby-config.js` file:

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-i18n-react-intl`,
      options: {
        defaultLocale: `./i18n/react-intl/en.json`,
      },
    },
  ],
}
```

## Usage

Place your `<locale>.json` files inside the directory you pointed to with `defaultLocale`.

You can also see an [official example](https://github.com/gatsbyjs/themes/tree/master/starters/example-react-intl) to learn more.

### Theme options

| Key             | Default Value | Description                                                                           |
| --------------- | ------------- | ------------------------------------------------------------------------------------- |
| `defaultLocale` | none          | The default locale. Place your other locale files as siblings into the same directory |
