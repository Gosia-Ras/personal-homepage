import {
  ErrorBox,
  ErrorText,
  GitHubButton,
  GitHubButtonText,
  Triangle,
} from "./styled";

export const Error = () => {
  return (
    <ErrorBox>
      <Triangle />
      <ErrorText top>Ooops! Something went wrong...</ErrorText>
      <ErrorText>
        Sorry, failed to load Github projects. You can check them directly on
        Github.
      </ErrorText>
      <GitHubButton>
        <GitHubButtonText
          href="https://github.com/Gosia-Ras"
          rel="noreferrer noopener"
          target="_blank"
        >
          Go to GitHub
        </GitHubButtonText>
      </GitHubButton>
    </ErrorBox>
  );
};
