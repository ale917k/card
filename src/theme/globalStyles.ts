import { createGlobalStyle, css } from "styled-components";

import theme from "./theme";

const windowSizes = css`
  width: 100%;
`;

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${theme.typography.fontFamily};
  };

  html {
    ${windowSizes};
    font-size: clamp(12px, 1vw, 16px);
    font-weight: ${theme.typography.fontWeightLight};
    scroll-behavior: smooth;
  };

  body {
    ${windowSizes};
  };

  h1 {
    ${theme.typography.h1};
  };

  h2 {
    ${theme.typography.h2};
  };

  h3 {
    ${theme.typography.h3};
  };

  h4 {
    ${theme.typography.h4};
  };

  a {
    position: relative;
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
