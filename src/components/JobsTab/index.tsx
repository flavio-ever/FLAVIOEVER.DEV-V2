import React, { useState } from 'react'
import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import 'twin.macro'

import { CSSTransition } from 'react-transition-group'

import * as S from './styles'

export type JobsProps = {
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

type JobsTabProps = {
  jobsProps: JobsProps[]
}

export default function JobsTab({ jobsProps }: JobsTabProps) {
  const [activeTabId, setActiveTabId] = useState(0)

  const formatDate = (date: string) => {
    if (!date) return 'Atualmente'

    return format(new Date(date + 'T00:00:00'), "MMMM 'de' yyyy", {
      locale: ptBr
    })
  }

  return jobsProps.length ? (
    <S.Container>
      <S.JobsTabNav>
        {jobsProps.map(({ id, company }, key) => {
          return (
            <S.JobsTabNavItem
              key={id}
              onClick={() => setActiveTabId(key)}
              isActive={activeTabId === key}
            >
              {company}
            </S.JobsTabNavItem>
          )
        })}
        <S.JobsTabNavItemSelected activeTabId={activeTabId} />
      </S.JobsTabNav>
      <S.JobsTabPanels>
        {jobsProps.map(
          (
            { company, description, startDate, endDate, occupation, url },
            key
          ) => {
            return (
              <CSSTransition
                key={key}
                in={activeTabId === key}
                timeout={4000}
                classNames="fade"
              >
                <S.JobsTabPanelDescription
                  id={`tabPanel-${key}`}
                  role="tabPanel"
                  hidden={activeTabId !== key}
                >
                  <h2 tw="text-lg">
                    <span tw="text-white-1">{occupation}</span>
                    {'  '}
                    <a
                      href={url}
                      className="inline-link"
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
                </S.JobsTabPanelDescription>
              </CSSTransition>
            )
          }
        )}
      </S.JobsTabPanels>
    </S.Container>
  ) : (
    <></>
  )
}
