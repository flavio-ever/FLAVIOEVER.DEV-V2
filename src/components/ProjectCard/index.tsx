import Image from 'next/image'
import { RiGithubFill } from 'react-icons/ri'
import { BiLinkExternal } from 'react-icons/bi'

import * as S from './style'

export type ProjectProps = {
  id: string
  title: string
  description: {
    html: string
  }
  image: {
    url: string
  }
  github: string
  demo: string
}

type JobsCardProps = {
  project: ProjectProps
  id: number
}

export default function ProjectCard({ project, id }: JobsCardProps) {
  const evenOrOdd = id % 2 === 0

  return (
    <S.Container evenOrOdd={evenOrOdd}>
      <S.InfoWrap evenOrOdd={evenOrOdd}>
        <h1>0{id}</h1>

        <S.Description>
          <h2>{project.title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: project.description.html }}
          ></div>
        </S.Description>
        <ul>
          <li>
            {project?.github && (
              <a href={project?.github} target="blank">
                <RiGithubFill />
              </a>
            )}
          </li>
          <li>
            {project?.demo && (
              <a href={project.demo} target="blank">
                <BiLinkExternal />
              </a>
            )}
          </li>
        </ul>
      </S.InfoWrap>
      <S.ImageWrap>
        <Image
          layout="responsive"
          width={500}
          height={360}
          src={project.image.url}
        />
      </S.ImageWrap>
    </S.Container>
  )
}
