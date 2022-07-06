import styled from 'styled-components'
import tw, { css, theme } from 'twin.macro'

export const Container = styled.div(() => [
  tw`
    flex
    justify-between
    w-full
    relative
    m-5
    `,
  tw`
  `,
  css``
])

export const InfoWrap = styled.div(() => [
  tw`
    absolute
    z-10
    p-3
    bg-purple-1/90
    inset-0
    space-y-5
  `,
  tw`
    sm:bg-purple-1/0
    sm:p-0
    sm:relative
    sm:w-4/6
    sm:pr-16
  `,
  css`
    h1 {
      ${tw`text-purple-2 text-6xl relative`};

      ::after {
        content: '';
        border-bottom: 1px solid rgb(250, 250, 250, 0.1);
        width: calc(100% - 5rem);
        left: 5rem;
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

    h2 {
      ${tw`
      text-white-1
        text-2xl
      `};
    }
  `
])

export const Description = styled.div(() => [
  tw`
    text-purple-4
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
      -webkit-line-clamp: 6;
    }
  `
])

export const ImageWrap = styled.div(() => [
  tw`
    relative
    w-full
  `,
  tw`
    sm:w-2/6
    sm:max-w-[31.25rem]
    sm:max-h-[22.5rem]
    `,
  css`
    @media only screen and (min-width: 640px) {
      // Colors
      --bg-color: ${theme`colors.purple.1`};
      --dot-color: rgba(255, 255, 255, 0.4);
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

      // Dimensions
      --dot-size: 0.09rem;
      --dot-space: 0.5rem;

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
        right: -2rem;
        bottom: -2rem;
        background: var(--linear-bg);
        background-size: var(--dot-space) var(--dot-space);
      }
    }
  `
])
