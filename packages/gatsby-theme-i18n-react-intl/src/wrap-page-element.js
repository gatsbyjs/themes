/* global GATSBY_THEME_I18N_REACT_INTL */
import * as React from "react"
import { IntlProvider } from "react-intl"

const wrapPageElement = ({ element, props }) => {
  const locale = props.pageContext.locale
  const message = require(`${GATSBY_THEME_I18N_REACT_INTL}/${locale}.json`)
  return (
    <IntlProvider locale={locale} key={locale} messages={message}>
      {element}
    </IntlProvider>
  )
}

export { wrapPageElement }
