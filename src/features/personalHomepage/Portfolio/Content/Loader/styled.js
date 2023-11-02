import styled, { keyframes } from "styled-components";
import { ReactComponent as loading } from "./icon-spinner.svg";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loading = styled(loading)`
  animation: ${rotate} 1s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    max-width: 20vw;
  }
`;
