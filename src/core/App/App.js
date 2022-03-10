import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";
import Normalize from "react-normalize";
import DarkThemeProvider from "../../common/DarkThemeProvider";
import { AppContainer } from "../../features/personalHomepage/Container";
import { Header } from "../../features/personalHomepage/Header";
import { Skills } from "../../features/personalHomepage/Skills";
import { Portfolio } from "../../features/personalHomepage/Portfolio";
import { Footer } from "../../features/personalHomepage/Footer";

export const App = () => (
  <ReduxProvider store={store}>
    <DarkThemeProvider>
      <Normalize />
      <AppContainer>
        <Header />
        <Skills />
        <Portfolio />
        <Footer />
      </AppContainer>
    </DarkThemeProvider>
  </ReduxProvider>
);
