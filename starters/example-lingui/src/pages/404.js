import * as React from "react"
import { Trans } from "@lingui/macro"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFound = () => {
  return (
    <Layout>
      <Seo title="404" />
      <h1>
        <Trans>Not Found</Trans>
      </h1>
    </Layout>
  )
}

export default NotFound
