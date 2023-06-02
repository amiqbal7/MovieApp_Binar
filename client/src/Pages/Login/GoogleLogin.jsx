import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import google from "../../assets/google.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleLogin } from "../../redux/actions/authActions";

const GoogleLogin = ({ buttonText }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const data = {
        access_token: tokenResponse.access_token,
      };
      dispatch(googleLogin(data, navigate));
    },
  });
  return (
    <div className="flex gap-2 border px-5 py-3 rounded-md">
      <img src={google}  className="w-7"/>
      {" "}
      <button className="" onClick={() => login()}>
        {buttonText}
      </button>
    </div>
  );
};

export default GoogleLogin;
