import React, { useState } from 'react'
import 'twin.macro'

import { CSSTransition } from 'react-transition-group'

import * as S from './styles'

const JobsTab: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(0)

  const response = {
    data: [
      {
        company: 'Space-X',
        occupation: 'Engenheiro de Software',
        range: 'Janeiro 2018 - Atualmente',
        url: 'http://google.com.br',
        html: '<ul><li>Olá mundo</li><li>Olá mundo</li><li>Olá mundo</li></ul>'
      },
      {
        company: 'Amazon',
        occupation: 'Engenheiro de Software',
        range: 'Janeiro 2018 - Dezembro 2019',
        url: 'http://google.com.br',
        html: '<ul><li>Olá mundo</li></ul>'
      },
      {
        company: 'Google',
        occupation: 'Engenheiro de Software',
        range: 'Janeiro 2018 - Dezembro 2019',
        url: 'http://google.com.br',
        html: '<ul><li>Olá mundo</li></ul>'
      },
      {
        company: 'PicPay',
        occupation: 'Engenheiro de Software',
        range: 'Janeiro 2018 - Dezembro 2019',
        url: 'http://google.com.br',
        html: '<ul><li>Olá mundo</li></ul>'
      },
      {
        company: 'Nubank',
        occupation: 'Engenheiro de Software',
        range: 'Janeiro 2018 - Dezembro 2019',
        url: 'http://google.com.br',
        html: '<ul><li>Olá mundo</li></ul>'
      }
    ]
  }

  return (
    response?.data && (
      <S.Container>
        <S.JobsTabNav>
          {response.data.map(({ company }, i) => {
            return (
              <S.JobsTabNavItem
                key={i}
                onClick={() => setActiveTabId(i)}
                isActive={activeTabId === i}
              >
                {company}
              </S.JobsTabNavItem>
            )
          })}
          <S.JobsTabNavItemSelected activeTabId={activeTabId} />
        </S.JobsTabNav>
        <S.JobsTabPanels>
          {response.data.map(({ company, occupation, range, url, html }, i) => {
            return (
              <CSSTransition
                key={i}
                in={activeTabId === i}
                timeout={4000}
                classNames="fade"
              >
                <S.JobsTabPanelDescription
                  id={`tabPanel-${i}`}
                  role="tabPanel"
                  hidden={activeTabId !== i}
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
                  <p tw="mt-2">{range}</p>
                  <div tw="mt-4" dangerouslySetInnerHTML={{ __html: html }} />
                </S.JobsTabPanelDescription>
              </CSSTransition>
            )
          })}
        </S.JobsTabPanels>
      </S.Container>
    )
  )
}

export default JobsTab
