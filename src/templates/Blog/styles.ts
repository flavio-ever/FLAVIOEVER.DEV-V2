import tw, { styled, css } from 'twin.macro'

type CoverImageProps = {
  src: string
}

export const Main = styled.main(() => [
  tw`
    flex
  `,
  css`
    .link--kale {
      font-weight: 600;
    }

    .link--kale::before {
      height: 10px;
      top: 100%;
      opacity: 0;
    }

    .link--kale:hover::before {
      opacity: 1;
      animation: lineUp 0.3s ease forwards;
    }

    @keyframes lineUp {
      0% {
        transform-origin: 50% 100%;
        transform: scale3d(1, 0.045, 1);
      }

      50% {
        transform-origin: 50% 100%;
        transform: scale3d(1, 1, 1);
      }

      51% {
        transform-origin: 50% 0%;
        transform: scale3d(1, 1, 1);
      }

      100% {
        transform-origin: 50% 0%;
        transform: scale3d(1, 0.045, 1);
      }
    }

    .link--kale::after {
      content: '';
      transition: opacity 0.3s;
      opacity: 0;
      transition-delay: 0s;
    }

    .link--kale:hover::after {
      opacity: 1;
      transition-delay: 0.3s;
    }
  `
])

export const Container = styled.div(() => [
  tw`
    container
    mx-auto
    sm:w-3/6
    grid
    gap-4
    grid-cols-1
    sm:grid-cols-3
  `
])

export const PostSection = styled.section(() => [
  tw`
    flex
  `
])

export const ProfileImage = styled.section(() => [
  tw`flex
  w-24
  h-24
  absolute
  top-[4.5rem]
  left-0
  right-0
  mx-auto
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
  flex
  w-full
  h-32`,
  css`
    transform: scale(1.1);
    background-size: cover;
    filter: blur(2px);
    -webkit-filter: blur(2px);
    background-image: url(${src});
  `
])
