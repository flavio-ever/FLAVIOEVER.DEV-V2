import dynamic from 'next/dynamic'

const DynamicNavbar: any = dynamic(() => import('../../components/Navbar'), {
  ssr: false
})

import Image from 'next/image'
import { IoMdDownload } from 'react-icons/io'
import { IoMailUnreadOutline } from 'react-icons/io5'

import * as S from './styles'

// Components
import JobsTab from 'components/JobsTab'
import Button from 'components/Button'
import JobsCard from 'components/JobsCard'

export default function HomeTemplate() {
  const jobs = [
    {
      title: 'Itadori',
      image: '/img/itadori.jpg',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, libero odit eligendi suscipit sunt fuga molestias rem! Odit nesciunt sed rem, nostrum a assumenda? Maxime suscipit eveniet officia eum placeat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, libero odit eligendi suscipit sunt fuga molestias rem! Odit nesciunt sed rem, nostrum a assumenda? Maxime suscipit eveniet officia   eum placeat.',
      links: {
        preview: 'http://google.com.br',
        github: 'http://github.com/flavio-ever'
      }
    },
    {
      title: 'Umbrella',
      image: '/img/umbrella.jpg',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, libero odit eligendi suscipit sunt fuga molestias rem! Odit nesciunt sed rem, nostrum a assumenda? Maxime suscipit eveniet officia eum placeat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, libero odit eligendi suscipit sunt fuga molestias rem! Odit nesciunt sed rem, nostrum a assumenda? Maxime suscipit eveniet officia   eum placeat.',
      links: {
        preview: 'http://google.com.br',
        github: 'http://github.com/flavio-ever'
      }
    }
  ]

  return (
    <S.Main>
      {/* Navbar */}
      <DynamicNavbar />

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

      {/* SobreMim */}
      <S.SobreMimContainer>
        <S.Title>sobre_mim</S.Title>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
          libero odit eligendi suscipit sunt fuga molestias rem! Odit nesciunt
          sed rem, nostrum a assumenda? Maxime suscipit eveniet officia eum
          placeat. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Assumenda, libero odit eligendi suscipit sunt fuga molestias rem! Odit
          nesciunt sed rem, nostrum a assumenda? Maxime suscipit eveniet officia
          eum placeat.
          <br />
          <br />
          <br />
          <Button>
            <IoMdDownload />
            <p>Baixar meu cv</p>
          </Button>
        </p>
      </S.SobreMimContainer>

      {/* Experiencias */}
      <S.ExperienciasContainer>
        <S.Title>experiencias</S.Title>
        <JobsTab />
      </S.ExperienciasContainer>

      {/* Trabalhos */}
      <S.TrabalhosContainer>
        <S.Title>trabalhos</S.Title>
        {jobs.map((job, key) => (
          <JobsCard key={key} job={job} id={key + 1} />
        ))}
      </S.TrabalhosContainer>

      {/* Contato */}
      <S.ContatoContainer>
        <S.Title>contato</S.Title>
        <p>
          Embora eu não esteja procurando novas oportunidades, você está
          convidado para entrar em contato comigo. Quando puder, prometo
          responder.
        </p>
        <Button>
          <IoMailUnreadOutline />
          <p>Deixe seu h3ll0 w0rld!</p>
        </Button>
      </S.ContatoContainer>
    </S.Main>
  )
}
