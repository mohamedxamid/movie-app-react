import React from "react";

const Movie = ({ Poster, Title, Type, Year, imdbID }) => {
  const PosterClass =
    Poster !== "N/A"
      ? "w-full rounded max-h-96"
      : "w-full rounded min-h-[24rem]";
  return (
    <div className="relative shadow-xl rounded dark:bg-slate-800">
      <div className="min-h-[24rem]">
        <img src={Poster} alt={Title} className={PosterClass} />
      </div>
      <div className="p-6 pb-12">
        <h4 className="text-3xl font-normal text-neutral-600 dark:text-slate-300 mb-2">
          {Title}
        </h4>
      </div>
      <span className="absolute left-6 bottom-6 block text-red-500">
        {Year}
      </span>
      <span className="absolute right-6 bottom-6 block text-green-500">
        {Type}
      </span>
    </div>
  );
};

export default Movie;
