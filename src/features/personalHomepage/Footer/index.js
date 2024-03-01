import { email } from "../email";
import {
  ContactEmail,
  ContactHeader,
  ContactParagraph,
  ContactSection,
  FacebookIcon,
  GitHubIcon,
  IconsBox,
  InstagramIcon,
  LinkedinIcon,
  Address,
} from "./styled";

export const Footer = () => {
  return (
    <ContactSection
      id="contact"
      data-aos="fade-right"
      data-aos-duration="2000"
      data-aos-offset="6
    00"
    >
      <ContactHeader>Let's talk!</ContactHeader>
      <Address>
        <ContactEmail href={`mailto:${email}`}>{email}</ContactEmail>
        <ContactParagraph>
          I'm looking forward to hearing from you about any projects and
          oppotunities you'd like me to contribute to 😊 <br />
          Please reach out by e-mail or any of the social media channels ✉️
        </ContactParagraph>
        <IconsBox>
          <a
            href="https://github.com/Gosia-Ras"
            rel="noreferrer noopener"
            target="_blank"
            title="GitHub Profile"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.facebook.com/gosia.ras.5"
            rel="noreferrer noopener"
            target="_blank"
            title="Facebook profile"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/gosia-hildebrand/"
            rel="noreferrer noopener"
            target="_blank"
            title="LinkedIn Profile"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://www.instagram.com/diary_of_gosia/"
            rel="noreferrer noopener"
            target="_blank"
            title="Instagram profile"
          >
            <InstagramIcon />
          </a>
        </IconsBox>
      </Address>
    </ContactSection>
  );
};
