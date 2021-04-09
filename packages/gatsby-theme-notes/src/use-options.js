import { graphql, useStaticQuery } from "gatsby"

const useOptions = () => {
  const data = useStaticQuery(graphql`
    {
      notesConfig(id: { eq: "gatsby-theme-notes-config" }) {
        basePath
        homeText
        breadcrumbSeparator
      }
    }
  `)

  return data.notesConfig
}

export default useOptions
