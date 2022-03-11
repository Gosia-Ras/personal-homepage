import styled, { keyframes } from "styled-components";
import { ReactComponent as loading } from "../../../../../assets/icon-spinner.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled(loading)`
  animation: ${rotate} 1s linear infinite;
  position: relative; //due to grid layout of ProjectBox
  left: 85%;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    max-width: 20vw;
    left: 37%;
  }
`;
