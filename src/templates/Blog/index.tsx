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
          <h1 key={key}>
            <div tw="md:flex flex-col bg-purple-4 rounded-xl overflow-hidden relative">
              <div tw="h-32 overflow-hidden">
                <S.CoverImage src={post.coverImage.url} />
              </div>
              <S.ProfileImage>
                <Image
                  layout="intrinsic"
                  width={384}
                  height={512}
                  src={post.author.profileImage.url}
                />
              </S.ProfileImage>
              <div tw="mt-6 pt-6 md:p-8 text-center md:text-left space-y-4">
                <figcaption>
                  <Link href={`blog/${post.slug}`}>
                    <p
                      tw="text-lg font-medium text-purple-1"
                      className="link link--kale"
                    >
                      {post.title}
                    </p>
                  </Link>
                </figcaption>
                <hr />
                <div tw="font-medium flex justify-between">
                  <div tw="text-purple-1">Flavio Ever</div>
                  <div tw="text-purple-1 dark:text-purple-2">{post.date}</div>
                </div>
              </div>
            </div>
          </h1>
        ))}
      </S.Container>
    </S.Main>
  )
}
