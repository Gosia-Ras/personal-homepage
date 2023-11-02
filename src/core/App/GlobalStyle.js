import { createGlobalStyle } from "styled-components";
import { backgroundColor } from "./theme";

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
  background: ${backgroundColor};
   padding: 0;
   transition: background 0.3s;
   letter-spacing: 0.05em;
    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
   margin: 0 auto;
  }
  }

  main {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  }
`;
