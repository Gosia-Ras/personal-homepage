import { SkillsBox, SkillsHeader, ListItem, SkillsList } from "./styled";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const Skills = ({ title, skills }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <SkillsBox data-aos="fade-up" data-aos-offset="500">
      <SkillsHeader>{title}</SkillsHeader>
      <SkillsList>
        {skills.map((skill) => (
          <ListItem key={skill}>{skill}</ListItem>
        ))}
      </SkillsList>
    </SkillsBox>
  );
};
