import * as React from "react"
import Layout from "./layout"
import { LocalizedLink } from "gatsby-theme-i18n"
import Seo from "./seo"

const Name = ({ name, locale }) => (
  <Layout>
    <Seo title={name} />
    <h1>
      {name} & {locale}
    </h1>
    <p>
      <LocalizedLink to="/">Link to index page</LocalizedLink>
    </p>
  </Layout>
)

export default Name
