import styled from "styled-components";
import { Github } from "@styled-icons/bootstrap/Github";
import { Facebook } from "@styled-icons/bootstrap/Facebook";
import { LinkedinWithCircle } from "@styled-icons/entypo-social/LinkedinWithCircle";
import { InstagramWithCircle } from "@styled-icons/entypo-social/InstagramWithCircle";
import { iconSocialColors, textColor } from "../../theme";

export const ContactSection = styled.section`
  max-width: 600px;
  padding-bottom: 110px;
  margin-top: 100px;
  align-self: center;
  margin-left: -200px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-top: 50px;
    margin-left: 0;
  }
`;

export const ContactHeader = styled.h3`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
`;
export const ContactEmail = styled.a`
  color: ${textColor};
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 5%;
  text-decoration: none;
  transition: color 275ms ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 18px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.mainBlue};
  }
`;

export const ContactParagraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 5%;
  line-height: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 14px;
  }
`;

export const IconsBox = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const GitHubIcon = styled(Github)`
  color: ${iconSocialColors};
  width: 40px;
  transition: color 275ms ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 30px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.mainBlue};
  }
`;

export const FacebookIcon = styled(Facebook)`
  color: ${iconSocialColors};
  width: 40px;
  transition: color 275ms ease;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 30px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.mainBlue};
  }
`;

export const LinkedinIcon = styled(LinkedinWithCircle)`
  color: ${iconSocialColors};
  width: 45px;
  transition: color 275ms ease;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 32px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.mainBlue};
  }
`;

export const InstagramIcon = styled(InstagramWithCircle)`
  color: ${iconSocialColors};
  width: 42px;
  transition: color 275ms ease;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 32px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.mainBlue};
  }
`;