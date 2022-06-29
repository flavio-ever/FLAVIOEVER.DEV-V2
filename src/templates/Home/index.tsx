import React from 'react'
import Image from 'next/image'

import * as S from './styles'

// Components
import Navbar from 'components/Navbar'
import JobsTab from 'components/JobsTab'

export default function HomeTemplate() {
  return (
    <S.Main>
      {/* Navbar */}
      <Navbar />

      {/* Intro */}
      <S.IntroContainer>
        <S.IntroDescricaoContent>
          <S.IntroDot />
          <S.IntroDescricaoTitulo>
            Olá! Sou o <span>Flavio Everton</span>
            <br />
            Eu construo coisas para web.
          </S.IntroDescricaoTitulo>
          <S.IntroDescricaoSubTitulo>
            Sou um desenvolvedor de software especializado em construir
            aplicações e experiências digitais incríveis! Atualmente, estou
            trabalhando com integrações B2B e B2C na @Infracommerce.
          </S.IntroDescricaoSubTitulo>
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

      {/* About */}
      <S.AboutContainer>
        <JobsTab />
      </S.AboutContainer>
    </S.Main>
  )
}
