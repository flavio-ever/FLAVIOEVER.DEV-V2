import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  :root {
    --custom-purple-1: #251D3A;
    --custom-purple-2: #322650;
    --custom-purple-3: #C0BAED;
    --custom-purple-4: #E3E0FF;
    --custom-orange-1: #FF7700;
  }

  html {
    /* scrollbar-color: var(--custom-purple-3) var(--custom-purple-1);
    scrollbar-width: thin;
    scroll-behavior: smooth; */
  }

  body {
    ${tw`antialiased`};

    ${tw`font-FiraCode font-thin`};

    background-color: var(--custom-purple-1);

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background: var(--custom-purple-1)
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--custom-purple-3);
      border: 3px solid var(--custom-purple-1);
      border-radius: 10px;
    }

    hr {
      border-color: var(--custom-purple-2);
    }
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
