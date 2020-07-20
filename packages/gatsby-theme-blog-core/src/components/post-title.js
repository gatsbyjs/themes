import React from "react"

const PostTitle = (props) => (
  <h1 className="post-title" {...props}>
    {props.children}
  </h1>
)

export default PostTitle
