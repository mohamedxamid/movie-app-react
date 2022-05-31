import React from "react";
import Movie from "./Movie";

const Movies = ({ movies = [] }) => {
  return (
    <>
      {movies.length ? (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 my-10">
          {movies.map((movie) => (
            <Movie key={movie.imdbID} {...movie} />
          ))}
        </div>
      ) : (
        <h1 className="w-full mt-32 flex justify-center items-center text-4xl text-sky-600">
          Search Movies
        </h1>
      )}
    </>
  );
};

export default Movies;
