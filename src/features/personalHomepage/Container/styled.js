import styled from "styled-components";
import { backgroundColor, textColor } from "../../../core/App/theme";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
  padding: 20px;
  transition: background 0.5s;
  margin: 0 auto;
`;
