import 'twin.macro'
import React from 'react'

import { useEffect, useState } from 'react'
import { GiHamburger } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

import * as S from './styles'

const Navbar = React.forwardRef(({ options }: any, ref: any) => {
  const [listVisible, setListVisible] = useState<boolean>(false)
  const [navVisible, setNavVisible] = useState<boolean>(true)
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(typeof window !== 'undefined')
  }, [])

  console.log(options)

  if (isBrowser) {
    const container = document.querySelectorAll('html')[0]
    container?.addEventListener('wheel', (event: any) => {
      if (event?.deltaY > 0) {
        setNavVisible(false)
      } else {
        setNavVisible(true)
      }
    })
  }

  return (
    <S.NavbarHeader
      fixed={navVisible}
      ref={ref}
      data-scroll-section
      id="navbar"
    >
      <S.NavbarNav>
        <svg
          tw="flex space-x-6 items-center"
          width="48"
          height="42"
          viewBox="0 0 48 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="42" fill="white" />
          <path
            d="M38 34.8C38 34.2773 38.1227 33.808 38.368 33.392C38.6133 32.9653 38.944 32.6293 39.36 32.384C39.7867 32.128 40.2667 32 40.8 32C41.344 32 41.8293 32.128 42.256 32.384C42.6827 32.6293 43.0187 32.9653 43.264 33.392C43.5093 33.808 43.632 34.2773 43.632 34.8C43.632 35.3227 43.5093 35.8027 43.264 36.24C43.0187 36.6667 42.6827 37.008 42.256 37.264C41.8293 37.5093 41.344 37.632 40.8 37.632C40.2667 37.632 39.7867 37.5093 39.36 37.264C38.944 37.008 38.6133 36.6667 38.368 36.24C38.1227 35.8027 38 35.3227 38 34.8Z"
            fill="#251D3A"
          />
          <path
            d="M12.752 20.984V13.272H22.64L22.976 11H10V33.032H12.752V23.224H21.0527C21.1174 24.6245 21.4259 26.006 21.976 27.224C22.584 28.536 23.464 29.56 24.616 30.296C25.768 31.032 27.16 31.4 28.792 31.4C29.848 31.4 30.8773 31.224 31.88 30.872C32.8933 30.52 33.7947 30.0347 34.584 29.416L33.32 27.64C32.584 28.1413 31.864 28.52 31.16 28.776C30.4667 29.032 29.688 29.16 28.824 29.16C27.96 29.16 27.16 28.968 26.424 28.584C25.688 28.1893 25.096 27.5813 24.648 26.76C24.2 25.928 23.9493 24.8613 23.896 23.56L23.912 23.224L35.2636 23.2658C35.2658 23.224 35.2701 22.9475 35.272 22.904C35.2827 22.648 35.288 22.376 35.288 22.088C35.288 20.3813 35.0107 18.9147 34.456 17.688C33.912 16.4507 33.128 15.5013 32.104 14.84C31.08 14.168 29.8587 13.832 28.44 13.832C26.9467 13.832 25.6507 14.2107 24.552 14.968C23.4533 15.7253 22.6 16.7653 21.992 18.088C21.5805 18.9832 21.3028 19.9678 21.1581 20.984H12.752Z"
            fill="#251D3A"
          />
          <path
            d="M25.3364 17.368C26.179 16.4826 27.2244 16.04 28.4724 16.04C29.7417 16.04 30.755 16.4986 31.5124 17.416C32.1986 18.2375 32.587 19.4268 32.6777 20.984H28.3154H23.9531C24.119 19.3778 24.5803 18.1725 25.3364 17.368Z"
            fill="white"
          />
        </svg>
        <GiHamburger
          tw="fill-current text-purple-4 cursor-pointer sm:hidden w-6 h-6"
          onClick={() => setListVisible(!listVisible)}
        />
        <S.NavbarList visible={!listVisible}>
          <S.NavbarListItem>
            <a href="#section-home" data-scroll-to>
              01. Home
            </a>
          </S.NavbarListItem>
          <S.NavbarListItem>
            <a href="#section-experiences" data-scroll-to>
              01. Experiencias
            </a>
          </S.NavbarListItem>
          <S.NavbarListItem>
            <a href="#section-projects" data-scroll-to>
              03. Projetos
            </a>
          </S.NavbarListItem>
          <S.NavbarListItem>
            <a href="#section-contact" data-scroll-to>
              04. Contato
            </a>
          </S.NavbarListItem>
          <IoClose
            tw="fill-current text-purple-4 cursor-pointer sm:hidden absolute top-0 right-3 w-8 h-8"
            onClick={() => setListVisible(!listVisible)}
          />
        </S.NavbarList>
      </S.NavbarNav>
    </S.NavbarHeader>
  )
})

export default Navbar
