import React from "react";
import { Link } from "react-router-dom";
import "./FrontPage.css"; // Import the CSS file

function FrontPage() {
  return (
    <div className="container">
      {" "}
      {/* Apply container class */}
      <h1>Welcome to Wish List</h1>
      <Link to="/search">
        <button>Go to Search</button>
      </Link>
    </div>
  );
}

export default FrontPage;
