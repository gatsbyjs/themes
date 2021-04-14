# gatsby-theme-i18n-react-i18next

A Gatsby theme for providing localization support via [react-i18next](https://react.i18next.com/). This theme sets up [react-i18next's context provider](https://react.i18next.com/latest/i18nextprovider) so that you can access your translations on every page.

## Installation

**Note:** This theme is designed to work as an add-on to [`gatsby-theme-i18n`](https://www.gatsbyjs.com/plugins/gatsby-theme-i18n/) and will not work without it! Please follow its setup instructions before starting with these here!

1. Install the theme and its peerDependencies.

```shell
npm install gatsby-theme-i18n-react-i18next react-i18next i18next
```

2. Add the configuration to your `gatsby-config.js` file:

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-i18n-react-i18next`,
      options: {
        locales: `./i18n/react-i18next`,
        i18nextOptions: {
          ns: ["translation", "blog"],
        },
      },
    },
  ],
}
```

## Usage

Place your `<locale>.json` files inside the directory you pointed to with `locales`.

You can also see an [official example](https://github.com/gatsbyjs/themes/tree/master/starters/example-react-i18next) to learn more.

### Theme options

| Key              | Default Value | Description                                                                                                                               |
| ---------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `locales`        | none          | The directory where you'll store the locales files                                                                                        |
| `i18nextOptions` | `{}`          | You can pass in any valid [i18next](https://www.i18next.com/overview/configuration-options) configuration option for the i18next instance |
