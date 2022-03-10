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
import { Loader } from "../Loader";
import useFetchData from "../../useFetchData";
import { Error } from "../Error";

export const Portfolio = () => {
  const { repos, loading, error } = useFetchData();

  return (
    <PortfolioContainer>
      <PortfolioHeaderBox>
        <PortfolioIcon />
        <PortfolioHeader>Portfolio</PortfolioHeader>
        <PortfolioParagraph>My recent projects</PortfolioParagraph>
      </PortfolioHeaderBox>
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
              <LinkList>
                <ListItem>
                  <span>Demo:</span>
                  <ProjectLink target="_blank" rel="noreferrer" href={homepage}>
                    See the preview
                  </ProjectLink>
                </ListItem>
                <ListItem>
                  <span>Code:</span>
                  <ProjectLink target="_blank" rel="noreferrer" href={html_url}>
                    Repository
                  </ProjectLink>
                </ListItem>
              </LinkList>
            </ProjectCard>
          ))
        )}
      </ProjectsBox>
    </PortfolioContainer>
  );
};
