import { createGlobalStyle } from "styled-components";
import {backgroundColor} from "./theme"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
   font-family: 'Inter', sans-serif;
   height: 100vh;
   overflow-x: hidden;
   margin: 0;
   background-color: ${backgroundColor};

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
   margin: 0 auto;
  }
  }
`;
