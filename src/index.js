import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { defaultTheme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
