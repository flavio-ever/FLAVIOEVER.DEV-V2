import tw, { styled } from 'twin.macro'

export const Main = styled.main(() => [
  tw`
    container
    mx-auto
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
