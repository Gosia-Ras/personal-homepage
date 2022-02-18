import photo from "../../assets/personal-photo.png";
import message from "../../assets/Message.svg";
import {
  Hero,
  HeroContainer,
  DescriptionBox,
  ContactButton,
  ButtonText,
  MainParagraph
} from "./styled";

export const Header = () => {
  return (
    <HeroContainer>
      <Hero src={photo} alt="Gosia Ras" />
      <DescriptionBox>
        <span>THIS IS</span>
        <h1>Gosia Ras</h1>
        <MainParagraph>
          👨🏻‍💻 I'm a Front-End Developer looking for new opportunities to develop!
          Currently fascinated with React and styled-components
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
    </HeroContainer>
  );
};
