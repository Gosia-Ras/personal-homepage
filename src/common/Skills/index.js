import {
  SkillsList,
  SkillsContainer,
  SkillsBox,
  ListItem,
  SkillsHeader,
} from "./styled";
import { VscTools, VscRocket } from "react-icons/vsc";

export const Skills = () => {
  return (
    <>
      <SkillsBox>
        <SkillsHeader>
          My skillset includes <VscTools />
        </SkillsHeader>
        <SkillsContainer>
          <SkillsList>
            <ListItem>HTML5</ListItem>
            <ListItem>CSS3</ListItem>
            <ListItem>CSS Grid</ListItem>
            <ListItem>CSS Flexbox</ListItem>
            <ListItem>styled-components</ListItem>
          </SkillsList>
          <SkillsList>
            <ListItem>React</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>Error handling</ListItem>
            <ListItem>React Hooks</ListItem>
            <ListItem>Redux</ListItem>
          </SkillsList>
          <SkillsList>
            <ListItem>React Router</ListItem>
            <ListItem>Redux-Saga</ListItem>
            <ListItem>Teamwork</ListItem>
            <ListItem>RWD</ListItem>
          </SkillsList>
        </SkillsContainer>
      </SkillsBox>
      <SkillsBox>
        <SkillsHeader>
          What I want to learn next <VscRocket />
        </SkillsHeader>
        <SkillsContainer>
          <SkillsList>
            <ListItem>Node.js</ListItem>
            <ListItem>MongoDB</ListItem>
            <ListItem>TypeScript</ListItem>
          </SkillsList>
          <SkillsList>
            {" "}
            <ListItem>Bootstrap</ListItem>
            <ListItem>Tailwind CSS</ListItem>
            <ListItem>Material UI</ListItem>
          </SkillsList>
          <SkillsList>
            {" "}
            <ListItem>GatsbyJS</ListItem>
            <ListItem>Vue.js</ListItem>
            <ListItem>jQuery</ListItem>
          </SkillsList>
        </SkillsContainer>
      </SkillsBox>
    </>
  );
};
