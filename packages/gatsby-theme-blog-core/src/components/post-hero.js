import React from "react"
import Image from "gatsby-image"

const Hero = ({ post }) => (
  <>
    {post?.image?.childImageSharp && (
      <Image
        fluid={post.image.childImageSharp.fluid}
        alt={post.imageAlt ? post.imageAlt : post.excerpt}
        className="post-image"
      />
    )}
  </>
)

export default Hero
