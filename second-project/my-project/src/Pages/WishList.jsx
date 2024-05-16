import React from "react";
import { Link } from "react-router-dom";
import "./WishList.css";

function Wishlist({ wishlist, deleteItem }) {
  const handleDelete = (itemId) => {
    deleteItem(itemId);
  };

  return (
    <div>
      <h2 className="title">My Watch List...</h2>
      <div className="DENTRO">
        <div className="wrapper">
          <ul className="form-wrapper">
            {wishlist.map((movie) => (
              <li id="card" key={movie.id}>
                <button
                  className="button-del"
                  onClick={() => handleDelete(movie.id)}
                >
                  🗑️
                </button>

                <Link
                  to={`/update/${movie.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="movie-info">
                    <p>{movie.title}</p>
                  </div>

                  <div className="movie-poster-container">
                    <img
                      className="movie-poster"
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </div>
                  <p className="overviewdet">{movie.overview}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
