import React from 'react'

import * as S from './style'
import JobsTab, { JobsProps } from 'components/JobsTab'
import * as Home from 'templates/Home/styles'

export type ExperiencesProps = JobsProps

type ExperiencesSectionProps = {
  jobsProps: ExperiencesProps[]
  title: string
}

const ExperiencesSection = React.forwardRef(
  ({ title, jobsProps }: ExperiencesSectionProps, ref: any) => {
    return (
      <S.ExperienciasContainer id="section-experiences" ref={ref}>
        <Home.Title>{title}</Home.Title>
        <JobsTab jobsProps={jobsProps} />
      </S.ExperienciasContainer>
    )
  }
)

export default ExperiencesSection
