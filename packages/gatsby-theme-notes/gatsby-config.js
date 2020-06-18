module.exports = (options) => {
  const {
    mdxOtherwiseConfigured = false,
    mdx: legacyConfigureMdxFlag = true,
    mdxLayouts = {},
    preset = `gatsby-theme-ui-preset`,
  } = options

  return {
    siteMetadata: {
      title: `Notes Title Placeholder`,
      description: `Description placeholder`,
      siteUrl: `http://example.com/`,
    },
    plugins: [
      !mdxOtherwiseConfigured &&
        legacyConfigureMdxFlag && {
          resolve: `gatsby-plugin-mdx`,
          options: {
            extensions: [`.md`, `.mdx`],
            defaultLayouts: {
              default: require.resolve(`./src/components/layout`),
              ...mdxLayouts,
            },
          },
        },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.contentPath || `content/notes`,
          name: options.contentPath || `content/notes`,
        },
      },
      `gatsby-plugin-redirects`,
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-plugin-compile-es6-packages`,
        options: {
          modules: [`gatsby-theme-notes`],
        },
      },
      {
        resolve: `gatsby-plugin-theme-ui`,
        options: {
          preset: preset === false ? {} : preset, // Allow a user to use only local shadowing with no preset
        },
      },
    ].filter(Boolean),
  }
}
