const defaultNamespace = `translation`
const fallbackLng = `en`

function withDefaults(themeOptions) {
  return {
    ...themeOptions,
    i18nextOptions: {
      defaultNS: defaultNamespace,
      ns: [defaultNamespace],
      fallbackLng,
      interpolation: {
        escapeValue: false,
        ...themeOptions.i18nextOptions.escapeValue,
      },
      initImmediate: false,
      ...themeOptions.i18nextOptions,
    },
  }
}

module.exports = {
  defaultNamespace,
  withDefaults,
}
