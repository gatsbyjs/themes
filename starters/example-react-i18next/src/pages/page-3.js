import * as React from "react"
import { LocalizedLink } from "gatsby-theme-i18n"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page3 = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t("thirdPage")} />
      <h1>{t("thirdPage")}</h1>
      <p>{t("thirdNote")}</p>
      <p>
        <LocalizedLink to="/page-2/">{t("secondPageLink")}</LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/">{t("indexPageLink")}</LocalizedLink>
      </p>
    </Layout>
  )
}

export default Page3
