# Migration Guide

## Migrating from `gatsby-theme-blog` / `gatsby-theme-blog-core` / `gatsby-theme-blog-darkmode` v2 to v3

The 3.0 release includes breaking changes as the theme was upgraded to Gatsby v3, Theme UI v0.7, emotion v11, and migrated from `gatsby-image` to `gatsby-plugin-image`.

Before upgrading to 3.0 you'll want to update your core `gatsby` version to v3 as well: [Migrating from v2 to v3 documentation](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/).

**All versions updated** - All versions (Gatsby plugins, third-party packages) were updated to their latest versions. This includes breaking changes like updating to emotion 11.

**Plugin Options** - The `mdx` option was replaced by `mdxOtherwiseConfigured`.

**Images** - `gatsby-image` and its queries (fluid/fixed) were replaced with the new `gatsby-plugin-image`. See [Migrating from gatsby-image to gatsby-plugin-image](https://www.gatsbyjs.com/docs/reference/release-notes/image-migration-guide/).

**Theme UI** - Theme UI was updated to v0.7. See [Theme UI's migration guide](https://theme-ui.com/migrating).

## Migrating from `gatsby-theme-notes` v2 to v3

Before upgrading to 3.0 you'll want to update your core `gatsby` version to v3 as well: [Migrating from v2 to v3 documentation](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/).

**All versions updated** - All versions (Gatsby plugins, third-party packages) were updated to their latest versions. This includes breaking changes like updating to emotion 11.

**Plugin Options** - The `mdx` option was replaced by `mdxOtherwiseConfigured`.

**Theme UI** - Theme UI was updated to v0.7. See [Theme UI's migration guide](https://theme-ui.com/migrating).

## Migrating from `gatsby-theme-i18n` v1 to v2

Before upgrading to 3.0 you'll want to update your core `gatsby` version to v3 as well: [Migrating from v2 to v3 documentation](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/).

**New peerDependencies** - `gatsby-plugin-react-helmet` and `react-helmet` are now `peerDependencies`. You'll need to install them yourself: `npm install gatsby-plugin-react-helmet react-helmet`. Also add `gatsby-plugin-react-helmet` to your `gatsby-config.js`.

## Migrating from `gatsby-theme-i18n-lingui` v1 to v2

Before upgrading to 3.0 you'll want to update your core `gatsby` version to v3 as well: [Migrating from v2 to v3 documentation](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/).

**Update to lingui v3** - The theme now requires lingui v3. All lingui dependencies were updated from v2 to v3. See [lingui's migration guide](https://lingui.js.org/releases/migration-3.html). This also means that you have to install `@lingui/core` as a new `dependency` and change your configuration file. See the [README](https://github.com/gatsbyjs/themes/tree/master/packages/gatsby-theme-i18n-lingui) for more information.

## Migrating from `gatsby-theme-i18n-react-i18next` / `gatsby-theme-i18n-react-intl` v1 to v2

Before upgrading to 3.0 you'll want to update your core `gatsby` version to v3 as well: [Migrating from v2 to v3 documentation](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/).

**Update to peerDependencies**. These updates to the `devDependencies` / `peerDependencies` were made:

- Update `i18next` from 19.x to 20.x
- Update `react-intl` from 4.x to 5.x, so you'll have to use `react-intl` v5

## Migrating from `gatsby-theme-blog` v1 to v2

The 2.0 release includes breaking changes. Note that many of the changes are related to the default styling in the blog theme. If you have no interest in additional flexibility with styles the 1.6 release may be sufficient as it includes new features without the breaking changes.

Before upgrading to 2.0 you'll want to update your core `gatsby` version as well.

**Change in data structure** - Instead of querying for the `node` object inside the `edges` array, all queries now look for `nodes`. If you're shadowing files and accessing data directly you may need to account for this.

**Removal of darkmode toggle** - This theme no longer comes with a darkmode toggle. If you'd like to use the old one it is now available as a parallel theme you can install, [`gatsby-theme-blog-darkmode`](https://www.gatsbyjs.com/plugins/gatsby-theme-blog-darkmode/). Please see the README for further instructions.

### Style specific migration notes

With the new version of `gatsby-plugin-theme-ui` there are a number of changes to the way styles are passed and how they compose.

**Change in shadow structure** - When shadowing files in `gatsby-plugin-theme-ui` the directory can no longer be nested inside the `gatsby-theme-blog` directory. It needs to be at the root level. Additionally, all content needs to be shadowed via `index.js`. You can make use of files like `colors.js` but they will not shadow unless explicitly exported from `index.js`.

**Default deepmerge** - Any shadowed styles will deepmerge with the `gatsby-theme-blog` built-in styles automatically.

If your previous code look like this:

```javascript
import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

const darkBlue = `#007acc`
const lightBlue = `#66E0FF`
const blueGray = `#282c35`

const theme = merge(defaultThemeColors, {
  text: blueGray,
  primary: darkBlue,
  heading: blueGray,
})

export default theme
```

It should now look like this. Noting that the merge still occurs by default.

```javascript
const darkBlue = `#007acc`
const lightBlue = `#66E0FF`
const blueGray = `#282c35`

const theme = {
  text: blueGray,
  primary: darkBlue,
  heading: blueGray,
}

export default theme
```

If you did not merge in the official theme styles and instead overrode them you can still do so. You'll want to remove the preset by passing the option in `gatsby-config.js`

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        preset: false,
      },
    },
  ],
}
```

**No built in Typography.js** - [Typography.js](https://kyleamathews.github.io/typography.js/) is no longer part of the default styling. If you'd like to add it locally follow the [Theme UI docs](https://theme-ui.com/packages/typography/#extending-the-typographyjs-theme) or note the code snippet below. The original theme used `typography-theme-wordpress-2016` and also imported `typeface-montserrat` and `typeface-merriweather`.

Another thing to keep in mind if you're pulling in typography for local shadowing is that the order of merging is different. The most common issue is that the spacing underneath code blocks is off. To fix that, include the following code in `src/gatsby-plugin-theme-ui/index.js`.

```javascript
import { toTheme } from "@theme-ui/typography"
import wp2016 from "typography-theme-wordpress-2016"
import { merge } from "theme-ui"

const theme = merge(toTheme(wp2016), {
  styles: {
    pre: {
      margin: `0 0 2 0`,
    },
  },
})

export default theme
```
