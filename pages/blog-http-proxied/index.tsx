import { BlogIndex, BlogIndexProps } from '../../components/blogindex'
import { NextPageContext, NextPage } from 'next'
import axios from 'axios'

const BlogIndexHTTPProxied: NextPage = BlogIndex

BlogIndexHTTPProxied.getInitialProps = async (ctx: NextPageContext): Promise<BlogIndexProps> => {
    const postResponse = await axios.get('http://127.0.0.1:8080/function/blog--list-posts', { responseType: 'json' })
    const posts = postResponse.data as BlogIndexProps['posts']
    
    return {
        header: 'My Okay Blog (HTTP Edition) 🤓',
        posts
    }
}

export default BlogIndexHTTPProxied