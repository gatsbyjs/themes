import * as React from "react"
import { Link } from "gatsby"
import { css, Themed, Flex } from "theme-ui"
import Bio from "../components/bio"

const PostFooter = ({ previous, next }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    <Themed.hr />
    <Bio />
    {(previous || next) && (
      <Flex
        as="ul"
        css={css({
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        })}
      >
        <li>
          {previous && (
            <Themed.a as={Link} to={previous.slug} rel="prev">
              ← {previous.title}
            </Themed.a>
          )}
        </li>
        <li>
          {next && (
            <Themed.a as={Link} to={next.slug} rel="next">
              {next.title} →
            </Themed.a>
          )}
        </li>
      </Flex>
    )}
  </footer>
)

export default PostFooter
