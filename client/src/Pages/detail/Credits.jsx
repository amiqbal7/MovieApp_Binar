import React, { useEffect } from "react";
import { getCredits } from "../../redux/actions/postActions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Credits = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { credits } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getCredits(id));
  }, [dispatch, id]);

  return (
    <div className="Casts">
      <h1 className="font-bold text-2xl md:text-3xl pb-3">Casts</h1>
      <div className="md:flex gap-3">
        {credits &&
          credits.cast &&
          credits.cast.slice(0, 5).map((cast) => (
            <div key={cast.id} className="">
              {cast.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt={cast.name}
                  className="w-72 flex flex-wrap justify-center mx-auto"
                />
              )}
              <p className="text-white font-bold text-center pb-5 ">
                {cast.name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Credits;
