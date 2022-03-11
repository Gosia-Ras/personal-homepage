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

export const LoaderBox = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: 20px;
  }
`;

export const Loading = styled(loading)`
  animation: ${rotate} 1s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    max-width: 20vw;
  }
`;