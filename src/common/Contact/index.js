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
} from "./styled";

export const Contact = () => {
  return (
    <ContactSection>
      <ContactHeader>Let's talk!</ContactHeader>
      <ContactEmail href="ras.malgorzata@gmail.com">
        ras.malgorzata@gmail.com
      </ContactEmail>
      <ContactParagraph>
        I'm currently looking for a full-time position as a Front-End Developer. Let me know of any opportunities you might have for me! ✉️
      </ContactParagraph>
      <IconsBox>
        <a
          href="https://github.com/Gosia-Ras"
          rel="noreferrer noopener"
          target="_blank"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.facebook.com/gosia.ras.5"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/malgorzata-ras/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://www.instagram.com/diary_of_gosia/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <InstagramIcon />
        </a>
      </IconsBox>
    </ContactSection>
  );
};
