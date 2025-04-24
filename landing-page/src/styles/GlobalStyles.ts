import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    font-family: ${theme.fonts.body};
    font-size: 16px;
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
    line-height: ${theme.lineHeights.normal};
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.tight};
    margin-bottom: ${theme.space[4]};
    color: ${theme.colors.text};
  }
  
  h1 {
    font-size: ${theme.fontSizes["5xl"]};
    font-weight: ${theme.fontWeights.extrabold};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes["4xl"]};
    }
  }
  
  h2 {
    font-size: ${theme.fontSizes["4xl"]};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes["3xl"]};
    }
  }
  
  h3 {
    font-size: ${theme.fontSizes["3xl"]};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes["2xl"]};
    }
  }
  
  h4 {
    font-size: ${theme.fontSizes["2xl"]};
  }
  
  h5 {
    font-size: ${theme.fontSizes.xl};
  }
  
  h6 {
    font-size: ${theme.fontSizes.lg};
  }
  
  p {
    margin-bottom: ${theme.space[4]}px;
    font-size: ${theme.fontSizes.md};
    line-height: ${theme.lineHeights.relaxed};
  }
  
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: ${theme.transitions.default};
    
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
  
  button {
    cursor: pointer;
    font-family: ${theme.fonts.body};
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  code {
    font-family: ${theme.fonts.monospace};
  }
  
  ul, ol {
    margin-bottom: ${theme.space[4]}px;
    padding-left: ${theme.space[6]}px;
  }
  
  section {
    padding: ${theme.space[13]} 0;
    
    @media (max-width: ${theme.breakpoints.md}) {
      padding: ${theme.space[11]} 0;
    }
    
    @media (max-width: ${theme.breakpoints.sm}) {
      padding: ${theme.space[8]} 0;
    }
  }
`;

export default GlobalStyles;
