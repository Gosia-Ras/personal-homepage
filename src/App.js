import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";
import Normalize from "react-normalize";
import DarkThemeProvider from "./features/DarkThemeProvider";
import { Container } from "./common/Container/styled";
import { Header } from "./common/Header";
import { Skills } from "./common/Skills";
import { Contact } from "./common/Contact";
import { Portfolio } from "./common/Portfolio";

export const App = () => (
  <ReduxProvider store={store}>
    <DarkThemeProvider>
      <Normalize />
      <Container>
        <Header />
        <Skills />
        <Portfolio />
        <Contact />
      </Container>
    </DarkThemeProvider>
  </ReduxProvider>
);
