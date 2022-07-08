import React from 'react'
import Image from 'next/image'
import { RiGlobalLine, RiGithubFill } from 'react-icons/ri'

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

      <S.Description>
        <h2>{job.title}</h2>
        <p>{job.description}</p>
      </S.Description>
      <ul>
        <li>
          {job.links?.github && (
            <a href="" target="blank">
              <RiGithubFill />
            </a>
          )}
        </li>
        <li>
          {job.links?.preview && (
            <a href="" target="blank">
              <RiGlobalLine />
            </a>
          )}
        </li>
      </ul>
    </S.InfoWrap>
    <S.ImageWrap>
      <Image layout="responsive" width={500} height={360} src={job.image} />
    </S.ImageWrap>
  </S.Container>
)

export default JobsCard
