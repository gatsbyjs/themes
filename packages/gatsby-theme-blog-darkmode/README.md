## Gatsby Theme Blog Dark Mode

NOTE: This theme is designed to work as an add-on to `gatsby-theme-blog` and will not work without it!


This theme enables a darkmode toggle in the header of your blog. It leverages `colors.mode.dark` in Theme UI which you can change by shadowing.

## Install instructions

1. Install the dependencies
```shell
npm install gatsby-theme-blog-darkmode gatsby-theme-blog
```

2. Configure your site

```javascript
// gatsby-config.js
module.exports = {
    plugins: [
        `gatsby-theme-blog`,
        `gatsby-theme-blog-darkmode`
    ]
}
```

## Shadowing styles

To shadow styles, create `src/gatsby-plugin-theme-ui/index.js`. Include an object with the styles you'd prefer.

```javascript
  colors: {
      modes: {
        dark: {
            text: tomato,
        },
    },
  },
```


