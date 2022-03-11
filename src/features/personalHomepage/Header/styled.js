import styled from "styled-components";
import { textSecondaryColor } from "../../../core/App/theme";

export const HeroContainer = styled.header`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 100px;
  max-width: 85vw;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
    margin-top: 0px;
    max-width: 80vw;
  }
`;

export const Hero = styled.img`
  max-width: 300px;
  max-height: 300px;
  width: 30vw;
  border-radius: 50%;
  margin-right: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 132.67px;
    height: 132.67px;
  }
`;

export const HeroIntro = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 0.5;
  text-transform: uppercase;
  color: ${textSecondaryColor};
  letter-spacing: initial;
`;

export const HeroHeader = styled.h1`
  font-size: 38px;
  font-weight: 900;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 22px;
  }
`;

export const DescriptionBox = styled.div`
  max-width: 500px;
  margin-left: 30px;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 0 auto;
    padding: 0;
    max-width: max-content;
  }
`;

export const MainParagraph = styled.p`
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  color: ${textSecondaryColor};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 17px;
  }
`;

export const ContactButton = styled.span`
  display: flex;
  gap: 18px;
  text-decoration: none;
  border: none;
  padding: 15px;
  max-width: fit-content;
  border-radius: 4px;
  cursor: pointer;
  background-size: 100% 200%;
  background-image: linear-gradient(to bottom, #0366d6 50%, #2188ff 50%);
  -webkit-transition: background-position 1s;
  -moz-transition: background-position 1s;
  transition: background-position 1s;

  &:hover {
    background-position: 0 -100%;
  }
`;

export const ButtonText = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textWhite};
`;
