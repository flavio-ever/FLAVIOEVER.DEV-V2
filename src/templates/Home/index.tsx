import { useRef } from 'react'
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

export type ContactProps = {
  description: string
  contactUrl: string
}

export type HomeTemplateProps = {
  authorProps: AuthorProps
  jobsProps: JobsProps[]
  projectsProps: ProjectProps[]
  contactProps: ContactProps
}

export default function HomeTemplate({
  authorProps,
  jobsProps,
  projectsProps,
  contactProps
}: HomeTemplateProps) {
  const refs = {
    homeRef: useRef<null | HTMLDivElement>(null),
    sobreRef: useRef<null | HTMLDivElement>(null),
    experienciasRef: useRef<null | HTMLDivElement>(null),
    projetosRef: useRef<null | HTMLDivElement>(null),
    contatoRef: useRef<null | HTMLDivElement>(null)
  }

  function handleScrollRef(ref: any) {
    ref?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <S.Main>
      {/* Navbar */}
      <DynamicNavbar refs={refs} handleScrollRef={handleScrollRef} />

      {/* Intro */}
      {authorProps?.title && authorProps?.smartBio && (
        <S.IntroContainer ref={refs.homeRef}>
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
      )}

      {/* SobreMim */}
      {authorProps?.largeBio && authorProps?.downloadUrl && (
        <S.SobreMimContainer ref={refs.sobreRef}>
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
      )}

      {/* Experiencias */}
      {jobsProps.length && (
        <S.ExperienciasContainer ref={refs.experienciasRef}>
          <S.Title>experiencias</S.Title>
          <JobsTab jobsProps={jobsProps} />
        </S.ExperienciasContainer>
      )}

      {/* Projetos */}
      {projectsProps.length && (
        <S.TrabalhosContainer ref={refs.projetosRef}>
          <S.Title>projetos</S.Title>
          {projectsProps.map((job, key) => (
            <ProjectCard key={key} project={job} id={key + 1} />
          ))}
        </S.TrabalhosContainer>
      )}

      {/* Contato */}
      {contactProps?.description && contactProps.contactUrl && (
        <S.ContatoContainer ref={refs.contatoRef}>
          <S.Title>contato</S.Title>
          <div
            dangerouslySetInnerHTML={{ __html: contactProps?.description }}
          />
          <a href={contactProps.contactUrl} target={'_blank'} rel="noreferrer">
            <Button>
              <IoMailUnreadOutline />
              <span>Deixe seu h3ll0 w0rld!</span>
            </Button>
          </a>
        </S.ContatoContainer>
      )}
    </S.Main>
  )
}
