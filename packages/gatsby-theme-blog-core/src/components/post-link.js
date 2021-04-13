import * as React from "react"
import { Link } from "gatsby"

const PostLink = ({ title, slug, date, excerpt }) => (
  <article className="post-link">
    <header className="post-link-header">
      <h2>
        <Link to={slug}>{title || slug}</Link>
      </h2>
      <small>{date}</small>
    </header>
    <section className="post-link-excerpt">
      <p>{excerpt}</p>
    </section>
  </article>
)

export default PostLink
