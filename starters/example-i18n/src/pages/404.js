import * as React from "react"
import { LocalizedLink } from "gatsby-theme-i18n"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFound = () => {
  return (
    <Layout>
      <Seo title="404 - Page Not Found" />
      <h1>404</h1>
      <p>Page Not Found</p>
      <p>
        <LocalizedLink to="/">Link to index page</LocalizedLink>
      </p>
    </Layout>
  )
}

export default NotFound
