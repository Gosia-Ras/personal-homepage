import photo from "../../assets/personal-photo.png";
import message from "../../assets/Message.svg";
import {
  Hero,
  HeroContainer,
  DescriptionBox,
  ContactButton,
  ButtonText,
} from "./styled";

export const Header = () => {
  return (
    <HeroContainer>
      <Hero src={photo} alt="Gosia Ras" />
      <DescriptionBox>
        <span>THIS IS</span>
        <h1>Gosia Ras</h1>
        <p>
          👨🏻‍💻 I'm a Front-End Developer looking for new opportunities to develop!
          Currently fascinated with React and styled-components
        </p>
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
