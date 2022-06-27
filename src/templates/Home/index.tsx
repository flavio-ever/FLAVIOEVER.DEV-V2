import React from 'react'
import * as S from './styles'

// Components
import Navbar from 'components/Navbar'
import Image from 'next/image'

export default function HomeTemplate() {
  return (
    <S.Main>
      {/* Navbar */}
      <Navbar />

      {/* About */}
      <S.Container>
        <S.DescricaoContent>
          <S.DescricaoTitulo>
            Olá! Sou o <span>Flavio Everton</span>
            <br />
            Eu construo coisas para web.
          </S.DescricaoTitulo>
          <S.DescricaoSubTitulo>
            Sou um desenvolvedor de software especializado em construir
            aplicações e experiências digitais incríveis! Atualmente, estou
            trabalhando com integrações B2B e B2C na @Infracommerce.
          </S.DescricaoSubTitulo>
        </S.DescricaoContent>
        <S.ImagemContent>
          <Image
            layout="intrinsic"
            width={545}
            height={681}
            src="/img/eu_avatar_overlay.png"
          />
        </S.ImagemContent>
      </S.Container>
    </S.Main>
  )
}
