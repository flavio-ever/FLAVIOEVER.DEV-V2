import * as S from './style'
import Image from 'next/image'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import React from 'react'

type IntroSectionProps = {
  title: string
  smartBio: string
}

const IntroSection = React.forwardRef(
  ({ title, smartBio }: IntroSectionProps, ref: any) => {
    const { scroll } = useLocomotiveScroll()

    return (
      <S.IntroContainer ref={ref} data-scroll-section id="section-home">
        <S.IntroDescricaoContent
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="6"
        >
          <S.IntroDot />
          <S.IntroDescricaoTitulo dangerouslySetInnerHTML={{ __html: title }} />
          <S.IntroDescricaoSubTitulo
            dangerouslySetInnerHTML={{ __html: smartBio }}
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
