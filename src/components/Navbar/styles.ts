import tw, { styled, css, theme } from 'twin.macro'

type TUlList = {
  visible: boolean
}

type TNavbarHeader = {
  fixed: boolean
  visible: boolean
}

export const NavbarHeader = styled.header<TNavbarHeader>(
  ({ visible, fixed }) => [
    !visible && tw`invisible`,
    tw`text-sm`,
    tw`z-50 fixed left-0 top-0 right-0 backdrop-blur-sm bg-purple-1/80`,
    tw`sm:-translate-y-20 transition-all duration-700`,
    fixed && tw`sm:translate-y-0`
  ]
)

export const NavbarNav = styled.nav(() => [
  tw`container px-4 top-0 py-7 flex justify-between max-w-screen-xl m-auto`
])

export const NavbarList = styled.ul<TUlList>(({ visible }) => [
  tw`bg-purple-1 sm:bg-purple-1/0 text-purple-3`,
  tw`flex flex-col sm:flex-row justify-center items-center min-h-screen sm:min-h-0 fixed top-0 right-0 left-0 sm:static space-y-4 sm:flex sm:space-y-0 sm:space-x-4`,
  tw`transition-all duration-500 sm:transition-none`,
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
  tw`text-purple-3 hover:text-purple-3`,
  tw`flex flex-col `,
  tw`text-center space-y-2 transition-colors duration-200`,
  css`
    a {
      color: ${theme`colors.purple.3`};
    }
  `
])
