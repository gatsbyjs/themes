import React from "react"
import { Link } from "gatsby"
import { Themed } from "theme-ui"

const FileList = ({ files }) => (
  <ul css={{ padding: 0 }}>
    {files.map((url) => (
      <li key={url}>
        <Themed.a as={Link} to={url}>
          {url}
        </Themed.a>
      </li>
    ))}
  </ul>
)

export default FileList
