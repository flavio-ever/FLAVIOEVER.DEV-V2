import { forwardRef, useEffect } from 'react'

import * as S from './style'
import Image from 'next/image'

type IntroProps = {
  title: string
  smartBio: string
}

export default forwardRef(function IntroSection(
  { title, smartBio }: IntroProps,
  ref: any
) {
  useEffect(() => {
    ;(async () => {
      if (ref?.current) {
        const sr = (await import('scrollreveal')).default
        sr().reveal(ref?.current, {
          delay: 0,
          distance: '0px',
          duration: 5000,
          easing: 'cubic-bezier(0.5, 0, 0, 1)',
          interval: 0,
          opacity: 0,
          origin: 'bottom',
          rotate: {
            x: 0,
            y: 0,
            z: 0
          },
          scale: 1
        })
      }
    })()
  }, [ref])

  return (
    <S.IntroContainer ref={ref}>
      <S.IntroDescricaoContent>
        <S.IntroDot />
        <S.IntroDescricaoTitulo dangerouslySetInnerHTML={{ __html: title }} />
        <S.IntroDescricaoSubTitulo
          dangerouslySetInnerHTML={{ __html: smartBio }}
        />
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
})
