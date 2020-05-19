import React from "react"
import { Link } from "gatsby"

const PostLink = ({ title, slug, date, excerpt }) => (
  <div>
    <h2>
      <Link to={slug}>
        {title || slug}
      </Link>
    </h2>
    <small>{date}</small>
    <p>{excerpt}</p>
  </div>
)

export default PostLink
