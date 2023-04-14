import axios from "axios";

export const getMovie = async () => {
    const movies = await axios.get("https://api.themoviedb.org/3/movie/", {
        params: {
          api_key: "8625d30a47546513e5ec6c4b16b9d46a",
        },
      })
    console.log({moviesData: movies})

  
    // useEffect(() => {
    //   axios
    //     .get(`https://api.themoviedb.org/3/discover/movie`, {
    //       params: {
    //         api_key: "8625d30a47546513e5ec6c4b16b9d46a",
    //       },
    //     })
    //     .then((response) => {
    //       setMovies(response.data.results);
    //     });
    // }, []);

}