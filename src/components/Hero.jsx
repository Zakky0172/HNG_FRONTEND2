import React, { useState, useEffect } from "react";
import IMDB from "../assets/imdb.svg";
import IMDBRating from "./IMDBRating";
import MovieGenre from "./MovieGenre";

const Hero = ({ heroMovies, genres }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const movies = heroMovies.slice(0, 6);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 10000);

    return () => clearTimeout(timer);
  }, [currentMovieIndex, movies]);

  const handleIndicatorClick = (index) => {
    setCurrentMovieIndex(index);
  };

  // console.log(movies);

  return (
    <header className="h-[600px] relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 ease-in-out">
        {movies.length > 0 && (
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-[600px] bg-black bg-opacity-70"></div>
            <div className="absolute border-white h-full flex items-end sm:items-center p-7 lg:ml-[90px]">
              <div className="text-white min-w-[220px] w-[90%] sm:w-[300px] md:w-[400px] flex flex-col gap-4">
                <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold md:leading-[56px]">
                  {movies[currentMovieIndex]?.title}
                </h1>
                <IMDBRating>
                  {movies[currentMovieIndex]?.vote_average}
                </IMDBRating>

                <p className="text-white text-xs md:text-sm font-medium leading-[18px]">
                  {movies[currentMovieIndex]?.overview}
                </p>
              </div>
            </div>
            <img
              data-testid="movie-poster"
              src={`https://image.tmdb.org/t/p/original${movies[currentMovieIndex].backdrop_path}`}
              className="h-[600px] w-full object-cover object-center"
              alt={movies[currentMovieIndex].title}
            />
          </div>
        )}
        <div className="absolute top-0 right-10 hidden sm:flex h-full ">
          <div className="flex flex-col gap-2 justify-center items-end w-10">
            {movies.slice(0, 6).map((_, index) => (
              <div
                className="cursor-pointer text-white flex items-center gap-2 justify-start"
                key={index}
                onClick={() => handleIndicatorClick(index)}
              >
                <div
                  className={` bg-white rounded-md ${
                    index === currentMovieIndex ? "w-5 h-[3px] border" : ""
                  }`}
                />
                <p
                  className={`items-center ${
                    index === currentMovieIndex
                      ? "text-base font-bold leading-[14px]"
                      : "text-gray-400 text-xs font-bold leading-[14px]"
                  }`}
                >
                  {index + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
