import { mediaUp, mediaDown, mediaBetween } from "utils/theme";

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
      black: "#292E38",
    },
    type: "light",
    primary: {
      light: "#5A8AF2",
      main: "#346FEF",
      dark: "#1356E7",
    },
    alert: {
      success: "#0B8329",
      error: "#83190B",
    },
    grey: {
      50: "#F9FAFB",
      100: "#E5E8EB",
      150: "#BAC3C9",
    },
    text: "#292E38",
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: "3.625rem",
      lineHeight: 1.25,
    },
    h2: {
      fontWeight: 300,
      fontSize: "3rem",
      lineHeight: 1.5,
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.5,
      letterSpacing: "0em",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.75rem",
      lineHeight: 1.5,
      letterSpacing: "0em",
    },
    body: {
      lg: {
        fontSize: "1rem",
        lineHeight: 1.5,
      },
      reg: {
        fontSize: "0.875rem",
        lineHeight: 1.5,
      },
      sm: {
        fontSize: "0.75rem",
        lineHeight: 1.5,
      },
    },
    button: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      textTransform: "uppercase",
    },
  },
  spacing: (x: number): string => `${x * 8}px`,
  shape: {
    borderRadius: "8px",
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
