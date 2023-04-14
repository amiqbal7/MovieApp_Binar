import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import axios from "axios";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";


export const TopMovie = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(7);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated`, {
        params: {
          api_key: "8625d30a47546513e5ec6c4b16b9d46a",
        },
      })
      .then((response) => {
        setTopMovies(response.data.results);
      });

    // set initial slidesPerView
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1280) {
        setSlidesPerView(4);
      } else if (windowWidth >= 700) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickDetail = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className="Top-rate_Movie">
      <Swiper
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={slidesPerView}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {topMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="w-full">
              <div className="mt-3 hover:scale-95 transition relative  overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="movie"
                  className="w-full h-full object-cover"
                  onClick={() => handleClickDetail(movie.id)}
                />
                <div className="absolute flex linear-o pt-64 justify-between gap-2 bottom-0 right-0 left-0 bg-opacity-60 p-2 ">
                  <h2 className="text-white   truncate capitalize font-sans  text-xl font-bold">
                    {movie.name}
                  </h2>
                  <button className="bg-white bg-opacity-30 px-3 rounded-sm">
                    <p className="text-white text-xl">
                      <AiFillHeart />
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
