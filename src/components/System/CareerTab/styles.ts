import tw, { styled, css, theme } from 'twin.macro'

type TCareerTabNavItem = { isActive: boolean }
type CareerTabNavItemSelected = { activeTabId: number }

export const Container = styled.div(() => [
  tw`
    flex
    flex-col
    overflow-x-hidden
    w-full
  `,
  tw`
    sm:overflow-visible
    sm:flex-row
  `,
  css``
])

export const CareerTabNav = styled.nav(() => [
  tw`
    relative
    flex
    flex-row
    overflow-x-auto
    mb-5
  `,
  tw`
    sm:overflow-hidden
    sm:flex-col
    sm:mr-10
    sm:mb-auto
    sm:min-w-max
  `,
  css`
    ::before {
      @media (min-width: 640px) {
        content: '';
        position: absolute;
        top: 0;
        left: 0.1rem;
        width: 1px;
        background-color: ${theme`colors.purple.2`};
        height: 100%;
      }
    }
  `
])

export const CareerTabNavItem = styled.div(
  ({ isActive = false }: TCareerTabNavItem) => [
    tw`
      flex
      place-items-center
      h-16
      min-w-[13rem]
      w-40
      pl-5
      pr-5
      text-purple-4
      cursor-pointer
      hover:bg-purple-2
    `,
    tw`
      sm:h-12
      sm:w-52
      `,
    isActive && tw`text-orange-1`
  ]
)

export const CareerTabNavItemSelected = styled.div(
  ({ activeTabId }: CareerTabNavItemSelected) => [
    tw`
      bg-orange-1
      absolute
      z-10
      top-auto
      left-0
      w-52
      h-1
    `,
    tw`
      sm:w-1
      sm:h-12
    `,
    css`
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transition-delay: 0.1s;
      transform: translateY(calc(${activeTabId} * 3rem));
      @media (max-width: 640px) {
        transform: translateX(calc(${activeTabId} * 13rem));
      }
    `
  ]
)

export const CareerTabPanels = styled.section(() => [
  tw`sm:w-full min-h-[13rem]`
])

export const CareerTabPanelDescription = styled.article(() => [
  css`
    a {
      color: ${theme`colors.orange.1`};
    }

    ul {
      position: relative;
      list-style: none;
      li {
        margin-left: 1rem;
        ::before {
          content: '';
          position: relative;
          left: -1rem;
          top: 0rem;
          border: solid ${theme`colors.orange.1`};
          border-width: 0 2px 2px 0;
          display: inline-block;
          padding: 2px;
          transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
        }
      }
    }
  `
])
