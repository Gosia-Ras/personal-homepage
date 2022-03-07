import styled from "styled-components";
import { Github } from "@styled-icons/bootstrap/Github";

export const PortfolioContainer = styled.div`
margin: 0 auto;
width: fit-content`;

export const PortfolioHeaderBox = styled.div`
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
  line-height: 37px;
  letter-spacing: 5%;
  text-align: center;
  margin: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 25px;
  }
`;
export const PortfolioParagraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 5%;
  margin: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 18px;
  }
`;

export const ProjectsBox = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  border: 6px solid ${({ theme }) => theme.colors.greyDetails};
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  max-width: 450px;
  word-break: keep-all;

  &:hover {
    border: 6px solid rgba(3, 102, 214, 0.2);
  } //find other solution for color
`;

export const ProjectName = styled.h3`
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 5%;
  color: ${({ theme }) => theme.colors.mainBlue};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 20px;
  }
`;
export const ProjectDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 5%;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 16px;
  }
`;

export const LinkList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const ListItem = styled.li`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 5%;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 15px;
  }
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  border-bottom: 0.5px solid ${({ theme }) => theme.mainBlueLight};
  color: ${({ theme }) => theme.colors.mainBlue};
  text-align: center;
`;
