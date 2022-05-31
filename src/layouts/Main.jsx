import React, { useState } from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";
import "./styles/main.css";

function Main() {
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSearch(str, type = "all", page = "1") {
    setLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=b19fd6e&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }${page !== "1" ? `&page=${page}` : ""}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setTotal(data.totalResults);
        setLoading(false);
      });
  }

  return (
    <div className="main w-3/4 mx-auto">
      <div className="my-4 lg:my-2">
        <Search search={handleSearch} total={total} />
      </div>
      {loading ? <Loader /> : <Movies movies={movies} />}
    </div>
  );
}

export default Main;
