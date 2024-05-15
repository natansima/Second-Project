import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./Pages/HomePage";
import MovieDetail from "./Pages/MovieDetail";
import Wishlist from "./Pages/WishList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:movieId" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
