import dynamic from 'next/dynamic'

const DynamicNavbar: any = dynamic(() => import('../../components/Navbar'), {
  ssr: false
})

import Image from 'next/image'
import { IoMdDownload } from 'react-icons/io'
import { IoMailUnreadOutline } from 'react-icons/io5'

import * as S from './styles'

// Components
import Button from 'components/Button'
import JobsTab, { JobsProps } from 'components/JobsTab'
import ProjectCard, { ProjectProps } from 'components/ProjectCard'

export type AuthorProps = {
  title: string
  smartBio: string
  largeBio: string
  downloadUrl: string
}

export type HomeTemplateProps = {
  authorProps: AuthorProps
  jobsProps: JobsProps[]
  projectsProps: ProjectProps[]
}

export default function HomeTemplate({
  authorProps,
  jobsProps,
  projectsProps
}: HomeTemplateProps) {
  return (
    <S.Main>
      {/* Navbar */}
      <DynamicNavbar />

      {/* Intro */}
      <S.IntroContainer>
        <S.IntroDescricaoContent>
          <S.IntroDot />
          <S.IntroDescricaoTitulo
            dangerouslySetInnerHTML={{ __html: authorProps?.title }}
          />
          <S.IntroDescricaoSubTitulo
            dangerouslySetInnerHTML={{ __html: authorProps?.smartBio }}
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

      {/* SobreMim */}
      <S.SobreMimContainer>
        <S.Title>sobre_mim</S.Title>
        <div>
          <div dangerouslySetInnerHTML={{ __html: authorProps?.largeBio }} />
          <br />
          <a href={authorProps?.downloadUrl} target="blank">
            <Button>
              <IoMdDownload />
              <p>Baixar meu cv</p>
            </Button>
          </a>
        </div>
      </S.SobreMimContainer>

      {/* Experiencias */}
      <S.ExperienciasContainer>
        <S.Title>experiencias</S.Title>
        <JobsTab jobsProps={jobsProps} />
      </S.ExperienciasContainer>

      {/* Trabalhos */}
      <S.TrabalhosContainer>
        <S.Title>projetos</S.Title>
        {projectsProps.map((job, key) => (
          <ProjectCard key={key} project={job} id={key + 1} />
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
