import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import SearchPage from "./Pages/SearchPage";
import MovieDetail from "./Pages/MovieDetail";
import Wishlist from "./Pages/WishList";
import HeaderFooter from "./components/HeaderFooter";
import Navbar from "./components/Navbar";
import FrontPage from "./Pages/FrontPage";
import UpdateMovie from "./Pages/UpdateMovie";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

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

  const addToWishlist = (movie) => {
    const updatedWishList = [...wishlist, movie];
    setWishlist(updatedWishList);
    navigate("/wishlist");
  };

  const deleteItem = (itemId) => {
    const updatedWishlist = wishlist.filter((movie) => movie.id !== itemId);
    setWishlist(updatedWishlist);
  };

  const updateWishlist = (updatedMovie) => {
    const updatedWishlist = wishlist.map((movie) =>
      movie.id === updatedMovie.id ? updatedMovie : movie
    );
    setWishlist(updatedWishlist);
  };

  return (
    <div>
      <HeaderFooter />
      <Navbar />
      <Routes>
        <Route
          path="/wishlist"
          element={<Wishlist wishlist={wishlist} deleteItem={deleteItem} />}
        />
        <Route path="/" element={<FrontPage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/search"
          element={
            <SearchPage
              searchMovie={searchMovie}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              searchResult={searchResult}
            />
          }
        />
        <Route
          path="/details/:movieId"
          element={
            <MovieDetail
              searchResult={searchResult}
              addToWishlist={addToWishlist}
            />
          }
        />
        <Route
          path="/update/:movieId"
          element={
            <UpdateMovie wishlist={wishlist} updateWishlist={updateWishlist} />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
