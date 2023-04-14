import React from "react";
import { Hero } from "../components/Home/Hero";
import { PopularMovie } from "../components/Home/PopularMovie";
import { TopRated } from "../components/Home/TopRated";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularMovie />
      <TopRated />
    </>
  );
};

export default Home;
