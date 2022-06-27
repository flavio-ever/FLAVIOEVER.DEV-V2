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
  `
])

export const DescricaoContent = styled.div(() => [
  tw`
  relative
  flex-initial
  md:w-2/3
  md:mr-40
  space-y-20`
])

export const Dot = styled.div(() => [
  tw`
    absolute
    -top-3
    -left-20
  `,
  css`
    // Colors
    --bg-color: var(--custom-purple-1);
    --dot-color: rgba(255, 255, 255, 0.4);

    // Dimensions
    --dot-size: 0.09rem;
    --dot-space: 0.5rem;

    width: 15.5rem;
    height: 15.5rem;

    z-index: -99;

    background: linear-gradient(
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
    background-size: var(--dot-space) var(--dot-space);
  `
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
