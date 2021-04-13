import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostHero = ({ post }) => (
  <>
    {post?.image?.childImageSharp && (
      <GatsbyImage
        image={getImage(post.image)}
        alt={post.imageAlt ? post.imageAlt : post.excerpt}
        className="post-hero"
      />
    )}
  </>
)

export default PostHero
