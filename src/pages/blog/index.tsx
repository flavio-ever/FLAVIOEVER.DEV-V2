import client from 'graphql/client'
import { GET_SMALL_POSTS } from 'graphql/queries'
import { GetStaticProps } from 'next'
import BlogTemplate, {
  BlogTemplateProps,
  PostProps
} from '../../templates/Blog'

function BlogPage({ postsProps }: PostProps) {
  return <BlogTemplate postsProps={postsProps} />
}

const graphQlAdapter = (posts: BlogTemplateProps[]) => {
  return {
    postsProps: posts
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await client.request(GET_SMALL_POSTS)

  return {
    revalidate: 60, // ISR  https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
    props: graphQlAdapter(posts)
  }
}

export default BlogPage
