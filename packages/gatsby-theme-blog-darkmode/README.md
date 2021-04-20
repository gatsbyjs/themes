## Gatsby Theme Blog Dark Mode

This theme enables a darkmode toggle in the header of your blog. It leverages `colors.mode.dark` in Theme UI which you can change by shadowing.

## Install instructions

**Note:** This theme is designed to work as an add-on to `gatsby-theme-blog` and will not work without it!

1. Install the dependencies

```shell
npm install gatsby-theme-blog-darkmode gatsby-theme-blog
```

2. Configure your site

```javascript
// gatsby-config.js
module.exports = {
  plugins: [`gatsby-theme-blog`, `gatsby-theme-blog-darkmode`],
}
```

## Shadowing styles

To shadow styles, create `src/gatsby-plugin-theme-ui/index.js`. Include an object with the styles you'd prefer.

```javascript
const theme = {
  colors: {
    modes: {
      dark: {
        text: tomato,
      },
    },
  },
}

export default theme
```

If you'd like to override only some styles you'll want to deepmerge.

```javascript
import { merge } from "theme-ui"
import darkmode from "gatsby-theme-blog-darkmode/src/gatsby-plugin-theme-ui"

const theme = merge(darkmode, {
  colors: {
    modes: {
      dark: {
        text: `tomato`,
      },
    },
  },
})

export default theme
```

## Migrating to `gatsby-theme-blog` 2.0

Once you install this as a parallel theme be sure to update your shadowed paths. Files inside this theme, such as the sun and moon assets, will now be referenced inside the `gatsby-theme-blog-darkmode` directory.
