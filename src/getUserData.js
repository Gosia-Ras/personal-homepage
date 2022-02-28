import { Octokit } from "@octokit/core";

export const fetchUserData = async() => {
  const octokit = new Octokit({
    auth: `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`,
  });

  const repos = await octokit.request("GET /users/{user}/repos", {
    user: "Gosia-Ras",
  });

 return (
     <p>{repos}</p>
 )
};
