import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const navigate = useNavigate();

  const { isLoggedIn, token, user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!token && !isLoggedIn) {
      navigate("/");
      return;
    }
  }, [isLoggedIn, token, navigate]);

  return children;
};

export default Protected;
