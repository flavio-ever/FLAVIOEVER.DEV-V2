import React from 'react'
import * as S from './style'
import Image from 'next/image'

export type IntroProps = {
  title: string
  smartBio: string
}

type IntroSectionProps = {
  introProps: IntroProps
}

const IntroSection = React.forwardRef(
  ({ introProps }: IntroSectionProps, ref: any) => {
    return (
      <S.IntroContainer ref={ref} id="section-home">
        <S.IntroDescricaoContent
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="6"
        >
          <S.IntroDot />
          <S.IntroDescricaoTitulo
            dangerouslySetInnerHTML={{ __html: introProps.title }}
          />
          <S.IntroDescricaoSubTitulo
            dangerouslySetInnerHTML={{ __html: introProps.smartBio }}
          />
        </S.IntroDescricaoContent>
        <S.IntroImagemContent
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-6"
        >
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
