import tw, { styled, css } from 'twin.macro'

export const Main = styled.main(() => [
  tw`
  container

  mt-28
  font-thin
  font-FiraCode
  text-purple-3`,

  css`
    border: 1px solid red;
    border-style: dashed;
  `
])

export const ContainerAbout = styled.div(() => [
  tw`
  flex
  sm:justify-between
  items-center
  justify-center
  flex-col-reverse
  sm:flex-row py-10
  `,
  css`
    border: 1px solid green;
  `
])

export const Descricao = styled.div(() => [tw``])

export const DescricaoTitulo = styled.div(() => [
  tw`
  text-white-1
  text-3xl
  mb-5
  `
])

export const DescricaoSubTitulo = styled.div(() => [tw``])

export const Imagem = styled.div(() => [tw`mb-5`])
