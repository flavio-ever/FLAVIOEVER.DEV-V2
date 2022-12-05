import tw, { styled } from 'twin.macro'

/**
 * SECTION: Trabalhos
 */
export const TrabalhosContainer = styled.section(() => [
  tw`
    flex
    flex-col
    items-center
    justify-center

    min-h-[50vh]
  `,
  tw`
    sm:space-y-20
  `
])
