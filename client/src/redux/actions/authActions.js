import axios from "axios";
import {
  setIsLoggedIn,
  setToken,
  setUser,
  logout,
} from "../reducers/authReducers";
import { toast } from "react-toastify";

export const login = (email, password, navigate) => async (dispatch) => {
  try {
    const data = {
      email: email,
      password: password,
    };

    const response = await axios.post("http://localhost:4000/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { token, user } = response.data;

    dispatch(setToken(token));
    dispatch(setIsLoggedIn(true));
    dispatch(setUser(user));

    // Redirect to home, don't forget to useNavigate in the component
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error?.response?.data?.message)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error.message);
  }
};

export const register = (data, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `http://localhost:4000/signup`,
      data,
      { headers: { "Content-Type": "application/json" } }
    );

    const { token } = response?.data?.data;

    // Get the navigate function from useNavigate

    // Redirect to login page
    navigate("/Login");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }

    toast.error(error.message);
  }
};
