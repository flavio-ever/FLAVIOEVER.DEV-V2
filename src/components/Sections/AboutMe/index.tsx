import React from 'react'
import { IoMdDownload } from 'react-icons/io'

import * as S from './style'
import * as Home from '../../../templates/Home/styles'
import Button from 'components/Button'

export type AboutMeProps = {
  downloadUrl: string
  largeBio: string
  title: string
}

type AboutMeSectionProps = {
  aboutMeProps: AboutMeProps
  title: string
}

const AboutMeSection = React.forwardRef(
  ({ title, aboutMeProps }: AboutMeSectionProps, ref: any) => {
    return (
      <S.SobreMimContainer ref={ref} id="section-about-me">
        <div>
          <Home.Title>{title}</Home.Title>
          <div>
            <div dangerouslySetInnerHTML={{ __html: aboutMeProps.largeBio }} />
            <br />
            <a href={aboutMeProps.downloadUrl} target="blank">
              <Button>
                <IoMdDownload />
                <p>Baixar meu cv</p>
              </Button>
            </a>
          </div>
        </div>
      </S.SobreMimContainer>
    )
  }
)

export default AboutMeSection
