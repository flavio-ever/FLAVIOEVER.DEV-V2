import client from 'graphql/client'
import { GET_FULL_POST_BY_SLUG, GET_POSTS } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PostTemplate, { PostProps, PostTemplateProps } from 'templates/Post'

const Post = ({ postProps }: PostProps) => {
  const router = useRouter()

  // retorna um loading, qq coisa enquanto tá sendo criado
  if (router.isFallback) return null

  return <PostTemplate postProps={postProps} />
}

const graphQlAdapter = (post: PostTemplateProps[]) => {
  //console.log(mdxSource)

  return {
    postProps: { ...post[0] }
  }
}

/**
 * Constroi paginas pra acelerar o processo de loading
 *
 * @returns
 */
export async function getStaticPaths() {
  const { posts } = await client.request(GET_POSTS, { first: 10 })

  const paths = posts.map(({ slug }: PostTemplateProps) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

/**
 * Obtém rota a partir do [id] da pasta/arquivo
 *
 * @param param
 * @returns
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { posts } = await client.request(GET_FULL_POST_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!posts) return { notFound: true }

  return {
    revalidate: 60,
    props: graphQlAdapter(posts)
  }
}

export default Post
