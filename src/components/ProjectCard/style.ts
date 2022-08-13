import styled from 'styled-components'
import tw, { css, theme } from 'twin.macro'

type ContainerProps = {
  evenOrOdd: boolean
}

export const Container = styled.div<ContainerProps>(({ evenOrOdd }) => [
  tw`
    flex
    justify-center

    w-full
    relative
    m-5
    `,
  !evenOrOdd && tw`flex-row-reverse`
])

type InfoWrapProps = {
  evenOrOdd: boolean
}

export const InfoWrap = styled.div<InfoWrapProps>(({ evenOrOdd }) => [
  tw`
    flex
    flex-col

    justify-between

    absolute
    z-10
    p-3
    bg-purple-1/90
    inset-0
    space-y-5
  `,
  tw`
    sm:w-2/6
    md:w-4/6

    sm:bg-purple-1/0
    sm:p-0
    sm:relative
    sm:pr-14
  `,
  !evenOrOdd && tw`sm:pr-0 sm:pl-14`,
  css`
    h1 {
      ${tw`text-purple-2 text-6xl relative`};
      ${!evenOrOdd && tw`text-right`};

      ::after {
        content: '';
        ${!evenOrOdd ? `right: 5rem;` : `left: 5rem;`}
        border-bottom: 1px solid rgb(250, 250, 250, 0.1);
        width: calc(100% - 5rem);
        position: absolute;
        top: 50%;
      }
    }

    @media only screen and (max-width: 640px) {
      h1 {
        ${tw`text-purple-3 text-4xl relative`};
        ::after {
          width: calc(100% - 5rem);
          left: 4rem;
        }
      }
    }

    ul {
      li {
        ${tw`inline-block text-purple-4 hover:text-orange-1 pr-2 text-2xl transition-colors`};
      }
    }
  `
])

export const Description = styled.div(() => [
  tw`
    text-purple-4
    space-y-4
    `,
  tw`
  `,
  css`
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    @media only screen and (min-width: 640px) {
      -webkit-line-clamp: 4;
    }

    h2 {
      ${tw`
      text-white-1
        text-2xl
      `};
    }
  `
])

export const ImageWrap = styled.div(() => [
  tw`
    relative
    w-full
    shadow-md
  `,
  tw`
    sm:w-4/6
    md:w-2/6
    sm:max-w-[31.25rem]
    sm:max-h-[22.5rem]
    `,
  css`
    @media only screen and (min-width: 1280px) {
      // Colors
      --bg-color: ${theme`colors.purple.1`};
      --dot-color: rgba(255, 255, 255, 0.4);

      // Dimensions
      --dot-size: 0.09rem;
      --dot-space: 0.5rem;

      --linear-bg: linear-gradient(
            90deg,
            var(--bg-color) calc(var(--dot-space) - var(--dot-size)),
            transparent 1%
          )
          center,
        linear-gradient(
            var(--bg-color) calc(var(--dot-space) - var(--dot-size)),
            transparent 1%
          )
          center,
        var(--dot-color);

      ::before {
        content: '';
        position: absolute;
        width: 15.5rem;
        height: 15.5rem;
        z-index: -10;
        left: -2rem;
        top: -2rem;
        background: var(--linear-bg);
        background-size: var(--dot-space) var(--dot-space);
      }

      ::after {
        content: '';
        position: absolute;
        width: 15.5rem;
        height: 15.5rem;
        z-index: -10;
        right: -1rem;
        bottom: -1rem;
        background: var(--linear-bg);
        background-size: var(--dot-space) var(--dot-space);
      }
    }

    img {
      ${tw`rounded-md`};
    }
  `
])
