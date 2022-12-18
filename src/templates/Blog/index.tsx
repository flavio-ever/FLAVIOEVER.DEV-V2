import * as S from './styles'
import 'twin.macro'

import Link from 'next/link'

import Image from 'next/image'
export type BlogTemplateProps = {
  postsProps: {
    title: string
    slug: string
    date: string
    content: string
    tags: string[]
    coverImage: {
      url: string
    }
    author: {
      name: string
      profileImage: {
        url: string
      }
    }
  }[]
}

export default function BlogTemplate({ postsProps }: BlogTemplateProps) {
  return (
    <S.Main>
      <S.Container>
        {postsProps.map((post, key: number) => (
          <div tw="md:flex flex-col cursor-pointer" key={key}>
            <Link href={`blog/${post.slug}`}>
              <div tw="relative shadow-sm h-36 rounded-xl overflow-hidden">
                <S.CoverImage src={post.coverImage.url} />
                <S.ProfileImage>
                  <Image
                    layout="intrinsic"
                    width={384}
                    height={512}
                    src={post.author.profileImage.url}
                  />
                </S.ProfileImage>
                <div tw="relative flex h-full w-full justify-center sm:justify-end">
                  <S.ContainerTitle>
                    <S.Title title={post.title} />
                  </S.ContainerTitle>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </S.Container>
    </S.Main>
  )
}
