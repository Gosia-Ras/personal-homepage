import useFetchData from "../../useFetchData";
import {
  Links,
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
import { Loader } from "./Content/Loader";
import { Error } from "./Content/Error";

export const Portfolio = () => {
  const { repos, loading, error } = useFetchData();

  return (
    <PortfolioContainer>
      <PortfolioHeaderBox>
        <PortfolioIcon />
        <PortfolioHeader>Portfolio</PortfolioHeader>
        <PortfolioParagraph>My recent projects</PortfolioParagraph>
      </PortfolioHeaderBox>
      <>
        <ProjectsBox>
          {error ? (
            <Error />
          ) : loading ? (
            <Loader />
          ) : (
            repos.map(({ id, name, description, homepage, html_url }) => (
              <ProjectCard key={id}>
                <ProjectName>{name}</ProjectName>
                <ProjectDescription>{description}</ProjectDescription>
                <Links>
                  <ListItem>
                    <dt>Demo:</dt>
                    <dd>
                      <ProjectLink
                        target="_blank"
                        rel="noreferrer"
                        href={homepage}
                      >
                        See the preview
                      </ProjectLink>
                    </dd>
                  </ListItem>
                  <ListItem>
                    <dt>Code:</dt>
                    <dd>
                      <ProjectLink
                        target="_blank"
                        rel="noreferrer"
                        href={html_url}
                      >
                        Repository
                      </ProjectLink>
                    </dd>
                  </ListItem>
                </Links>
              </ProjectCard>
            ))
          )}
        </ProjectsBox>
      </>
    </PortfolioContainer>
  );
};
