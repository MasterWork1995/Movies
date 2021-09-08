import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "b74c0dc966c6718b20701d7c34776374";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: "en-US",
};

const fetchTrendingMovies = async () => {
  try {
    const config = {
      url: `trending/movie/week`,
    };

    const { data } = await axios(config);
    return data.results;
  } catch (error) {
    new Error("Server does not respond");
  }
};

export { fetchTrendingMovies };
