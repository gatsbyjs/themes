const defaultLang = `en`

function withDefaults(themeOptions) {
  return {
    ...themeOptions,
    configPath: themeOptions.configPath,
    defaultLang: themeOptions.defaultLang || defaultLang,
    locales: themeOptions.locales || null,
  }
}

module.exports = {
  defaultLang,
  withDefaults,
}
