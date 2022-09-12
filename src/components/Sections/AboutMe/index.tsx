import { IoMdDownload } from 'react-icons/io'
import * as S from './style'
import * as Home from '../../../templates/Home/styles'
import Button from 'components/Button'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import React from 'react'

type AboutMeSectionProps = {
  largeBio: string
  downloadUrl: string
  title: string
}

const AboutMeSection = React.forwardRef(
  ({ title, largeBio, downloadUrl }: AboutMeSectionProps, ref: any) => {
    const { scroll } = useLocomotiveScroll()

    return (
      <S.SobreMimContainer ref={ref} data-scroll-section id="section-about-me">
        <div data-scroll data-scroll-speed="3" data-scroll-position="top">
          <Home.Title>{title}</Home.Title>
          <div>
            <div dangerouslySetInnerHTML={{ __html: largeBio }} />
            <br />
            <a href={downloadUrl} target="blank">
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
