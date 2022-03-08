import styled from "styled-components";

export const ToggleBox = styled.div`
  position: relative;
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

export const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
`;

export const ToggleInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${ToggleLabel} {
    background: ${({ theme }) => theme.colors.mainBlueLight};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
