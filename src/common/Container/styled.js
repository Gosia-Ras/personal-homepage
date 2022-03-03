import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1408px;
  padding: 0px 250px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 15px;
  }
`;
