import tw, { styled, css, theme } from 'twin.macro'

type TUlList = {
  visible: boolean
}

type TNavbarHeader = {
  fixed: boolean
}

export const NavbarHeader = styled.header<TNavbarHeader>(({ fixed }) => [
  tw`
    bg-purple-1/80
      z-50
      fixed
      left-0
      top-0
      right-0
      backdrop-blur-sm
      text-sm
      transition-all
      duration-700
    `,
  tw`sm:-translate-y-28`,
  fixed && tw`sm:translate-y-0`
])

export const NavbarNav = styled.nav(() => [
  tw`
    container
    px-4
    top-0
    py-7
    flex
    justify-between
    max-w-screen-xl
    m-auto
  `
])

export const NavbarList = styled.ul<TUlList>(({ visible }) => [
  tw`
    backdrop-blur-sm
    sm:backdrop-blur-0
    bg-purple-1/95
    sm:bg-purple-1/10
    text-purple-3
  `,
  tw`
    flex
    flex-col
    justify-center
    items-center
    min-h-screen
    fixed
    top-0
    right-0
    left-0
    sm:static
    space-y-4
    transition-all
    duration-500
    sm:transition-none
  `,
  tw`
    sm:flex
    sm:flex-row
    sm:space-y-0
    sm:space-x-4
    sm:min-h-0
  `,
  css`
    ::before {
      content: '<ul>';

      @media only screen and (max-width: 640px) {
        margin: 0 0 1rem 0;
      }

      margin-right: 1rem;
      color: ${theme`colors.purple.4`};
    }
    ::after {
      content: '</ul>';
      margin-left: 1rem;
      @media only screen and (max-width: 640px) {
        margin: 1rem 0 0 0;
      }

      color: ${theme`colors.purple.4`};
    }
  `,
  visible &&
    css`
      & {
        top: -100vh;
      }
    `
])

export const NavbarListItem = styled.li(() => [
  tw`
    text-purple-3
    hover:text-purple-3
    flex
    flex-col
    text-center
    space-y-2
    transition-colors
    duration-200
  `,
  css`
    a {
      color: ${theme`colors.purple.3`};
    }
  `
])
