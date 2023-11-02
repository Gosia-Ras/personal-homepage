import useFetchData from "../../useFetchData";
import {
  Links,
  ListItem,
  PortfolioContainer,
  PortfolioHeader,
  PortfolioHeaderBox,
  PortfolioIcon,
  PortfolioParagraph,
  ProjectGrid,
  ProjectCard,
  ProjectDescription,
  ProjectLink,
  ProjectName,
  ProjectsBox,
} from "./styled";
import { Loader } from "./Content/Loader";
import { Error } from "./Content/Error";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Portfolio = () => {
  const { repos, loading, error } = useFetchData();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <PortfolioContainer>
      <PortfolioHeaderBox data-aos="fade-up" data-aos-duration="2000">
        <PortfolioIcon />
        <PortfolioHeader>Portfolio</PortfolioHeader>
        <PortfolioParagraph>My recent projects</PortfolioParagraph>
      </PortfolioHeaderBox>
      <>
        <ProjectsBox data-aos="fade-up" data-aos-duration="2000">
          {error ? (
            <Error />
          ) : loading ? (
            <Loader />
          ) : (
            <ProjectGrid>
              {repos.map(({ id, name, description, homepage, html_url }) => (
                <ProjectCard
                  key={id}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
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
              ))}{" "}
            </ProjectGrid>
          )}
        </ProjectsBox>
      </>
    </PortfolioContainer>
  );
};
