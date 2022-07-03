import styled from 'styled-components'
import tw, { css } from 'twin.macro'

export const Container = styled.button(() => [
  tw`
    text-[1rem]
    font-medium

    cursor-pointer
    border-solid
    border
    border-orange-1

    text-orange-1
    rounded-md
    text-center

    px-10
    py-4

    flex
    justify-center
    items-center

    space-x-3
    `,
  tw`
    hover:bg-orange-1
    hover:text-white-1
      `,
  css`
    transition: background-color 0.2s;
  `
])
