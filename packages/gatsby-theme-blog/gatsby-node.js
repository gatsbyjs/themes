exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type BlogThemeConfig implements Node {
      webfontURL: String,
    }
  `)
}

exports.sourceNodes = (
  { actions, createContentDigest },
  { webfontURL = '' }
) => {
  const { createNode } = actions

  const blogThemeConfig = {
    webfontURL,
  }

  createNode({
    ...blogThemeConfig,
    id: `gatsby-theme-blog-config`,
    parent: null,
    children: [],
    internal: {
      type: `BlogThemeConfig`,
      contentDigest: createContentDigest(blogThemeConfig),
      content: JSON.stringify(blogThemeConfig),
      description: `Options for gatsby-theme-blog`,
    },
  })
}
