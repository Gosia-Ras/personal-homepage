import { useEffect, useState } from "react";
import axios from "axios";

const APIBaseURL = "https://api.github.com/users/";

const APIDetailsURL = "Gosia-Ras/repos?type=all&sort=updated&per_page=10";

const useFetchData = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `${APIBaseURL}${APIDetailsURL}`
        );
        setRepos(response);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return {
    repos,
    loading,
    error,
  };
};

export default useFetchData;
