import * as React from 'react'
import { BlogPost } from './blogpost'
import { PostList } from '@kayteh/ctxs-devconf-rpc/blog'

export type BlogIndexProps = {
    header: string
    posts: PostList.AsObject['postsList']
    children?: React.ReactNode
}

export const BlogIndex = (props: BlogIndexProps) => <div>
    <style jsx global>{`
        body {
            background-color: rgb(51, 45, 45);
            color: #efefef;
            font-family: sans-serif;
        }
    `}</style>
    <h1>{props.header}</h1>
    {props.posts.map((post, idx) => <BlogPost post={post} key={`post${idx}`} />)}
</div>