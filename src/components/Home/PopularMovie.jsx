import React from "react";
import { AiFillFolder } from "react-icons/ai";
import { Movie } from "./Movie";

export const PopularMovie = () => {
  return (
    <div className="mx-12">
      <div className="pt-5 flex gap-2">
        <p className="pt-1 text-white md:text-xl">
          <AiFillFolder />
        </p>
        <h1 className="font-bold text-white md:text-xl">Popular Movie</h1>
      </div>
      <div className="">
        <Movie />
      </div>
    </div>
  );
};
