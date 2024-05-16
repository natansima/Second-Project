import React from "react";
import { Link } from "react-router-dom";
import "./FrontPage.css"; // Importe o arquivo CSS

function FrontPage() {
  return (
    <div className="background-image">
      <div className="container">
        <p id="subtitle">Welcome</p>
        <h1 id="title">Movie Watch List</h1>
        <p id="description">
          "Welcome to your Movie Wish List! Explore a world of films and create
          your own cinematic wish list. Discover new releases, reminisce about
          classics, or share your favorite recommendations with friends.
          Organize, track, and plan your movie sessions with ease, all in one
          place. Let your passion for cinema flow as we turn your choices into
          reality. Start your cinematic journey today!"
        </p>
        <Link to="/search">
          <button id="button">Go to Search</button>
        </Link>
      </div>
    </div>
  );
}

export default FrontPage;
