/* global GATSBY_THEME_I18N_LINGUI */
import * as React from "react"
import { I18nProvider } from "@lingui/react"

const wrapPageElement = ({ element, props }) => {
  const locale = props.pageContext.locale

  const catalog = require(`${GATSBY_THEME_I18N_LINGUI}/${locale}/messages.js`)

  return (
    <I18nProvider language={locale} catalogs={{ [locale]: catalog }}>
      {element}
    </I18nProvider>
  )
}

export { wrapPageElement }
