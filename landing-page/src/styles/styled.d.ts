import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      darkBackground: string;
      text: string;
      lightText: string;
      white: string;
      success: string;
      error: string;
      warning: string;
      info: string;
    };
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
    };
    fontWeights: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
    };
    lineHeights: {
      none: number;
      tight: number;
      snug: number;
      normal: number;
      relaxed: number;
      loose: number;
    };
    space: string[];
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    radii: {
      none: string;
      sm: string;
      default: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      full: string;
    };
    zIndices: {
      0: string;
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
      auto: string;
    };
    transitions: {
      default: string;
      fast: string;
      slow: string;
    };
  }
}
