import { createGlobalStyle, css } from "styled-components";

import theme from "./theme";

const windowSizes = css`
  width: 100%;
`;

/**
 * Styles applied globally to entire application.
 */
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${theme.typography.fontFamily};
  }

  html {
    ${windowSizes};
    font-size: clamp(14px, 1vw, 16px);
    font-weight: ${theme.typography.fontWeightLight};
    scroll-behavior: smooth;
  }

  body {
    ${windowSizes};

    &.modal-open {
      overflow: hidden;
    }
  }

  a {
    position: relative;
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
