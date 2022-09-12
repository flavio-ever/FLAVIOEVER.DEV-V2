import { useRef } from 'react'
import { IoMailUnreadOutline } from 'react-icons/io5'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import * as S from './styles'

// Components
import Button from 'components/Button'
import { JobsProps } from 'components/JobsTab'
import ProjectCard, { ProjectProps } from 'components/ProjectCard'
import Navbar from '../../components/Navbar'

// Sections components
import IntroSection from 'components/Sections/Intro'
import AboutMeSection from 'components/Sections/AboutMe'
import ExperiencesSection from 'components/Sections/Experiences'
import ProjectSection from 'components/Sections/Projects'

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
  const containerRef = useRef(null)

  return (
    <S.Main>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          repeat: false,
          getDirection: true,
          direction: 'vertical',
          tablet: {
            smooth: true,
            direction: 'vertical'
          },
          smartphone: {
            smooth: false,
            direction: 'vertical'
          }
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        {/* SobreMim */}
        <div data-scroll-container ref={containerRef}>
          {/* Navbar */}
          <Navbar />

          {authorProps && (
            <IntroSection
              title={authorProps.title}
              smartBio={authorProps.smartBio}
            />
          )}
          {/* SobreMim */}
          {authorProps && (
            <AboutMeSection
              title="Sobre_mim"
              largeBio={authorProps.largeBio}
              downloadUrl={authorProps.downloadUrl}
            />
          )}
          {/* Experiencias */}
          {jobsProps.length && (
            <ExperiencesSection title="Experiências" jobsProps={jobsProps} />
          )}
          {/* Projetos */}
          {projectsProps.length && (
            <ProjectSection title="Projetos" projectsProps={projectsProps} />
          )}
          {/* Contato */}
          {contactProps?.description && contactProps.contactUrl && (
            <S.ContatoContainer data-scroll-section id="section-contact">
              <S.Title>contato</S.Title>
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
                  <span>Deixe seu h3ll0 w0rld!</span>
                </Button>
              </a>
            </S.ContatoContainer>
          )}
        </div>
      </LocomotiveScrollProvider>
    </S.Main>
  )
}
