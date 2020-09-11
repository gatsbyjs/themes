import * as React from "react"
import { useIntl } from "react-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFound = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title="404" />
      <h1>{intl.formatMessage({ id: "notFound" })}</h1>
    </Layout>
  )
}

export default NotFound
