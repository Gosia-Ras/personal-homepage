import {
  LinkList,
  ListItem,
  PortfolioContainer,
  PortfolioHeader,
  PortfolioHeaderBox,
  PortfolioIcon,
  PortfolioParagraph,
  ProjectCard,
  ProjectDescription,
  ProjectLink,
  ProjectName,
  ProjectsBox,
} from "./styled";
import { useEffect, useState } from "react";

export const Portfolio = () => {
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/Gosia-Ras/repos?type=all`)
      .then((response) => response.json())
      .then((repos) => {
        setRepos(repos);
      });
  }, []);

  if (!repos) {
    return (
      <div>
        <p>Sorry, we couldn't load resources</p>
      </div>
    );
  }

  return (
    <PortfolioContainer>
      <PortfolioHeaderBox>
        <PortfolioIcon />
        <PortfolioHeader>Portfolio</PortfolioHeader>
        <PortfolioParagraph>My recent projects</PortfolioParagraph>
      </PortfolioHeaderBox>
      <ProjectsBox>
        {repos.map(({ id, name, description, homepage, html_url }) => (
          <ProjectCard key={id}>
            <ProjectName>{name}</ProjectName>
            <ProjectDescription>{description}</ProjectDescription>
            <LinkList>
              <ListItem>
                Demo:
                <ProjectLink target="_blank" rel="noreferrer" href={homepage}>
                  See the preview
                </ProjectLink>
              </ListItem>
              <ListItem>
                Code:
                <ProjectLink target="_blank" rel="noreferrer" href={html_url}>
                  Repository
                </ProjectLink>
              </ListItem>
            </LinkList>
          </ProjectCard>
        ))}
      </ProjectsBox>
    </PortfolioContainer>
  );
};
