import { SkillsList, SkillsContainer, SkillsBox, ListItem, SkillsHeader } from "./styled";
import { VscTools } from "react-icons/vsc";

export const Skills = () => {
  return (
    <SkillsBox>
      <SkillsHeader>My skillset includes <VscTools /></SkillsHeader>
      <SkillsContainer>
        <SkillsList>
          <ListItem>html</ListItem>
          <ListItem>css</ListItem>
          <ListItem>react</ListItem>
          <ListItem>javascript</ListItem>
          <ListItem>Error handling</ListItem>
          <ListItem>Redux-Saga</ListItem>
        </SkillsList>
        <SkillsList>
          <ListItem>react hooks</ListItem>
          <ListItem>styled-components</ListItem>
          <ListItem>redux</ListItem>
          <ListItem>react router</ListItem>
          <ListItem>Error handling</ListItem>
          <ListItem>Redux-Saga</ListItem>
        </SkillsList>
        <SkillsList>
          <ListItem>Teamwork</ListItem>
          <ListItem>RWD</ListItem>
          <ListItem>CSS Grid</ListItem>
          <ListItem>CSS Flexbox</ListItem>
          <ListItem>Redux-Saga</ListItem>
          <ListItem>Error handling</ListItem>
        </SkillsList>
      </SkillsContainer>
    </SkillsBox>
  );
};
