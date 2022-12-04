import React from 'react'
import { IoMailUnreadOutline } from 'react-icons/io5'

import * as S from './style'
import * as Home from 'templates/Home/styles'

import Button from 'components/Button'

export type ContactProps = {
  description: string
  contactUrl: string
}

type ContactSectionProps = {
  contactProps: ContactProps
  textButton: string
  title: string
}

const ContactSection = React.forwardRef(
  ({ title, textButton, contactProps }: ContactSectionProps, ref: any) => {
    return (
      <S.ContatoContainer ref={ref} id="section-contact">
        <Home.Title>{title}</Home.Title>
        <div dangerouslySetInnerHTML={{ __html: contactProps?.description }} />
        <a href={contactProps.contactUrl} target={'_blank'} rel="noreferrer">
          <Button>
            <IoMailUnreadOutline />
            <span>{textButton}</span>
          </Button>
        </a>
      </S.ContatoContainer>
    )
  }
)

export default ContactSection
