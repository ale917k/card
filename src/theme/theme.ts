import { mediaUp, mediaDown, mediaBetween } from "utils/theme";

/**
 * Styled theme object.
 */
const theme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
    up: mediaUp,
    down: mediaDown,
    between: mediaBetween,
  },
  palette: {
    common: {
      white: "#ffffff",
      black: "#2A2941",
    },
    type: "light",
    primary: {
      light: "#5C8AFF",
      main: "#1254FF",
      dark: "#0034B8",
    },
    alert: {
      success: "#0B8329",
      error: "#83190B",
    },
    grey: {
      50: "#E7EAEE",
      100: "#D2D7DF",
      150: "#B7BFCC",
    },
    text: "#2A2941",
  },
  typography: {
    fontFamily: "'Nunito Sans', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 600,
    h1: {
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontWeight: 300,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 2,
      letterSpacing: "0em",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.375,
      letterSpacing: "0.01071em",
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    button: {
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
  },
  spacing: (x: number): string => `${x * 8}px`,
  shape: {
    borderRadius: "5px",
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
    },
  },
  shadows: {},
};

export default theme;
