import client from 'graphql/client'
import { GET_FULL_POSTS } from 'graphql/queries'
import { GetStaticProps } from 'next'
import BlogTemplate, { BlogTemplateProps } from '../../templates/Blog'

function Blog({ postsProps }: BlogTemplateProps) {
  return <BlogTemplate postsProps={postsProps} />
}

const graphQlAdapter = (posts: any[]) => {
  return {
    postsProps: posts
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await client.request(GET_FULL_POSTS)

  return {
    revalidate: 60, // ISR  https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
    props: graphQlAdapter(posts)
  }
}

export default Blog
