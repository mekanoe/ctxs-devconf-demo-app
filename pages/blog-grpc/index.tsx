import { BlogClient } from '@kayteh/ctxs-devconf-rpc/blog'
import { BlogIndex, BlogIndexProps } from '../../components/blogindex'
import { NextPageContext, NextPage } from 'next'
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport'

const BlogIndexGRPC: NextPage = BlogIndex

BlogIndexGRPC.getInitialProps = async (ctx: NextPageContext): Promise<BlogIndexProps> => {
    const client = new BlogClient("https://devconf.kat.cafe", { transport: NodeHttpTransport() })

    const postResponse = await client.listAllPosts(null)
    const posts = postResponse.toObject().postsList

    return {
        header: 'My Cool Blog (gRPC Edition) 😎',
        posts
    }
}

export default BlogIndexGRPC