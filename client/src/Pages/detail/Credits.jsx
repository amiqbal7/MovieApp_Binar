import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Credits = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const getCredits = () => {
      axios
        .get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
          params: {
            api_key: "8625d30a47546513e5ec6c4b16b9d46a",
          },
        })
        .then((response) => {
          if (response.data && response.data.cast) {
            setCredits(response.data.cast);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getCredits();
  }, [id]);

  return (
    <div className="Casts">
      <h1 className="font-bold text-2xl md:text-3xl pb-3">Casts</h1>
      <div className="md:flex gap-3">
        {credits &&
          credits.slice(0, 5).map((cast) => (
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
