import React, { useState } from "react";

const Search = ({ search, total }) => {
  const [str, setStr] = useState("");
  const [type, setType] = useState("all");
  const [page, setPage] = useState(1);

  const totalNum = Math.ceil(total / 10);

  function handleKey(e) {
    if (e.key === "Enter") {
      setPage(1);
      search(str, type);
    }
  }

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    setPage(1);
    search(str, e.target.dataset.type);
  };

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  return (
    <div className="relative text-sm md:text-lg dark:text-slate-300">
      <input
        type="text"
        className="w-full outline-none border-b-2 border-b-slate-400 py-2 dark:bg-slate-800 dark:px-3 dark:rounded"
        placeholder="Search..."
        value={str}
        onChange={(e) => {
          setStr(e.target.value);
        }}
        onKeyDown={handleKey}
      />
      <button
        className="bg-sky-300 hover:bg-sky-400 dark:text-slate-800 transition duration-300 py-1 px-2 rounded-md absolute top-1 right-0"
        onClick={() => {
          setPage(1);
          search(str, type);
        }}
      >
        SEARCH MOVIES
      </button>
      <div className="flex items-center mt-2">
        <label className="mr-3 lg:mr-5 flex items-center">
          <input
            type="radio"
            name="type"
            id=""
            data-type="all"
            className="mr-1 w-4 h-4"
            checked={type === "all"}
            onChange={(e) => handleFilter(e)}
          />
          <span>All</span>
        </label>
        <label className="mr-3 lg:mr-5 flex items-center">
          <input
            type="radio"
            name="type"
            id=""
            data-type="movie"
            className="mr-1 w-4 h-4"
            checked={type === "movie"}
            onChange={(e) => handleFilter(e)}
          />
          <span>Movies only</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="type"
            id=""
            data-type="series"
            className="mr-1 w-4 h-4"
            checked={type === "series"}
            onChange={(e) => handleFilter(e)}
          />
          <span>Series only</span>
        </label>
      </div>
      {total > 0 ? (
        <div className="flex justify-center items-center mt-5">
          <button
            type="button"
            className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
            onClick={() => {
              if (page === 1) {
                setPage(totalNum);
                search(str, type, totalNum);
              } else {
                setPage(page - 1);
                search(str, type, page - 1);
              }
            }}
          >
            <div className="flex flex-row align-middle">
              <svg
                className="w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="ml-2">Prev</p>
            </div>
          </button>
          <p className="mx-2">
            {getZero(page)} / {getZero(totalNum)} pages
          </p>
          <button
            type="button"
            className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3"
            onClick={() => {
              if (page === totalNum) {
                setPage(1);
                search(str, type);
              } else {
                setPage(page + 1);
                search(str, type, page + 1);
              }
            }}
          >
            <div className="flex flex-row align-middle">
              <span className="mr-2">Next</span>
              <svg
                className="w-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
