import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./UpdateMovie.css";

function UpdateMovie({ wishlist, updateWishlist }) {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedOverview, setEditedOverview] = useState("");
  const [updateConcluded, setUpdateConcluded] = useState(false); // Estado para controlar se a atualização foi concluída

  useEffect(() => {
    const foundMovie = wishlist.find((movie) => movie.id === Number(movieId));
    if (foundMovie) {
      setMovieDetails(foundMovie);
      setEditedTitle(foundMovie.title);
      setEditedOverview(foundMovie.overview);
    }
  }, [wishlist, movieId]);

  const handleUpdate = () => {
    const updatedMovie = {
      ...movieDetails,
      title: editedTitle,
      overview: editedOverview,
    };
    updateWishlist(updatedMovie);
    setUpdateConcluded(true);
  };

  return (
    <div className="update">
      <h1>Update Movie</h1>
      {movieDetails ? (
        <div>
          <Link to="/wishlist">
            <button className="back-button" style={{ marginBottom: "20px" }}>
              Back to Watch List
            </button>
          </Link>
          <div>
            <input
              className="titleUp rounded-input"
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "30px" }}>
            <textarea
              className="overUp rounded-input"
              value={editedOverview}
              onChange={(e) => setEditedOverview(e.target.value)}
            ></textarea>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button className="UpdateButton" onClick={handleUpdate}>
              Update
            </button>
            {updateConcluded && <span>Update Concluded...</span>}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UpdateMovie;
