import * as React from "react"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFound = () => {
  const { t } = useTranslation("404")
  return (
    <Layout>
      <SEO title="404" />
      <h1>{t("notFound")}</h1>
    </Layout>
  )
}

export default NotFound
