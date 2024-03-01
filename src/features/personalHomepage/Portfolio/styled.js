import styled from "styled-components";
import { Github } from "@styled-icons/bootstrap/Github";
import {
  backgroundSecondary,
  projectTitle,
  textSecondaryColor,
} from "../../../core/App/theme";
import α from "color-alpha";

export const PortfolioContainer = styled.section`
  width: fit-content;
  max-width: 60vw;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 85vw;
  }
`;

export const PortfolioHeaderBox = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const PortfolioIcon = styled(Github)`
  color: ${({ theme }) => theme.colors.mainBlue};
  width: 45px;
  margin: 5px;
`;

export const PortfolioHeader = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 2.2;
  text-align: center;
  margin: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 25px;
  }
`;

export const PortfolioParagraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  margin: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 18px;
  }
`;

export const ProjectsBox = styled.div`
  padding: 15px;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: auto;
    margin: 0 30px;
    grid-gap: 15px;
  }
`;

export const ProjectCard = styled.div`
  box-sizing: border-box;
  padding: 10px 40px;
  background-color: ${backgroundSecondary};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: box-shadow 400ms ease;

  &:hover {
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.05),
      0px 16px 58px rgba(9, 10, 51, 0.06);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 25px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 20px;
  }
`;

export const ProjectName = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: ${projectTitle};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 18px;
  }
`;

export const ProjectDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: ${textSecondaryColor};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
  }
`;

export const Links = styled.div`
  padding-left: 0;
`;

export const ListItem = styled.dl`
  font-weight: 400;
  font-size: 18px;
  color: ${textSecondaryColor};
  display: grid;
  grid-template-columns: 0.2fr 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 15px;
  }
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => α(theme.colors.mainBlueLight, 0.3)};
  color: ${({ theme }) => theme.colors.mainBlue};
  transition: color 375ms ease;
  max-width: max-content;

  &:hover {
    color: ${({ theme }) => theme.colors.mainBlueLight};
    border-color: unset;
  }
`;
