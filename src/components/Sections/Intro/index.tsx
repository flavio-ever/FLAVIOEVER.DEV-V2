import React from 'react'
import * as S from './style'
import Image from 'next/image'
import { IoMdDownload } from 'react-icons/io'

import Button from 'components/Button'

export type IntroProps = {
  title: string
  smartBio: string
  downloadUrl: string
}

type IntroSectionProps = {
  introProps: IntroProps
}

const IntroSection = React.forwardRef(
  ({ introProps }: IntroSectionProps, ref: any) => {
    return (
      <S.IntroContainer ref={ref} id="section-home">
        <S.IntroDescricaoContent>
          <S.IntroDot />
          <S.IntroDescricaoTitulo
            dangerouslySetInnerHTML={{ __html: introProps.title }}
          />
          <S.IntroDescricaoSubTitulo
            dangerouslySetInnerHTML={{ __html: introProps.smartBio }}
          />
          <a
            href={introProps.downloadUrl}
            target="blank"
            style={{ display: 'inline-block' }}
          >
            <Button>
              <IoMdDownload />
              <p>Baixar meu cv</p>
            </Button>
          </a>
        </S.IntroDescricaoContent>
        <S.IntroImagemContent>
          <Image
            layout="intrinsic"
            width={545}
            height={681}
            src="/img/eu_avatar_overlay.png"
          />
        </S.IntroImagemContent>
      </S.IntroContainer>
    )
  }
)

export default IntroSection
