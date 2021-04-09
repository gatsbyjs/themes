import React from "react"
import { Link } from "gatsby"
import { css, Themed } from "theme-ui"
import BlogHeader from "gatsby-theme-blog/src/components/header"

const Header = (props) => (
  <BlogHeader {...props}>
    <Themed.a
      as={Link}
      to="/notes"
      css={css({
        ml: 2,
        mr: `auto`,
        fontFamily: `heading`,
        fontWeight: `bold`,
        textDecoration: `none`,
        color: `inherit`,
        ":hover": {
          textDecoration: `underline`,
        },
      })}
    >
      Notes
    </Themed.a>
  </BlogHeader>
)

export default Header
