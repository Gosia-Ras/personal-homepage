import styled from "styled-components";
import { backgroundColor, textColor } from "../../theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
  padding: 10px;
`;
