import * as React from "react"
import { LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page3 = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "thirdPage" })} />
      <h1>{intl.formatMessage({ id: "thirdPage" })}</h1>
      <p>{intl.formatMessage({ id: "thirdNote" })}</p>
      <p>
        <LocalizedLink to="/page-2/">
          {intl.formatMessage({ id: "secondPageLink" })}
        </LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/">
          {intl.formatMessage({ id: "indexPageLink" })}
        </LocalizedLink>
      </p>
    </Layout>
  )
}

export default Page3
