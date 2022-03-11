import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";
import DarkThemeProvider from "../../common/DarkThemeProvider";
import { AppContainer } from "../../features/personalHomepage/Container";
import { Header } from "../../features/personalHomepage/Header";
import { Skills } from "../../features/personalHomepage/Skills";
import { Portfolio } from "../../features/personalHomepage/Portfolio";
import { Footer } from "../../features/personalHomepage/Footer";
import {
  ToolsIcon,
  RocketIcon,
} from "../../features/personalHomepage/Skills/styled";
import {
  goals,
  skills,
} from "../../features/personalHomepage/Skills/skillsData";

export const App = () => (
  <ReduxProvider store={store}>
    <DarkThemeProvider>
      <AppContainer>
        <Header />
        <main>
          <Skills
            title={
              <>
                My skillset includes <ToolsIcon />
              </>
            }
            skills={skills}
          />
          <Skills
            title={
              <>
                What I want to learn next <RocketIcon />
              </>
            }
            skills={goals}
          />
          <Portfolio />
        </main>
        <Footer />
      </AppContainer>
    </DarkThemeProvider>
  </ReduxProvider>
);
