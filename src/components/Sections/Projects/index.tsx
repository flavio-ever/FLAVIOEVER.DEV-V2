import React from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

import ProjectCard, { ProjectProps } from 'components/ProjectCard'
import * as S from './style'
import * as Home from 'templates/Home/styles'

type ProjectSectionProps = {
  projectsProps: ProjectProps[]
  title: string
}

const ProjectSection = React.forwardRef(
  ({ title, projectsProps }: ProjectSectionProps, ref: any) => {
    const { scroll } = useLocomotiveScroll()

    return (
      <S.TrabalhosContainer data-scroll-section id="section-projects">
        <Home.Title>{title}</Home.Title>
        {projectsProps.map((job, key) => (
          <ProjectCard key={key} project={job} id={key + 1} />
        ))}
      </S.TrabalhosContainer>
    )
  }
)

export default ProjectSection
