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
    <ContactSection>
      <ContactHeader>Let's talk!</ContactHeader>
      <Address>
        <ContactEmail href={`mailto:${email}`}>{email}</ContactEmail>
      </Address>
      <ContactParagraph>
        I'm currently looking for a full-time position as a Front-End Developer.
        Let&nbsp;me know of any opportunities you might have for me! ✉️
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
          href="https://www.linkedin.com/in/malgorzata-ras/"
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
    </ContactSection>
  );
};
