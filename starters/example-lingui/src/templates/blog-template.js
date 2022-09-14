import * as React from "react"
import { graphql } from "gatsby"
import { Trans } from "@lingui/macro"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogTemplate = ({ data, pageContext, children }) => {
  return (
    <Layout>
      <Seo title={data.mdx?.frontmatter?.title} />
      <h1>
        <Trans>Data</Trans>
      </h1>
      <div>
        {children || (
          <div>
            <Trans>This page hasn't been translated yet</Trans>
          </div>
        )}
      </div>
      <h1>
        <Trans>Context</Trans>
      </h1>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query{
    mdx(
      fields: { locale: { eq: "en" } }
      frontmatter: { slug: { eq: "first-post" } }
    ) {
      frontmatter {
        slug
        title
      }
      body
    }
  }
`
