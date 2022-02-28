import { fetchUserData } from "../../getUserData";

export const Portfolio = () => {

  return (
    <div>
      <h2>Portfolio</h2>
      <p>{fetchUserData()}</p>
    </div>
  );
};
