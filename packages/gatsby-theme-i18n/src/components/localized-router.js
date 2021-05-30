import * as React from "react"
import { Router } from "@reach/router"
import { useLocalization } from "../hooks/use-localization"

export const LocalizedRouter = ({ basePath, children, ...props }) => {
  const {
    localizedPath,
    locale,
    defaultLang,
    prefixDefault,
    config,
  } = useLocalization()
  const path = localizedPath({
    defaultLang,
    prefixDefault,
    locale,
    path: basePath,
    config,
  })

  return (
    <Router basepath={path} {...props}>
      {children}
    </Router>
  )
}
