import {
  SkillsContainer,
  SkillsBox,
  SkillsHeader,
  ToolsIcon,
  RocketIcon,
} from "./styled";
import { SkillsListed, SkillsToDo } from "../../../common/getSkillsList";

export const Skills = () => {
  return (
    <>
      <SkillsBox>
        <SkillsHeader>
          My skillset includes <ToolsIcon />
        </SkillsHeader>
        <SkillsContainer>
          <SkillsListed />
        </SkillsContainer>
      </SkillsBox>
      <SkillsBox>
        <SkillsHeader>
          What I want to learn next <RocketIcon />
        </SkillsHeader>
        <SkillsContainer>
          <SkillsToDo />
        </SkillsContainer>
      </SkillsBox>
    </>
  );
};
