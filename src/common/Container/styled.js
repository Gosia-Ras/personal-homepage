import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1408px;
  padding: 0px 250px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0px 16px;
  }
`;
