import Image from 'next/image'
import { IoMdDownload } from 'react-icons/io'
import { CgMoreO } from 'react-icons/cg'
import { IoMailUnreadOutline } from 'react-icons/io5'
import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import Link from 'next/link'

import Navbar from '../../components/System/Navbar'
import Button from 'components/Form/Button'
import CareerTab, { CareerTabProps } from 'components/System/CareerTab'
import ProjectCard, { ProjectProps } from 'components/System/ProjectCard'
import Title from 'components/System/Title'
import * as S from './styles'

export type AuthorProps = {
  title: string
  smartBio: string
  downloadUrl: string
}

export type PostProps = {
  title: string
  slug: string
  date: string
}

export type ContactProps = {
  description: string
  contactUrl: string
}

export type HomeTemplateProps = {
  authorProps: AuthorProps
  postsProps: PostProps[]
  careerProps: CareerTabProps[]
  projectsProps: ProjectProps[]
  contactProps: ContactProps
}

export default function HomeTemplate({
  authorProps,
  postsProps,
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
            {postsProps.map((post, key) => (
              <Link href={`blog/${post.slug}`} key={key}>
                <S.PostItem>
                  <S.PostItemDate>
                    {format(new Date(post.date + 'T00:00:00'), "dd 'de' MMM", {
                      locale: ptBr
                    })}
                  </S.PostItemDate>
                  <S.PostItemTitle>{post.title}</S.PostItemTitle>
                </S.PostItem>
              </Link>
            ))}
          </S.PostContent>
          <S.PostButtonContent>
            <Link href="blog">
              <Button>
                <CgMoreO />
                <p>Ver tudo</p>
              </Button>
            </Link>
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
