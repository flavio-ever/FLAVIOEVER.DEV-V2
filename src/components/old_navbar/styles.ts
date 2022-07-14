import tw, { styled, css, theme } from 'twin.macro'

type TUlList = {
  visible: boolean
}

type TNavbarHeader = {
  visible: boolean
}

export const NavbarHeader = styled.header<TNavbarHeader>(({ visible }) => [
  !visible && tw`invisible`,
  tw`text-sm`,
  tw`fixed left-0 top-0 right-0 bg-purple-1 z-50`
])

export const NavbarNav = styled.nav(() => [
  tw`container px-4 top-0 py-7 flex justify-between max-w-screen-xl m-auto`
])

export const NavbarList = styled.ul<TUlList>(({ visible }) => [
  tw`bg-purple-1`,
  tw`flex flex-col sm:flex-row justify-center items-center`,
  tw`min-h-screen sm:min-h-0`,
  tw`fixed top-0 right-0 left-0 sm:static`,
  tw`space-y-6 sm:flex sm:space-y-0 sm:space-x-4`,
  tw`transition-all duration-500 sm:transition-none text-purple-3`,
  css`
    ::before {
      content: '<ul>';
      margin-right: 1rem;
      color: ${theme`colors.purple.4`};
    }
    ::after {
      content: '</ul>';
      margin-left: 1rem;
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
  tw`text-purple-3 hover:text-purple-3`,
  tw`flex flex-col `,
  tw`text-center space-y-2 transition-colors duration-200`,
  css`
    a {
      color: ${theme`colors.purple.3`};
    }
  `
])
