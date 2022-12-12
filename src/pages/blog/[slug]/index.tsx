import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <h1>Post: {slug}</h1>
      Teste 123456
    </>
  )
}

export default Post
