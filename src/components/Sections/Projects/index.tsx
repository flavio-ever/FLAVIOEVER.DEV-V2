import React from 'react'

import ProjectCard, { ProjectProps } from 'components/ProjectCard'
import * as S from './style'
import * as Home from 'templates/Home/styles'

export type ProjectsProps = ProjectProps

type ProjectSectionProps = {
  title: string
  projectsProps: ProjectsProps[]
}

const ProjectSection = React.forwardRef(
  ({ title, projectsProps }: ProjectSectionProps, ref: any) => {
    return (
      <S.TrabalhosContainer ref={ref} id="section-projects">
        <Home.Title>{title}</Home.Title>
        {projectsProps.map((job, key) => (
          <ProjectCard key={key} project={job} id={key + 1} />
        ))}
      </S.TrabalhosContainer>
    )
  }
)

export default ProjectSection
