import {
  SkillsContainer,
  SkillsBox,
  SkillsHeader,
} from "./styled";
import { VscTools, VscRocket } from "react-icons/vsc";
import { SkillsListed, SkillsToDo } from "../../getSkillsList";

export const Skills = () => {
  return (
    <>
      <SkillsBox>
        <SkillsHeader>
          My skillset includes <VscTools />
        </SkillsHeader>
        <SkillsContainer>
          <SkillsListed />
        </SkillsContainer>
      </SkillsBox>
      <SkillsBox>
        <SkillsHeader>
          What I want to learn next <VscRocket />
        </SkillsHeader>
        <SkillsContainer>
          <SkillsToDo />
        </SkillsContainer>
      </SkillsBox>
    </>
  );
};
