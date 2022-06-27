import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  :root {
    // Colors
    --custom-purple-1: #251D3A;
    --custom-purple-2: #25272E;
    --custom-purple-3: #C0BAED;
    --custom-purple-4: #E3E0FF;
  }

  body {
    ${tw`antialiased`};

    background-color: var(--custom-purple-1);

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
