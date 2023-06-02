import axios from "axios";
import { setPosts, setPostDetails, setCredits } from "../reducers/postReducers";
import { toast } from "react-toastify";


export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_TMDB_URL}/3/discover/movie`,
      {
        params: {
          api_key: import.meta.env.VITE_TMDB_KEY,
        },
      }
    );
    dispatch(setPosts(response.data.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};


export const getPostDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_TMDB_URL}/3/movie/${id}`,
      {
        params: {
          api_key: import.meta.env.VITE_TMDB_KEY,
        },
      }
    );
    dispatch(setPostDetails(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};


export const getCredits = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_TMDB_URL}/3/movie/${id}/credits`,
      {
        params: {
          api_key: import.meta.env.VITE_TMDB_KEY,
        },
      }
    );
    dispatch(setCredits(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
    } else {
      toast.error(error.message);
    }
  }
};
