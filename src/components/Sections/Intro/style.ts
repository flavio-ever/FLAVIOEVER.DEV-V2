import tw, { styled, css, theme } from 'twin.macro'

/**
 * SECTION: Intro
 */

export const IntroContainer = styled.section(() => [
  tw`
    h-screen
    flex
    items-center
    justify-center
    flex-col-reverse
    mt-36
  `,
  tw`
    sm:justify-between
    sm:flex-row
    sm:mt-0
  `
])

export const IntroDescricaoContent = styled.div(() => [
  tw`
    relative
    flex-initial
  `,
  tw`
    sm:w-1/2
    xl:pr-20
    space-y-5
    xl:space-y-20
  `
])

export const IntroDot = styled.div(() => [
  tw`
    absolute
    -top-3
    -left-20

    invisible
    xl:visible
  `,
  css`
    // Colors
    --bg-color: ${theme`colors.purple.1`};
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

export const IntroDescricaoTitulo = styled.div(() => [
  tw`
    text-white-1
    text-3xl
    leading-relaxed
  `,
  css`
    > span {
      display: inline-block;
      background-color: ${theme`colors.orange.1`};
      padding: 0 1rem;
    }
  `
])

export const IntroDescricaoSubTitulo = styled.div(() => [tw``])

export const IntroImagemContent = styled.div(() => [
  tw`
    flex-initial
    flex
    justify-end
  `,
  tw`
    sm:w-1/2
  `
])