import styled from "styled-components";
import { backgroundColor, textColor } from "../../../core/App/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
  transition: background-color 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 5px;
  }
`;
