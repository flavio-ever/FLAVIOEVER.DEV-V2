import styled from 'styled-components'
import tw, { css } from 'twin.macro'

type ContainerProps = {
  evenOrOdd: boolean
}

type InfoWrapProps = {
  evenOrOdd: boolean
}

export const Container = styled.div<ContainerProps>(({ evenOrOdd }) => [
  tw`
    flex
    justify-center

    w-full
    relative
    `,
  !evenOrOdd && tw`flex-row-reverse`
])

export const InfoWrap = styled.div<InfoWrapProps>(({ evenOrOdd }) => [
  tw`
    flex
    flex-col

    justify-between
    md:justify-start

    absolute
    z-10
    p-3
    bg-purple-1/90
    inset-0
    space-y-5

    sm:w-3/5
    sm:bg-purple-1/0
    sm:p-0
    sm:relative
    sm:pr-14
  `,
  !evenOrOdd && tw`sm:pr-0 sm:pl-14`,
  css`
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
    sm:w-2/5
    `,
  css`
    image {
      border: 10px solid red;
    }

    img {
      ${tw`rounded-md`};
    }
  `
])
