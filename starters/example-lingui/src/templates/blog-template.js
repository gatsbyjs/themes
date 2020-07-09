import * as React from "react"
import { graphql } from "gatsby"
import { Trans } from "@lingui/macro"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogTemplate = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} />
      <h1>
        <Trans>Data</Trans>
      </h1>
      <div>
        {data.mdx ? (
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        ) : (
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
  query($locale: String!, $slug: String!) {
    mdx(
      fields: { locale: { eq: $locale } }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        slug
        title
      }
      body
    }
  }
`
