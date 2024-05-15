import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchMovie.css";

function SearchMovie({ searchMovie, searchTerm, setSearchTerm, searchResult }) {
  return (
    <div>
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
          <p>Nenhum filme encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default SearchMovie;
