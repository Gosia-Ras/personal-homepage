import photo from "./personal-photo.png";
import message from "./message.svg";
import {
  Hero,
  HeroContainer,
  DescriptionBox,
  ContactButton,
  ButtonText,
  MainParagraph,
  HeroHeader,
  HeroIntro,
} from "./styled";
import { DarkThemeToggle } from "../DarkThemeToggler";

export const Header = () => {
  return (
    <HeroContainer>
      <Hero src={photo} alt="Gosia Ras" />
      <DescriptionBox>
        <HeroIntro>This is</HeroIntro>
        <HeroHeader>Gosia Ras</HeroHeader>
        <MainParagraph>
          👩‍💻 I'm a Front-End Developer looking for new professional opportunities!
          Currently fascinated with React and styled-components 💅
        </MainParagraph>
        <ContactButton>
          <img src={message} alt="email icon" />
          <ButtonText
            href="mailto:ras.malgorzata@gmail.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            Hire Me
          </ButtonText>
        </ContactButton>
      </DescriptionBox>
      <DarkThemeToggle />
    </HeroContainer>
  );
};
