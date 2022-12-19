import * as S from './styles'
import 'twin.macro'
import { IoIosArrowBack } from 'react-icons/io'

import Link from 'next/link'

import Image from 'next/image'

export type PostProps = {
  postProps: PostTemplateProps
}

export type PostTemplateProps = {
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
}

export default function PostTemplate({ postProps }: PostProps) {
  return (
    <S.Main>
      <S.Container>
        <div tw="text-white-1 mt-10 mb-10">
          <Link href="/blog">
            <p tw="cursor-pointer">
              <IoIosArrowBack tw="inline" /> <span>Voltar na listagem</span>
            </p>
          </Link>
        </div>
        <div>
          <Image
            layout="responsive"
            width={384}
            height={512}
            src={postProps.coverImage.url}
          />
        </div>
        <div tw="text-white-1">{postProps.content}</div>
      </S.Container>
    </S.Main>
  )
}
