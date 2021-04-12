import { graphql } from "gatsby"
import PostsPage from "../components/posts"

export default PostsPage

export const query = graphql`
  query PostsQuery($limit: Int!, $filter: BlogPostFilterInput) {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allBlogPost(
      sort: { fields: [date, title], order: DESC }
      filter: $filter
      limit: $limit
    ) {
      nodes {
        id
        excerpt
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
