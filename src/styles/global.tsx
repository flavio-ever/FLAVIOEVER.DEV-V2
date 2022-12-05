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

  /**
    @react-transition-group
  */
  .panel-fade-enter {
    opacity: 0;
  }
  .panel-fade-enter-active {
    opacity: 1;
    transition: opacity 600ms;
  }
  .panel-fade-exit {
    opacity: 1;
  }
  .panel-fade-exit-active {
    opacity: 0;
    transition: opacity 600ms;
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
