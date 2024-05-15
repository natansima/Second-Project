import React from "react";
import { Link } from "react-router-dom";
import "./WishList.css";

function Wishlist({ wishlist, deleteItem }) {
  const handleDelete = (itemId) => {
    deleteItem(itemId);
  };

  return (
    <div>
      <h2 className="title">My Wish List...</h2>
      <div className="DENTRO">
        <div className="wrapper">
          <div className="form-wrapper"></div>
          <ul>
            {wishlist.map((movie) => (
              <li id="card" key={movie.id}>
                <Link to={`/update/${movie.id}`} className="card-link">
                  <div className="movie-info">
                    <p>{movie.title}</p>
                    <p>{movie.overview}</p>
                  </div>
                  <div className="movie-poster-container">
                    <img
                      className="movie-poster"
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </div>
                </Link>
                <button
                  className="button-del"
                  onClick={() => handleDelete(movie.id)}
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
