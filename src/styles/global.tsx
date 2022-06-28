import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  :root {
    // Colors
    --custom-purple-1: #251D3A;
    --custom-purple-2: #25272E;
    --custom-purple-3: #C0BAED;
    --custom-purple-4: #E3E0FF;
    --custom-orange-1: #FF7700;
  }

  html {
    scrollbar-color: var(--custom-purple-3) var(--custom-purple-1);
    scrollbar-width: thin;
    scroll-behavior: smooth;
  }

  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-track {
    background: var(--custom-purple-1)
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--custom-purple-3);
    border: 3px solid var(--custom-purple-1);
    border-radius: 10px;
  }

  body {
    ${tw`antialiased`};

    background-color: var(--custom-purple-1);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    /* * {
      border: 1px solid #fff;
    } */
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
