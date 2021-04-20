import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PostHeroCaption from "./post-hero-caption"

const PostHero = ({ post }) => (
  <>
    {post?.image?.childImageSharp && (
      <>
        <GatsbyImage
          image={getImage(post.image)}
          alt={post.imageAlt ? post.imageAlt : post.excerpt}
        />
        <PostHeroCaption
          text={post.imageCaptionText}
          url={post.imageCaptionLink}
        />
      </>
    )}
  </>
)

export default PostHero
