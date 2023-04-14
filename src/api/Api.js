import axios from "axios";


export const getMovieList = async () => {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8625d30a47546513e5ec6c4b16b9d46a`)
    return
}

export const searchMovie = async (q) => {
    const search = await axios.get(q)
    return
}