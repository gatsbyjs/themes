import * as React from "react"
import { graphql } from "gatsby"
import { Trans } from "@lingui/macro"
import { LocalizedLink, LocalesList } from "gatsby-theme-i18n"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>
        <Trans>Hello World</Trans>
      </h1>
      <p>
        <Trans>This is in the Index page</Trans>.
      </p>
      <p>
        <LocalizedLink to="/page-2/">
          <Trans>Link to second page</Trans>
        </LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/page-3/">
          <Trans>Link to third page</Trans>
        </LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/page-2/" language="de">
          <Trans>Link to second page (german version)</Trans>
        </LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/" language="en">
          <Trans>Link to index page (english version)</Trans>
        </LocalizedLink>
      </p>
      <ul>
        {data.allFile.nodes.map(({ childMdx: node }) => (
          <li key={node.frontmatter.slug}>
            <LocalizedLink to={node.frontmatter.slug}>
              {node.frontmatter.title}
            </LocalizedLink>
          </li>
        ))}
      </ul>
      <h2>
        <Trans>Overview of languages</Trans>
      </h2>
      <LocalesList />
    </Layout>
  )
}

export default Index

export const query = graphql`
  query($locale: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        childMdx: { fields: { locale: { eq: $locale } } }
      }
    ) {
      nodes {
        childMdx {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`
