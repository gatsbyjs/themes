import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogTemplate = ({ data, pageContext }) => {
  const { t } = useTranslation("blog")
  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} />
      <h1>{t("data")}</h1>
      <div>
        {data.mdx ? (
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        ) : (
          <div>This page hasn't been translated yet</div>
        )}
      </div>
      <h1>{t("context")}</h1>
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
