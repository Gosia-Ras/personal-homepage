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
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Header = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <HeroContainer data-aos="fade-up" data-aos-duration="3000"  data-aos-offset="500">
      <Hero src={photo} alt="Gosia Hildebrand" />
      <DescriptionBox>
        <HeroIntro>This is</HeroIntro>
        <HeroHeader>Gosia Hildebrand</HeroHeader>
        <MainParagraph>
          👩‍💻 I'm a Front-End Developer with a web agency, specializing in the
          development of <strong>custom WordPress themes</strong> tailored to
          businesses' unique needs. I'm open to exciting collaborations and
          networking within the vibrant tech community. Feel free to explore my
          portfolio to discover more about my work and interests. <br />
          In my free time, I dive into personal projects, honing my skills in
          React, JavaScript, and the latest frameworks.
        </MainParagraph>
        <ContactButton>
          <img src={message} alt="email icon" />
          <ButtonText href="#contact">Contact Me</ButtonText>
        </ContactButton>
      </DescriptionBox>
      <DarkThemeToggle />
    </HeroContainer>
  );
};
