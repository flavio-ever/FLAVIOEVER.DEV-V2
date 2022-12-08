import * as S from './styles'
import Image from 'next/image'
import { IoMdDownload } from 'react-icons/io'

import Navbar from '../../components/System/Navbar'
import Button from 'components/Form/Button'
import CareerTab, { CareerTabProps } from 'components/System/CareerTab'
import ProjectCard, { ProjectProps } from 'components/System/ProjectCard'
import { IoMailUnreadOutline } from 'react-icons/io5'
import Title from 'components/System/Title'

export type AuthorProps = {
  title: string
  smartBio: string
  downloadUrl: string
}

export type ContactProps = {
  description: string
  contactUrl: string
}

export type HomeTemplateProps = {
  authorProps: AuthorProps
  careerProps: CareerTabProps[]
  projectsProps: ProjectProps[]
  contactProps: ContactProps
}

export default function HomeTemplate({
  authorProps,
  careerProps,
  projectsProps,
  contactProps
}: HomeTemplateProps) {
  return (
    <S.Main>
      <Navbar />

      {/* AUTHOR  */}

      {authorProps && (
        <S.AuthorContainer id="section-home">
          <S.AuthorDescricaoContent>
            <S.AuthorDot />
            <S.AuthorDescricaoTitulo
              dangerouslySetInnerHTML={{ __html: authorProps.title }}
            />
            <S.AuthorDescricaoSubTitulo
              dangerouslySetInnerHTML={{ __html: authorProps.smartBio }}
            />
            <a
              href={authorProps.downloadUrl}
              target="blank"
              style={{ display: 'inline-block' }}
            >
              <Button>
                <IoMdDownload />
                <p>Baixar meu cv</p>
              </Button>
            </a>
          </S.AuthorDescricaoContent>
          <S.AuthorImagemContent>
            <Image
              layout="intrinsic"
              width={545}
              height={681}
              src="/img/eu_avatar_overlay.png"
            />
          </S.AuthorImagemContent>
        </S.AuthorContainer>
      )}

      {/* Career */}

      {careerProps.length > 0 && (
        <S.CareerContainer id="section-career">
          <Title>Carreira</Title>
          <CareerTab careerProps={careerProps} />
        </S.CareerContainer>
      )}

      {/* PROJECTS */}

      {projectsProps.length > 0 && (
        <S.ProjectContainer id="section-projects">
          <Title>Projetos</Title>
          {projectsProps.map((job, key) => (
            <ProjectCard key={key} project={job} id={key + 1} />
          ))}
        </S.ProjectContainer>
      )}

      {/* CONTACT SECTION */}

      {contactProps?.description && contactProps.contactUrl && (
        <S.ContactContainer id="section-contact">
          <Title>Contato</Title>
          <div
            dangerouslySetInnerHTML={{ __html: contactProps?.description }}
          />
          <a href={contactProps.contactUrl} target={'_blank'} rel="noreferrer">
            <Button>
              <IoMailUnreadOutline />
              <span>Entre em contato</span>
            </Button>
          </a>
          <p>
            Projetado e construído com{' '}
            <span style={{ color: '#F04F4F' }}>♥</span> por Flavio Ever
          </p>
        </S.ContactContainer>
      )}
    </S.Main>
  )
}
