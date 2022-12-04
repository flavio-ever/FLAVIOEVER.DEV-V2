import tw, { css, styled } from 'twin.macro'

export const ContatoContainer = styled.section(() => [
  tw`
    flex
    flex-col
    items-center
    justify-center
    mb-20
    text-center

    min-h-[50vh]
  `,
  tw`
  `,
  css`
    button {
      ${tw`mt-12`}
    }
  `
])
