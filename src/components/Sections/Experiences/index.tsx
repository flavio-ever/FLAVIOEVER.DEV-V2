import * as S from './style'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import React from 'react'
import JobsTab, { JobsProps } from 'components/JobsTab'
import * as Home from 'templates/Home/styles'

type ExperiencesSectionProps = {
  jobsProps: JobsProps[]
  title: string
}

const ExperiencesSection = React.forwardRef(
  ({ title, jobsProps }: ExperiencesSectionProps, ref: any) => {
    const { scroll } = useLocomotiveScroll()

    return (
      <S.ExperienciasContainer
        data-scroll-section
        id="section-experiences"
        ref={ref}
      >
        <Home.Title>{title}</Home.Title>
        <JobsTab jobsProps={jobsProps} />
      </S.ExperienciasContainer>
    )
  }
)

export default ExperiencesSection
