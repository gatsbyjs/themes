import * as React from "react"
import DirectoryList from "./directory-list"
import FileList from "./file-list"
import Breadcrumbs from "./breadcrumbs"
import Layout from "./layout"

const Notes = ({
  directories,
  files,
  breadcrumbs = [],
  siteTitle,
  ...props
}) => (
  <Layout {...props} title={siteTitle}>
    {breadcrumbs.length ? <Breadcrumbs links={breadcrumbs} /> : null}
    <DirectoryList directories={directories} />
    <FileList files={files} />
  </Layout>
)

export default Notes
