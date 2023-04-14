import { useEffect }from "react";
import {  } from "react-icons/ai";
import axios from "axios";
import { getMovie } from "../Api";

export const FlexMovieItem = () => {
  useEffect(() => {
    getMovie();
  }, [])
  return (
    <div></div>
  );
};
