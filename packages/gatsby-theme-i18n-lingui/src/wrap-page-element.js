/* global GATSBY_THEME_I18N_LINGUI */
import * as React from "react"
import { i18n } from "@lingui/core"
import { I18nProvider } from "@lingui/react"

const wrapPageElement = ({ element, props }) => {
  const locale = props.pageContext.locale
  const catalog = require(`${GATSBY_THEME_I18N_LINGUI}/${locale}/messages.js`)

  i18n.load(locale, catalog.messages)
  i18n.activate(locale)

  return <I18nProvider i18n={i18n}>{element}</I18nProvider>
}

export { wrapPageElement }
