import * as React from "react"
import { LocaleContext } from "../context"
import { graphql, useStaticQuery } from "gatsby"

const useLocalization = () => {
  const locale = React.useContext(LocaleContext)
  const {
    themeI18N: { defaultLang, config },
  } = useStaticQuery(graphql`
    {
      themeI18N {
        defaultLang
        config {
          code
          hrefLang
          dateFormat
          langDir
          localName
          name
        }
      }
    }
  `)

  return {
    locale,
    defaultLang,
    config,
  }
}

export { useLocalization }
