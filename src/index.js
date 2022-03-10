import React from "react";
import ReactDOM from "react-dom";
import { App } from "./core/App/App";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./core/App/GlobalStyle";
import { defaultTheme } from "./core/App/theme";
import Normalize from "react-normalize";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Normalize />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
