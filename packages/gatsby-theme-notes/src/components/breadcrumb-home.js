import React from "react"
import { Link } from "gatsby"
import { Themed } from "theme-ui"
import useOptions from "../use-options"

const BreadcrumbHome = ({ text }) => {
  const { basePath } = useOptions()

  return (
    <Themed.a as={Link} to={basePath}>
      {text}
    </Themed.a>
  )
}

export default BreadcrumbHome
