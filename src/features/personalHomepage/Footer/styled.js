import styled from "styled-components";
import { Github } from "@styled-icons/bootstrap/Github";
import { Facebook } from "@styled-icons/bootstrap/Facebook";
import { LinkedinWithCircle } from "@styled-icons/entypo-social/LinkedinWithCircle";
import { InstagramWithCircle } from "@styled-icons/entypo-social/InstagramWithCircle";
import { iconSocialColors, textColor } from "../../../core/App/theme";

export const ContactSection = styled.footer`
  width: max-content;
  align-self: flex-start;
  margin: 0 auto;
  padding: 50px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-top: 50px;
    margin-left: 0;
    padding: 0px 0px 50px 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 10px;
    margin-top: 20px;
    width: 100%;
  }
`;

export const ContactHeader = styled.h2`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 700;
  font-size: 12px;
  line-height: 0.5;
  text-transform: uppercase;
  letter-spacing: normal;
`;

export const Address = styled.address`
  font-style: unset;
  margin-bottom: 5px;
`;

export const ContactEmail = styled.a`
  color: ${textColor};
  font-weight: 900;
  font-size: 32px;
  line-height: 1.5;
  text-decoration: none;
  transition: color 0.3s linear;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 16px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.mainBlue};
  }
`;

export const ContactParagraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: initial;
  max-width: 600px;
  margin-left: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
  }
`;

export const IconsBox = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const GitHubIcon = styled(Github)`
  color: ${iconSocialColors};
  width: 40px;
  transition: color 0.3s linear;

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
