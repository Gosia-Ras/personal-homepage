import { SkillsBox, SkillsHeader, ListItem, SkillsList } from "./styled";

export const Skills = ({ title, skills }) => {
  return (
    <SkillsBox>
      <SkillsHeader>{title}</SkillsHeader>
      <SkillsList>
        {skills.map((skill) => (
          <ListItem key={skill}>{skill}</ListItem>
        ))}
      </SkillsList>
    </SkillsBox>
  );
};
