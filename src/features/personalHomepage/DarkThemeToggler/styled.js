import styled from "styled-components";

export const ToggleText = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 9px;
  margin-right: 5px;
  margin-top: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    display: none;
  }
`;

export const ToggleBox = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    align-self: flex-end;
    position: absolute;
    top: 3%;
    right: 3%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    top: 3%;
    right: 10%;
  }
`;
