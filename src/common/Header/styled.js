import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 100px;
`;

export const Hero = styled.img`
  height: 350px;
  border-radius: 200px;
`;

export const DescriptionBox = styled.div`
  max-width: 500px;
  margin-left: 30px;
  padding: 40px;
`;

export const ContactButton = styled.button`
display: flex;
gap: 18px;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.mainBlueLight};
  padding: 12px 16px;
  border-radius: 4px;
`;

export const ButtonText = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 20.0584px;
  line-height: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textWhite};
`;
