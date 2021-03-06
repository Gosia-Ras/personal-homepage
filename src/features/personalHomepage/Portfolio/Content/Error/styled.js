import styled, { css } from "styled-components";
import { ExclamationTriangle } from "@styled-icons/bootstrap/ExclamationTriangle";

export const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  text-align: center;
  margin: 0 auto;
  position: relative; //due to grid layout of ProjectBox
  left: 53%;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    left: 0%;
  }
`;

export const Triangle = styled(ExclamationTriangle)`
  width: 40px;
`;

export const ErrorText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
  text-align: center;

  ${({ top }) =>
    top &&
    css`
      font-weight: 700;
    `};
`;

export const GitHubButton = styled.button`
  background-color: ${({ theme }) => theme.colors.mainBlue};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.mainBlueLight};
  padding: 12px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainBlueLight};
  }
`;

export const GitHubButtonText = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: 20.0584px;
  line-height: 1.4;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textWhite};
`;
