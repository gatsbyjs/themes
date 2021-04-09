module.exports = (options) => {
  const { preset = `gatsby-theme-ui-preset` } = options
  return {
    plugins: [
      {
        resolve: `gatsby-theme-blog-core`,
        options,
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-twitter`,
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-plugin-theme-ui`,
        options: {
          preset: preset === false ? {} : preset, // Allow a user to use only local shadowing with no preset
          prismPreset: options.prismPreset,
        },
      },
    ],
  }
}
