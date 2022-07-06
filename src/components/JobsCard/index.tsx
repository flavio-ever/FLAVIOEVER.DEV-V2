import React from 'react'
import Image from 'next/image'

import * as S from './style'

export interface CardProps {
  job: {
    title: string
    description: string
    image: string
    links: {
      preview: string
      github: string
    }
  }
  id: number
}

const JobsCard: React.FC<CardProps> = ({ job, id }) => (
  <S.Container>
    <S.InfoWrap>
      <h1>0{id}</h1>
      <h2>{job.title}</h2>
      <S.Description>{job.description}</S.Description>
      <div>
        {job.links.github} / {job.links.preview}
      </div>
    </S.InfoWrap>
    <S.ImageWrap>
      <Image layout="responsive" width={500} height={360} src={job.image} />
    </S.ImageWrap>
  </S.Container>
)

export default JobsCard
