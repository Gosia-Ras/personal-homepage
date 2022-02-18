import styled from "styled-components";

export const SkillsBox = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 4px;
  max-width: 1216px;
  margin: 0 auto;
  padding: 10px 40px 10px 20px;
  margin-top: 63px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
`;

export const SkillsContainer = styled.div`
  max-width: 1151px;
  margin: 0 auto;
  display: flex;
  gap: 50px;
  justify-content: space-between;
`;

export const SkillsHeader = styled.h1`
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  margin-left: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SkillsList = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 5%;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 25px;
  &:before {
    content: "• ";
    color: ${({ theme }) => theme.colors.mainBlue};
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;
