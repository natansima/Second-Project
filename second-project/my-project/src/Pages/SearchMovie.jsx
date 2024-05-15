import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchMovie() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const searchMovie = async () => {
    try {
      if (searchTerm.trim() !== "") {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=7db23c4b790699b68db5d3675a14c072&query=${searchTerm}`
        );
        const data = await response.json();
        setSearchResult(data.results);
      }
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };
  console.log(searchResult);
  return (
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Movie..."
        />
        <button onClick={searchMovie}>Search</button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {searchResult && searchResult.length > 0 ? (
          searchResult.map((movie) => (
            <Link
              to={`/details/${movie.id}`}
              key={movie.id}
              style={{ marginRight: "10px", marginBottom: "10px" }}
            >
              <div>
                <img
                  style={{
                    width: "300px",
                    height: "250px",
                  }}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <p style={{ textAlign: "center" }}>{movie.title}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchMovie;
