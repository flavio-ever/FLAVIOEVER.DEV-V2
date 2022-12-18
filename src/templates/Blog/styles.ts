import tw, { styled, css } from 'twin.macro'

type CoverImageProps = {
  src: string
}

type TitleProps = {
  title: string
}

export const Main = styled.main(() => [
  tw`
    flex
    m-3
  `,
  css``
])

export const Container = styled.div(() => [
  tw`
    container
    mx-auto
    lg:w-3/6
    grid
    gap-3
    grid-cols-1
    md:grid-cols-1
  `
])

export const PostSection = styled.section(() => [
  tw`
    flex
  `
])

export const ProfileImage = styled.section(() => [
  tw`
  invisible
  md:visible
  flex
  w-24
  h-24
  absolute
  top-6
  left-6
  right-0
  //mx-auto
  rounded-full
  border-4
   text-white-1
   overflow-hidden
   shadow-md`,
  css`
    img {
      ${tw``}
    }
  `
])

export const CoverImage = styled.div<CoverImageProps>(({ src }) => [
  tw`
    absolute
    top-0
    right-0
    left-0
    bottom-0
  `,
  css`
    transform: scale(1.1);
    background-size: cover;
    filter: blur(2px);
    -webkit-filter: blur(2px);
    background-image: url(${src});
  `
])

export const ContainerTitle = styled.h1(() => [
  tw`
    //w-4/6
    relative
    flex
    md:justify-center
    items-center
    md:text-right
    text-center
    md:mr-10
    md:ml-40
    font-medium
    text-lg
    leading-9
  `
])

export const Title = styled.h1<TitleProps>(({ title }) => [
  tw`
  `,
  css`
    ::before {
      content: '${title}'; /* the content */
      background-color: var(--custom-orange-1);
      color: #fff;
      box-shadow: -10px 0px 0 7px var(--custom-orange-1),
        10px 0px 0 7px var(--custom-orange-1), 0 0 0 7px var(--custom-orange-1);
      box-decoration-break: clone;
    }
  `
])
