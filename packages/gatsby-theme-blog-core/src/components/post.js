import React from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"

import PostTitle from "./post-title"
import PostDate from "./post-date"
import PostHero from "./post-hero"

const Post = ({data}) => {
    const post = data.blogPost
    return (
        <main>
            <article>
                <header>
                <PostHero post={post} />
                <PostTitle>{post.title}</PostTitle>
                <PostDate>{post.date}</PostDate>
                </header>
                <section>
                    <MDXRenderer>{post.body}</MDXRenderer>
                </section>
            </article>
        </main>
    )
}

export default Post
