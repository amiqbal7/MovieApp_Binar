import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import bg from '../../assets/Footer-bg.jpg'
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetails } from "../../redux/actions/postActions";
import Credits from "./Credits";


const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
 

  const { postDetails } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostDetails(id));
  }, [dispatch, id]);

  const bgImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="mb-16 md:pb36">
      <div className="h-96 mt-[-67px]" style={bgImageStyle}></div>
      <div className="mx-auto text-white">
        <div className="lg:flex justify-center md:mx-7 mx-auto">
          {postDetails?.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${postDetails?.poster_path}`}
              alt="detail"
              className=" w-72 h-full lg:w-[300px] xl:w-[1200px] mt-[-250px] flex justify-center lg:mx-7 mx-auto"
            />
          )}
          <div className="text-white md:mx-16 mx-5 lg:mt-[-150px]">
            <h1 className="text-white text-3xl md:text-7xl font-bold py-5">
              {postDetails?.title}
            </h1>
            <div className="flex gap-2 pb-4">
              <p className=" text-yellow-500 w-6 text-2xl">
                <AiOutlineStar />
              </p>
              <p className="text-white text-lg lg:text-lg font-bold mt-[-3px]">
                {postDetails?.vote_average}
              </p>
            </div>
            <div className="genres text-white flex flex-wrap gap-3 pb-3 ">
              {postDetails?.genres &&
                postDetails?.genres.slice(0, 5).map((genre, i) => (
                  <span
                    key={i}
                    className="genres__item  border-2 px-2 py-1 text-md font-semibold rounded-sm "
                  >
                    {genre.name}
                  </span>
                ))}
            </div>
            <p className="pb-5">{postDetails?.overview}</p>
            <Credits />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
