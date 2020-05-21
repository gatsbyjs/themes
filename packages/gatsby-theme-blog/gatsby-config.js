module.exports = options => {
  const {disableThemeUiStyling = false, ignorePreset = false} = options
  const preset = options.preset || `gatsby-theme-ui-preset`

  return {
    plugins: [
      {
        resolve: `gatsby-theme-blog-core`,
        options
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-twitter`,
      `gatsby-plugin-emotion`,
      !disableThemeUiStyling && {
        resolve: `gatsby-plugin-theme-ui`,
        options: {
          preset: ignorePreset ? {} : preset, // Allow a user to use only local shadowing with no preset
          prismPreset: options.prismPreset
        }
      }
    ].filter(Boolean)
  }
}
