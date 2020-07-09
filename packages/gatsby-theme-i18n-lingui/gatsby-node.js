const path = require(`path`)

let didRunAlready = false
let absoluteLocalesDirectory

exports.onPreInit = ({ store }, { localeDir }) => {
  // localeDir must be defined, no default option will be defined
  if (!localeDir) {
    throw new Error(`
      Please define the 'localeDir' option of gatsby-theme-i18n-lingui
    `)
  }

  if (didRunAlready) {
    throw new Error(
      `You can only have single instance of gatsby-theme-i18n-lingui in your gatsby-config.js`
    )
  }

  didRunAlready = true
  absoluteLocalesDirectory = path.join(
    store.getState().program.directory,
    localeDir
  )
}

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        GATSBY_THEME_I18N_LINGUI: JSON.stringify(absoluteLocalesDirectory),
      }),
    ],
  })
}
