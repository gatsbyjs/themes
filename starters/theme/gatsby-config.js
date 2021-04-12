module.exports = {
  siteMetadata: {
    title: `Shadowed Site Title`,
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-notes`,
      options: {
        mdx: false,
        basePath: `/notes`,
      },
    },
    // with gatsby-plugin-theme-ui, the last theme in the config
    // will override the theme-ui context from other themes
    {
      resolve: `gatsby-theme-blog`,
      options: {
        prismPreset: `prism-okaidia`,
      },
    },
    {
      resolve: `gatsby-theme-blog-darkmode`,
      options: {},
    },
  ],
}
