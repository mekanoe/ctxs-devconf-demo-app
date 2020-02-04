import * as React from 'react'
import { Post } from '@kayteh/ctxs-devconf-rpc/blog'

type Props = {
    post: Post.AsObject
}

export const BlogPost = (props: Props) => <div>
    <style jsx>{`
    div {
        background-color: rgba(0,0,0,0.15);
        padding: 3em;
    }
    `}</style>
    <h2>{props.post.title}</h2>
    <p>{props.post.body}</p>
</div>