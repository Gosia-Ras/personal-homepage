import { Header } from "./common/Header";
import { Skills } from "./common/Skills";
import { Container } from "./common/Container";
import { Contact } from "./common/Contact";
import { Portfolio } from "./common/Portfolio";

function App() {
  return (
    <Container>
      <Header />
      <Skills />
      <Portfolio />
      <Contact />
    </Container>
  );
}

export default App;
