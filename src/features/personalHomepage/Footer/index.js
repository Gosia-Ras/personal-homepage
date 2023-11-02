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
    <ContactSection id="contact">
      <ContactHeader>Let's talk!</ContactHeader>
      <Address>
        <ContactEmail href={`mailto:${email}`}>{email}</ContactEmail>
        <ContactParagraph>
          I'm currently employed and <strong>not</strong> looking any Front-End
          position. You can still reach out to me through the social channels ✉️
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
