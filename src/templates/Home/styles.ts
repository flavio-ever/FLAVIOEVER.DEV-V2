import tw, { styled, css } from 'twin.macro'

export const Main = styled.main(() => [
  tw`
    container
    text-purple-3
  `
])

export const Title = styled.main(() => [
  tw`
    text-purple-2
    text-4xl
    font-medium

    m-12

    before:content-['<']
    after:content-['/>']
  `,
  tw`
    sm:text-6xl
    lg:text-8xl
    xl:text-9xl
  `
])

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

/**
 * SECTION: Contato
 */
export const ContatoContainer = styled.section(() => [
  tw`
    flex
    flex-col
    items-center
    justify-center
    mb-20
    text-center
  `,
  tw`
  `,
  css`
    button {
      ${tw`mt-12`}
    }
  `
])
