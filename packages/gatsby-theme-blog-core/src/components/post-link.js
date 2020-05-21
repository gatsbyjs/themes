import React from "react"
import { Link } from "gatsby"

const PostLink = ({ title, slug, date, excerpt }) => (
  <article className="post-item">
    <header className="post-list-header">
    <h2  className="post-link">
      <Link to={slug}>
        {title || slug}
      </Link>
    </h2>
    <small className="post-list-date">{date}</small>
    </header>
    <section><p className="post-excerpt">{excerpt}</p>
    </section>
  </article>
)

export default PostLink
