import tw, { styled, css } from 'twin.macro'

export const Main = styled.main(() => [
  tw`
  container

  mt-28
  font-thin
  font-FiraCode
  text-purple-3`
])

export const Container = styled.div(() => [
  tw`
  flex
  sm:justify-between
  items-center
  justify-center
  flex-col-reverse
  sm:flex-row
  py-10
  `
])

export const DescricaoContent = styled.div(() => [
  tw`
  flex-initial
  md:w-2/3
  md:mr-40
  space-y-9`
])

export const DescricaoTitulo = styled.div(() => [
  tw`
  text-white-1
  text-3xl
  leading-relaxed
  `,
  css`
    > span {
      display: inline-block;
      background-color: var(--custom-orange-1);
      padding: 0 1rem;
    }
  `
])

export const DescricaoSubTitulo = styled.div(() => [tw``])

export const ImagemContent = styled.div(() => [tw`flex-initial md:w-1/3`])
