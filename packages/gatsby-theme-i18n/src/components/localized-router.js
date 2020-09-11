import * as React from "react"
import { Router } from "@reach/router"
import { useLocalization } from "../hooks/use-localization"

export const LocalizedRouter = ({ basePath, children, ...props }) => {
  const { localizedPath, locale, defaultLang } = useLocalization()
  const path = localizedPath(defaultLang, locale, basePath)

  return (
    <Router basepath={path} {...props}>
      {children}
    </Router>
  )
}
