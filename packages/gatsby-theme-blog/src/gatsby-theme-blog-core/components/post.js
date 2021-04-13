import * as React from "react"
import Post from "../../components/post"

const PostWrapper = ({ location, data }) => {
  const { blogPost, previous, next } = data

  return (
    <Post
      data={{ ...data, post: blogPost }}
      location={location}
      previous={previous}
      next={next}
    />
  )
}

export default PostWrapper
