import styled from "styled-components";
import { textSecondaryColor } from "../../../common/theme";

export const HeroContainer = styled.div`
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
  height: 300px;
  border-radius: 200px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    max-height: 250px;
    padding: 5px;
    max-width: fit-content;
    padding: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 135px;
    height: 135px;
  }
`;

export const HeroIntro = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: ${textSecondaryColor};
`;

export const HeroHeader = styled.h1`
  font-size: 38px;
  letter-spacing: 5%;
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
  line-height: 28px;
  font-weight: 400;
  color: ${textSecondaryColor};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 17px;
  }
`;

export const ContactButton = styled.button`
  display: flex;
  gap: 18px;
  text-decoration: none;
  border: none;
  padding: 12px 16px;
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
  line-height: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textWhite};
`;
