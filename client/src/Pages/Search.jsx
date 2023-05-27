import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const TMDB_API_KEY = "8625d30a47546513e5ec6c4b16b9d46a";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const Search = () => {
  const [getMovies, setGetMovies] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  

  const handleSearch = async (e) => {
    e.preventDefault();
    if (getMovies.trim() === "") {
      return;
    }
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
        params: {
          api_key: TMDB_API_KEY,
          query: getMovies,
        },
      });
      setResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickDetail = (id) => {
    navigate(`/${id}`);
  };

  

  return (
    <div className=" min-h-screen text-white mx-7">
      <div className="max-w-screen-lg mx-auto py-10">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={getMovies}
            onChange={(e) => setGetMovies(e.target.value)}
            placeholder="Search for a movie"
            className="bg-gray-800 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </form>
        <div className="mt-10 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {results.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="hover:opacity-75 transition ease-in-out duration-150"
                onClick={() => handleClickDetail(movie.id)}
              />
              <div className="mt-2">
                <a href="#" className="text-lg mt-2 hover:text-gray-300">
                  {movie.title}
                </a>
                <div className="mt-1 text-sm text-gray-400">
                  {movie.release_date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
