import * as React from "react"
import { LocalizedLink } from "gatsby-theme-i18n"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Page3 = () => {
  return (
    <Layout>
      <Seo title="Page 3" />
      <h1>Third page</h1>
      <p>This is the third page.</p>
      <p>
        <LocalizedLink to="/page-2/">Link to second page</LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/">Link to index page</LocalizedLink>
      </p>
    </Layout>
  )
}

export default Page3
