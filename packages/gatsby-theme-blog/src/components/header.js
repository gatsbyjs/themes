/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, css, Styled } from "theme-ui"
import Bio from "./bio"
import { SkipNavLink } from "@reach/skip-nav"

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, location }) => {
  if (location.pathname === rootPath) {
    return (
      <Styled.h1
        css={css({
          my: 0,
          fontSize: 4,
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            color: `inherit`,
            boxShadow: `none`,
            textDecoration: `none`,
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h1>
    )
  } else {
    return (
      <Styled.h3
        as="p"
        css={css({
          my: 0,
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            boxShadow: `none`,
            textDecoration: `none`,
            color: `primary`,
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h3>
    )
  }
}

const Header = ({ children, title, ...props }) => (
  <header>
    <SkipNavLink sx={{ variant: `styles.a` }} />
    <div
      css={css({
        maxWidth: `container`,
        mx: `auto`,
        px: 3,
        pt: 4,
      })}
    >
      <div
        css={css({
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
          mb: 4,
        })}
      >
        <Title {...props}>{title}</Title>
        {children}
      </div>
      {props.location.pathname === rootPath && <Bio />}
    </div>
  </header>
)

export default Header
