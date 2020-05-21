import React from "react"

import PostList from "./post-list"

const Posts = ({ data }) => { 
    const posts = data.allBlogPost.edges
    return (
        <main>
        <PostList posts={posts} />
        </main>
    )
}

export default Posts
