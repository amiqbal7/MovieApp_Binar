import axios from "axios";
import { setPosts, setPostDetails, setCredits } from "../reducers/postReducers";
import { toast } from "react-toastify";

// Function to get all the posts
export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: {
          api_key: "8625d30a47546513e5ec6c4b16b9d46a",
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

// Function to get the details of a post
export const getPostDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          api_key: "8625d30a47546513e5ec6c4b16b9d46a",
        },
      }
    )
    dispatch(setPostDetails(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};


export const getCredits = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      {
        params: {
          api_key: "8625d30a47546513e5ec6c4b16b9d46a",
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


