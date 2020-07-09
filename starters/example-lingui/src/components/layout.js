import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Trans } from "@lingui/macro"
import { MdxLink, LocalizedLink } from "gatsby-theme-i18n"

const components = {
  a: MdxLink,
}

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <header>
        <LocalizedLink to="/">
          <Trans>Home</Trans>
        </LocalizedLink>
      </header>
      <main>
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
    </React.Fragment>
  )
}

export default Layout
