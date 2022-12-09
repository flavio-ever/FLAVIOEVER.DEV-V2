import tw, { styled, css, theme } from 'twin.macro'

export const Main = styled.main(() => [
  tw`
    container
    mx-auto
    text-purple-3
    flex
    flex-col
    gap-10
  `
])

/**
 *
 * SECTION AUTHOR
 *
 */

export const AuthorContainer = styled.section(() => [
  tw`
    flex
    items-center
    flex-col-reverse
    sm:justify-between
    sm:flex-row
    mt-32
  `
])

export const AuthorDescricaoContent = styled.div(() => [
  tw`
    relative
    flex-initial
    sm:w-1/2
    xl:pr-20
    space-y-5
    xl:space-y-20
  `
])

export const AuthorDot = styled.div(() => [
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

export const AuthorDescricaoTitulo = styled.div(() => [
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

export const AuthorDescricaoSubTitulo = styled.div(() => [tw``])

export const AuthorImagemContent = styled.div(() => [
  tw`
    flex-initial
    flex
    justify-end
    sm:w-1/2
  `
])

/***
 *
 * SECTION CAREER
 *
 */

export const CareerContainer = styled.section(() => [
  tw`
    flex
    flex-col
    gap-10
  `
])

export const CareerContent = styled.section(() => [
  tw`
    flex
    flex-col
    gap-10
  `
])

/***
 *
 * SECTION PROJECT
 *
 */

export const ProjectContainer = styled.section(() => [
  tw`
    flex
    flex-col
    gap-10
  `
])

export const ProjectContent = styled.section(() => [
  tw`
    flex
    flex-col
    gap-10
  `
])

/***
 *
 * SECTION CONTACT
 *
 */

export const ContactContainer = styled.section(() => [
  tw`
    flex
    flex-col
    gap-10
    mb-20
  `
])

export const ContactContent = styled.section(() => [
  tw`
    flex
    flex-col
    items-center
    gap-10
  `
])
