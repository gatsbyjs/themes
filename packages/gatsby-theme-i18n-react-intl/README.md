# gatsby-theme-i18n-react-intl

A Gatsby theme for providing localization support via [react-intl](https://formatjs.io/docs/react-intl). This theme sets up react-intl's context provider so that you can access your translations on every page.

## Installation

1. Install the theme

```shell
npm install gatsby-theme-i18n-react-intl
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

### Theme options

| Key             | Default Value | Description                                                                           |
| --------------- | ------------- | ------------------------------------------------------------------------------------- |
| `defaultLocale` | none          | The default locale. Place your other locale files as siblings into the same directory |
