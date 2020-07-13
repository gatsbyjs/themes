# gatsby-theme-i18n-react-i18next

A Gatsby theme for providing localization support via [react-i18next](https://react.i18next.com/). This theme sets up react-i18next's context provider so that you can access your translations on every page.

## Installation

1. Install the theme

```shell
npm install gatsby-theme-i18n-react-i18next
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

### Theme options

| Key              | Default Value | Description                                                                                                                               |
| ---------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `locales`        | none          | The directory where you'll store the locales files                                                                                        |
| `i18nextOptions` | `{}`          | You can pass in any valid [i18next](https://www.i18next.com/overview/configuration-options) configuration option for the i18next instance |
