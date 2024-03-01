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
import React from "react";

export const Header = () => {
  return (
    <HeroContainer data-aos="fade">
      <Hero src={photo} alt="Gosia Hildebrand" />
      <DescriptionBox>
        <HeroIntro>This is</HeroIntro>
        <HeroHeader>Gosia Hildebrand</HeroHeader>
        <MainParagraph>
          As a Front-End Developer specializing in WordPress at a web agency, I
          bring over 2 years of experience in crafting responsive, user-friendly
          websites. My expertise extends beyond WordPress to include JavaScript,
          React, and CSS libraries like Bootstrap and Tailwind CSS. I'm
          passionate about continuous learning and applying web technologies to
          develop custom themes tailored to business needs. <br />
          Explore my portfolio to learn more about my work and interests, and
          see my projects on GitHub that demonstrate my commitment to
          innovation, quality, and efficiency.
        </MainParagraph>
        <ContactButton>
          <img src={message} alt="email icon" />
          <ButtonText
            href="https://www.linkedin.com/in/gosia-hildebrand/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Contact Me
          </ButtonText>
        </ContactButton>
      </DescriptionBox>
      <DarkThemeToggle />
    </HeroContainer>
  );
};
