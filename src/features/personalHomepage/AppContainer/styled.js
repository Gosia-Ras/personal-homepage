import styled from "styled-components";
import { backgroundColor, textColor } from "../../../core/App/theme";

export const Container = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
  padding: 20px;
  transition: background-color 0.5s;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 5px;
  }
`;
