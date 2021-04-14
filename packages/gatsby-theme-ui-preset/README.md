<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  The Gatsby Theme UI Preset 
</h1>

A Theme UI preset that contains the configuration used in other official Gatsby themes, e.g. `gatsby-theme-blog`.

## Installation

### For an existing site

If you already have a site you'd like to add the `theme-ui` theme to, you can manually configure it.

1. Install the theme

```shell
npm install gatsby-theme-ui-preset
```

2. Add the configuration to your `gatsby-config.js` file

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: `gatsby-theme-ui-preset`,
      },
    },
  ],
}
```
