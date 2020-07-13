import * as React from "react"
import { LocalizedLink } from "gatsby-theme-i18n"
import { Trans } from "@lingui/macro"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page3 = () => {
  return (
    <Layout>
      <SEO title="Page 3" />
      <h1>
        <Trans>Third page</Trans>
      </h1>
      <p>
        <Trans>This is the third page</Trans>.
      </p>
      <p>
        <LocalizedLink to="/page-2/">
          <Trans>Link to second page</Trans>
        </LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/">
          <Trans>Link to index page</Trans>
        </LocalizedLink>
      </p>
    </Layout>
  )
}

export default Page3
