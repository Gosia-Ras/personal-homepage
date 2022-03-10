import styled from "styled-components";
import { Tools } from "@styled-icons/bootstrap/Tools";
import { Rocket } from "@styled-icons/ionicons-outline/Rocket";
import { backgroundSecondary, textSecondaryColor } from "../../../common/theme";

export const SkillsBox = styled.div`
  background-color: ${backgroundSecondary};
  border-radius: 4px;
  max-width: 80vw;
  min-width: 1000px;
  margin: 0 auto;
  padding: 15px;
  margin-top: 63px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  max-height: 400px;
  transition: 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-top: 40px;
    max-height: fit-content;
    max-width: fit-content;
    min-width: 85vw;
  }
`;

export const SkillsContainer = styled.div`
  max-width: 1151px;
  margin: 0 auto;
`;

export const SkillsHeader = styled.h1`
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  margin-left: 24px;
  margin-right: 35px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyDetails};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 18px;
  }
`;

export const SkillsList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    min-height: fit-content;
  }
`;

export const ListItem = styled.li`
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 400;
  color: ${textSecondaryColor};
  line-height: 25px;

  &:before {
    content: "• ";
    color: ${({ theme }) => theme.colors.mainBlue};
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 15px;
  }
`;

export const ToolsIcon = styled(Tools)`
  color: ${({ theme }) => theme.colors.mainBlue};
  width: 30px;
  margin-left: 5px;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 25px;
  }
`;

export const RocketIcon = styled(Rocket)`
  color: ${({ theme }) => theme.colors.mainBlue};
  width: 35px;
  margin-left: 5px;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 25px;
  }
`;
