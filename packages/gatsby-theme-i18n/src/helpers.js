function isDefaultLang(locale, defaultLang) {
  return locale === defaultLang
}

function isLocalizedPage({ pages }, path) {
  if (pages && !pages.find((rule) => path.match(new RegExp(rule)))) {
    return false
  } else {
    return true
  }
}

function localizedPath({ defaultLang, prefixDefault, locale, path, config }) {
  // The default language isn't prefixed
  if (isDefaultLang(locale, defaultLang) && !prefixDefault) {
    return path
  }

  const [, base] = path.split(`/`)

  // If for whatever reason we receive an already localized path
  // (e.g. if the path was made with location.pathname)
  // just return it as-is.
  if (base === locale) {
    return path
  }

  // If it's another language, prefix with the locale
  // falling back to defaultLang if path is not localized for locale (and config is provided)
  if (config) {
    const lang = config.find((lang) => lang.code === locale)
    if (!isLocalizedPage(lang, path)) {
      return prefixDefault ? `/${defaultLang}${path}` : path
    }
  }
  return `/${locale}${path}`
}

function getLanguages({ locales, localeStr }) {
  // If "localeStr" is not defined, return the list of locales from the i18n config file
  if (!localeStr) {
    return locales
  }

  const langCodes = localeStr.split(` `)
  const langs = []

  for (const code of langCodes) {
    const lang = locales.find((lang) => lang.code === code)

    if (!lang) {
      throw new Error(
        `Invalid localed provided: ${code}. See your i18n config file for a list of available locales.`
      )
    }

    langs.push(lang)
  }

  return langs
}

function getDefaultLanguage({ locales, defaultLang }) {
  return locales.find((locale) => locale.code === defaultLang)
}

module.exports = {
  localizedPath,
  getLanguages,
  getDefaultLanguage,
  isLocalizedPage,
}
