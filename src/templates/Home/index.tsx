import * as S from './styles'
import Image from 'next/image'
import { IoMdDownload } from 'react-icons/io'
import { CiCircleMore } from 'react-icons/ci'

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
              width={445}
              height={581}
              src="/img/eu_avatar_overlay.png"
            />
          </S.AuthorImagemContent>
        </S.AuthorContainer>
      )}

      {/* Post */}

      {careerProps.length > 0 && (
        <S.PostContainer id="section-blog">
          <Title>Últimas postagens</Title>
          <S.PostContent>
            <S.PostItem>
              <S.PostItemDate>Dez 8</S.PostItemDate>
              <S.PostItemTitle>
                Padrões de projeto com Nextjs lorem xpto
              </S.PostItemTitle>
            </S.PostItem>
            <S.PostItem>
              <S.PostItemDate>Dez 8</S.PostItemDate>
              <S.PostItemTitle>
                Padrões de projeto com Nextjs lorem xpto
              </S.PostItemTitle>
            </S.PostItem>
            <S.PostItem>
              <S.PostItemDate>Dez 8</S.PostItemDate>
              <S.PostItemTitle>
                Padrões de projeto com Nextjs lorem xpto
              </S.PostItemTitle>
            </S.PostItem>
            <S.PostItem>
              <S.PostItemDate>Dez 8</S.PostItemDate>
              <S.PostItemTitle>
                Padrões de projeto com Nextjs lorem xpto
              </S.PostItemTitle>
            </S.PostItem>
            <S.PostItem>
              <S.PostItemDate>Dez 8</S.PostItemDate>
              <S.PostItemTitle>
                Padrões de projeto com Nextjs lorem xpto
              </S.PostItemTitle>
            </S.PostItem>
          </S.PostContent>
          <S.PostButtonContent>
            <Button>
              <CiCircleMore />
              <p>Ver tudo</p>
            </Button>
          </S.PostButtonContent>
        </S.PostContainer>
      )}

      {/* Career */}

      {careerProps.length > 0 && (
        <S.CareerContainer id="section-career">
          <Title>Carreira</Title>
          <S.CareerContent>
            <CareerTab careerProps={careerProps} />
          </S.CareerContent>
        </S.CareerContainer>
      )}

      {/* PROJECTS */}

      {projectsProps.length > 0 && (
        <S.ProjectContainer id="section-projects">
          <Title>Projetos</Title>
          <S.ProjectContent>
            {projectsProps.map((job, key) => (
              <ProjectCard key={key} project={job} id={key + 1} />
            ))}
          </S.ProjectContent>
        </S.ProjectContainer>
      )}

      {/* CONTACT SECTION */}

      {contactProps?.description && contactProps.contactUrl && (
        <S.ContactContainer id="section-contact">
          <Title>Contato</Title>
          <S.ContactContent>
            <div
              dangerouslySetInnerHTML={{ __html: contactProps?.description }}
            />
            <a
              href={contactProps.contactUrl}
              target={'_blank'}
              rel="noreferrer"
            >
              <Button>
                <IoMailUnreadOutline />
                <span>Entre em contato</span>
              </Button>
            </a>
            <p>
              Projetado e construído com{' '}
              <span style={{ color: '#F04F4F' }}>♥</span> por Flavio Ever
            </p>
          </S.ContactContent>
        </S.ContactContainer>
      )}
    </S.Main>
  )
}
