import React from "react";
import ReactDOM from "react-dom";
import { App } from "./core/App/App";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./common/GlobalStyle";
import { defaultTheme } from "./common/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
