/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Themed, css, Flex } from "theme-ui"
import BioContent from "./bio-content"

const Bio = () => {
  const data = useStaticQuery(bioQuery)
  const {
    site: {
      siteMetadata: { author },
    },
    avatar,
  } = data

  return (
    <Flex css={css({ mb: 4, alignItems: `center` })}>
      {avatar ? (
        <GatsbyImage
          image={avatar.childImageSharp.gatsbyImageData}
          alt={author}
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            minWidth: 48,
            borderRadius: 99999,
          })}
        />
      ) : (
        <div
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            minWidth: 48,
            borderRadius: 99999,
          })}
          role="presentation"
        />
      )}
      <Themed.div>
        <BioContent />
      </Themed.div>
    </Flex>
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        gatsbyImageData(width: 48, height: 48, layout: FIXED)
      }
    }
  }
`

export default Bio
