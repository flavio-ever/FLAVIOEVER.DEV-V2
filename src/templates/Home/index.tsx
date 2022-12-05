import * as S from './styles'

import Navbar from '../../components/Navbar'
import IntroSection, { IntroProps } from 'components/Sections/Intro'
import ProjectSection, { ProjectsProps } from 'components/Sections/Projects'
import ContactSection, { ContactProps } from 'components/Sections/Contact'
import ExperiencesSection, {
  ExperiencesProps
} from 'components/Sections/Experiences'

export type HomeTemplateProps = {
  authorProps: IntroProps
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
  return (
    <S.Main>
      {/* SobreMim */}
      <Navbar />
      {/* IntroSection */}
      {authorProps && <IntroSection introProps={authorProps} />}
      {/* Experiencias */}
      {jobsProps.length > 0 && (
        <ExperiencesSection title="experiências" jobsProps={jobsProps} />
      )}
      {/* Projetos */}
      {projectsProps.length > 0 && (
        <ProjectSection title="projetos" projectsProps={projectsProps} />
      )}
      {/* Contato */}
      {contactProps?.description && contactProps.contactUrl && (
        <ContactSection
          title="contato"
          textButton="Entre em contato"
          contactProps={contactProps}
        />
      )}
    </S.Main>
  )
}
