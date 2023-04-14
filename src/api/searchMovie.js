import axios from "axios";

const TMDB_API_KEY = "8625d30a47546513e5ec6c4b16b9d46a";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query) => {
  const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
    params: {
      api_key: TMDB_API_KEY,
      query: query,
    },
  });
  return response.data;
};