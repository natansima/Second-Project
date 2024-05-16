import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchMovie.css";

function SearchMovie({ searchMovie, searchTerm, setSearchTerm, searchResult }) {
  const [noMoviesFound, setNoMoviesFound] = useState(false);

  const handleSearch = () => {
    searchMovie();
    if (searchResult.length === 0) {
      setNoMoviesFound(true);
    } else {
      setNoMoviesFound(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <h1 className="descriptionSerch">
        Enter the film you would like to watch here.
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          marginTop: "90px",
        }}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search Movie..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div
        className="container1"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {searchResult && searchResult.length > 0
          ? searchResult.map((movie) => (
              <Link
                to={`/details/${movie.id}`}
                key={movie.id}
                style={{
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
              >
                <div>
                  <img
                    className="posters"
                    style={{
                      width: "300px",
                      height: "250px",
                      borderRadius: "10px",
                      left: "10px",
                    }}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <p className="titleSearch" style={{ textAlign: "center" }}>
                    {movie.title}
                  </p>
                </div>
              </Link>
            ))
          : noMoviesFound && (
              <div
                style={{
                  position: "relative",
                  marginTop: "0px",
                  textAlign: "center",
                }}
              >
                No movies found.
              </div>
            )}
      </div>
    </div>
  );
}

export default SearchMovie;
