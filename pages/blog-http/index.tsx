import { BlogIndex, BlogIndexProps } from '../../components/blogindex'
import { NextPageContext, NextPage } from 'next'
import axios from 'axios'

const BlogIndexHTTP: NextPage = BlogIndex

BlogIndexHTTP.getInitialProps = async (ctx: NextPageContext): Promise<BlogIndexProps> => {
    const postResponse = await axios.get('https://devconf.kat.cafe/posts', { responseType: 'json' })
    const posts = postResponse.data as BlogIndexProps['posts']

    return {
        header: 'My Okay Blog (HTTP Edition Part 2) 🤓',
        posts
    }
}

export default BlogIndexHTTP