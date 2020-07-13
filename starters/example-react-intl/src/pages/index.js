import * as React from "react"
import { graphql } from "gatsby"
import { LocalizedLink, LocalesList } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = ({ data }) => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "home" })} />
      <h1>{intl.formatMessage({ id: "helloWorld" })}</h1>
      <p>{intl.formatMessage({ id: "indexNote" })}</p>
      <p>
        <LocalizedLink to="/page-2/">
          {intl.formatMessage({ id: "secondPageLink" })}
        </LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/page-3/"></LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/page-2/" language="de">
          {intl.formatMessage({ id: "secondPageGermanLink" })}
        </LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/" language="en">
          {intl.formatMessage({ id: "indexPageEnglishLink" })}
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
      <h2>{intl.formatMessage({ id: "overviewLang" })}</h2>
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
