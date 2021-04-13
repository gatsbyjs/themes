import * as React from "react"
import Posts from "../../components/posts"

const PostsWrapper = ({ location, data }) => {
  const { site, allBlogPost } = data
  return (
    <Posts
      location={location}
      posts={allBlogPost.nodes}
      siteTitle={site.siteMetadata.title}
      socialLinks={site.siteMetadata.social}
    />
  )
}

export default PostsWrapper
