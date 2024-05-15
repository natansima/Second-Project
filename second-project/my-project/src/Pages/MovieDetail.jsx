import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetail() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Carrega a lista de desejos do localStorage ao carregar a página
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (storedWishlist) {
      setWishlist(storedWishlist);
    }

    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=7db23c4b790699b68db5d3675a14c072`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const addToWishlist = () => {
    const updatedWishlist = [...wishlist, movieDetails];
    setWishlist(updatedWishlist);
    // Atualiza a lista de desejos no localStorage
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div>
      <h2>Movie Detail</h2>
      {movieDetails ? (
        <div>
          <Link to="/">Back to Home</Link>
          <button onClick={addToWishlist}>Add Wish List</button>
          <h3>{movieDetails.title}</h3>
          <img
            style={{
              width: "300px",
              height: "450px",
            }}
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <p>{movieDetails.overview}</p>
          <p>{movieDetails.origin_country}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MovieDetail;
