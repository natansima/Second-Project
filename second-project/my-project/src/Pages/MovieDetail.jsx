import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./MovieDetail.css";

function MovieDetail({ searchResult, addToWishlist }) {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  // TO DO: Find a way to make a request to the api if no found movie
  const fetchMovieDetails = async (id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=7db23c4b790699b68db5d3675a14c072`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    const foundMovie = searchResult.find(
      (result) => result.id === Number(movieId)
    );

    if (!foundMovie) {
      fetchMovieDetails(movieId).then((res) => setMovieDetails(res));
    }

    setMovieDetails(foundMovie);
  }, []);

  return (
    <div className="movieDetails">
      {movieDetails ? (
        <div>
          <div className="divButtons">
            <button className="back">
              <Link to="/" className="button-link">
                Back to Home
              </Link>
            </button>
            <button onClick={() => addToWishlist(movieDetails)}>
              Add to Watch List
            </button>
          </div>

          <h3>{movieDetails.title}</h3>
          <img
            style={{
              width: "300px",
              height: "450px",
            }}
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <div className="text">
            <p className="detailsText">{movieDetails.overview}</p>
          </div>
          <p>{movieDetails.origin_country}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MovieDetail;
