import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillCalendarEventFill, BsAwardFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./../../redux/actions/postActions";

export const Hero = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="lg:mt-[-68px] mt-[-51px] md:mt-[-68px]">
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {posts?.slice(0, 6).map((movie) => (
          <SwiperSlide
            className="linear-bg relative rounded overflow-hidden"
            key={movie.id}
          >
            <div className="">
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.posters_path
                }`}
                alt="movie"
                className="w-full h-[550px] md:h-full object-cover"
              />
              <div className="">
                <div className="absolute xl:pl-40 sm:pl-32 linear-bg py-48 sm:py-36 md:py-56 lg:py-72 xl:py-[350px] pb-[1200px] pl-12 top-0 right-0 left-0 flex flex-col md:gap-3 lg:gap-4 gap-1 justify-center">
                  <h1 className="text-white lg:text-4xl xl:text-6xl truncate capitalize font-sans sm:text-2xl text-lg font-bold ">
                    {movie.title}
                  </h1>
                  <div className="flex-MovieItem">
                    <div className="flex gap-2 pt-[-16px] py-2 font-bold lg:text-lg">
                      <div className="flex">
                        <p className=" text-white w-6 lg:pt-1">
                          <BsFillCalendarEventFill />
                        </p>
                        <p className="text-white text-xs lg:text-lg">
                          {movie.release_date}
                        </p>
                      </div>
                      <div className="flex">
                        <p className=" text-yellow-500 w-6 text-xl lg:pt-1">
                          <BsAwardFill />
                        </p>
                        <p className="text-white text-xs lg:text-lg">
                          {movie.vote_average}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" md:pt-0 flex gap-3">
                    <button className="bg-subMain hover:text-main transition md:text-xl text-white rounded-sm px-3 md:px-5 xl:py-3 sm:  py-1">
                      Watch
                    </button>
                    <button className="bg-white bg-opacity-30 px-3 rounded-sm md:px-5">
                      <p className="text-white text-xl md:text-3xl">
                        <AiFillHeart />
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
