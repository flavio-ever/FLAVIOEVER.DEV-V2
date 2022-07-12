import React from 'react'
import Image from 'next/image'
import { RiGithubFill } from 'react-icons/ri'
import { BiLinkExternal } from 'react-icons/bi'

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
            <a href={job.links?.github} target="blank">
              <RiGithubFill />
            </a>
          )}
        </li>
        <li>
          {job.links?.preview && (
            <a href={job.links?.preview} target="blank">
              <BiLinkExternal />
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
