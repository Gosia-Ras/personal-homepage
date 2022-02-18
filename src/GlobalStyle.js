import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
   font-family: 'Inter', sans-serif;
   max-width: 1920px;
   height: 100vh;
   background-color: ${({ theme }) => theme.colors.background};;
  }
`;
