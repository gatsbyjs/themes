/** @jsx jsx */
import { Themed, jsx } from "theme-ui"
import { Link } from "gatsby"

const PostLink = ({ title, slug, date, excerpt }) => (
  <article>
    <header>
      <Themed.h2
        sx={{
          mb: 1,
        }}
      >
        <Themed.a
          as={Link}
          sx={{
            textDecoration: `none`,
          }}
          to={slug}
        >
          {title || slug}
        </Themed.a>
      </Themed.h2>
      <small>{date}</small>
    </header>
    <section>
      <Themed.p>{excerpt}</Themed.p>
    </section>
  </article>
)

export default PostLink
