import { SkillsList, ListItem } from "../features/personalHomepage/Skills/styled";
import { goals, items } from "./skillsList";

export const SkillsListed = () => {
  return (
    <SkillsList>
      {items.map((item) => (
        <ListItem key={item.id}>{item.name}</ListItem>
      ))}
    </SkillsList>
  );
};

export const SkillsToDo = () => {
  return (
    <SkillsList>
      {goals.map((goal) => (
        <ListItem key={goal.id}>{goal.name}</ListItem>
      ))}
    </SkillsList>
  );
};
