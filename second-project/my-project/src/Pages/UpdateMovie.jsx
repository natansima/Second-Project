import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function UpdateMovie({ wishlist, updateWishlist }) {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedOverview, setEditedOverview] = useState("");

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
    // Assuming you have a proper routing setup, you might want to redirect here
  };

  return (
    <div>
      <h2>Update Movie</h2>
      {movieDetails ? (
        <div>
          <Link to="/wishlist">Back to Wishlist</Link>
          <div>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </div>
          <div>
            <textarea
              value={editedOverview}
              onChange={(e) => setEditedOverview(e.target.value)}
            />
          </div>
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UpdateMovie;
