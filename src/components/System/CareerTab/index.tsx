import React, { useState } from 'react'
import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import 'twin.macro'

import { CSSTransition } from 'react-transition-group'

import * as S from './styles'

export type CareerTabProps = {
  id: string
  company: string
  occupation: string
  startDate: string
  endDate: string
  url: string
  description: {
    html: string
  }
}

type CareerTab = {
  careerProps: CareerTabProps[]
}

export default function CareerTab({ careerProps }: CareerTab) {
  const [activeTabId, setActiveTabId] = useState(0)

  const formatDate = (date: string) => {
    if (!date) return 'Atualmente'

    return format(new Date(date + 'T00:00:00'), "MMMM 'de' yyyy", {
      locale: ptBr
    })
  }

  return careerProps.length ? (
    <S.Container>
      <S.CareerTabNav>
        {careerProps.map(({ id, company }, key) => {
          return (
            <S.CareerTabNavItem
              key={id}
              onClick={() => setActiveTabId(key)}
              isActive={activeTabId === key}
            >
              {company}
            </S.CareerTabNavItem>
          )
        })}
        <S.CareerTabNavItemSelected activeTabId={activeTabId} />
      </S.CareerTabNav>
      <S.CareerTabPanels>
        {careerProps.map(
          (
            { company, description, startDate, endDate, occupation, url },
            key
          ) => {
            return (
              <CSSTransition
                key={key}
                in={activeTabId === key}
                timeout={200}
                classNames="panel-fade"
              >
                <S.CareerTabPanelDescription
                  id={`tabPanel-${key}`}
                  role="tabPanel"
                  hidden={activeTabId !== key}
                >
                  <h2 tw="text-lg">
                    <span tw="text-white-1">{occupation}</span>
                    {'  '}
                    <a
                      href={url}
                      className="link link--mneme"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      @{company}
                    </a>
                  </h2>
                  <p tw="mt-2 capitalize">
                    {`${formatDate(startDate)} - ${formatDate(endDate)}`}
                  </p>
                  <div
                    tw="mt-4"
                    dangerouslySetInnerHTML={{ __html: description.html }}
                  />
                </S.CareerTabPanelDescription>
              </CSSTransition>
            )
          }
        )}
      </S.CareerTabPanels>
    </S.Container>
  ) : (
    <></>
  )
}
