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

  /**
    https://github.com/codrops/LineHoverStyles/blob/main/css/base.css
  */
  .link {
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    color: var(--custom-orange-1);
  }

  .link::before,
  .link::after {
      position: absolute;
      width: 100%;
      height: 0px;
      background: currentColor;
      top: 100%;
      left: 0;
      pointer-events: none;
  }

  .link::before {
      content: '';
      /* show by default */
  }

  .link--mneme {
    //text-transform: uppercase;
  }

  .link--mneme::before {
      height: 100%;
      top: 0;
      opacity: 0;
  }

  .link--mneme:hover::before {
      opacity: 1;
      animation: coverUp 0.3s ease forwards;
  }

  @keyframes coverUp {
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

  .link--mneme::after {
      content: '';
      transition: opacity 0.3s;
  }

  .link--mneme:hover::after {
      opacity: 0;
  }

`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
