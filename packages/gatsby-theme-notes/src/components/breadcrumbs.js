import * as React from "react"
import { Link } from "gatsby"
import { Themed, css } from "theme-ui"
import useOptions from "../use-options"
import BreadcrumbDivider from "./breadcrumb-divider"
import BreadcrumbHome from "./breadcrumb-home"

const Breadcrumbs = ({ links }) => {
  const { homeText, breadcrumbSeparator } = useOptions()

  return (
    <nav
      css={css({
        mb: 3,
        "& a": {
          textDecoration: `none`,
          fontWeight: `bold`,
        },
      })}
    >
      <BreadcrumbHome text={homeText} />
      {links.map((link) => (
        <React.Fragment key={link.url}>
          <BreadcrumbDivider text={breadcrumbSeparator} />
          <Themed.a as={Link} to={link.url}>
            {link.name}
          </Themed.a>
        </React.Fragment>
      ))}
    </nav>
  )
}

export default Breadcrumbs
