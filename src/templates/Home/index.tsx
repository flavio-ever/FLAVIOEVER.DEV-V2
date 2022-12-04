import { useRef } from 'react'

import * as S from './styles'

import Navbar from '../../components/Navbar'
import IntroSection, { IntroProps } from 'components/Sections/Intro'
import AboutMeSection, { AboutMeProps } from 'components/Sections/AboutMe'
import ProjectSection, { ProjectsProps } from 'components/Sections/Projects'
import ContactSection, { ContactProps } from 'components/Sections/Contact'
import ExperiencesSection, {
  ExperiencesProps
} from 'components/Sections/Experiences'

export type HomeTemplateProps = {
  authorProps: IntroProps & AboutMeProps
  jobsProps: ExperiencesProps[]
  projectsProps: ProjectsProps[]
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
      {/* SobreMim */}
      <Navbar />
      <div ref={containerRef}>
        {/* IntroSection */}
        {authorProps && <IntroSection introProps={authorProps} />}
        {/* SobreMim */}
        {authorProps && (
          <AboutMeSection title="Sobre_mim" aboutMeProps={authorProps} />
        )}
        {/* Experiencias */}
        {jobsProps.length > 0 && (
          <ExperiencesSection title="Experiências" jobsProps={jobsProps} />
        )}
        {/* Projetos */}
        {projectsProps.length > 0 && (
          <ProjectSection title="Projetos" projectsProps={projectsProps} />
        )}
        {/* Contato */}
        {contactProps?.description && contactProps.contactUrl && (
          <ContactSection
            title="Contato"
            textButton="Entre em contato"
            contactProps={contactProps}
          />
        )}
      </div>
    </S.Main>
  )
}
