import "./Navbar.css";

import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const links = [
  { path: "/", text: "Home" },
  { path: "/wishlist", text: "Wish List" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (event) => {
      if (navbarOpen && ref.current && !ref.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [navbarOpen]);

  return (
    <>
      <nav ref={ref} className="navbar">
        <button
          type="button"
          className="toggle"
          onClick={() => setNavbarOpen((prev) => !prev)}
        >
          {navbarOpen ? (
            <MdClose style={{ width: "32px", height: "32px" }} />
          ) : (
            <FiMenu style={{ width: "32px", height: "32px" }} />
          )}
        </button>
        <ul className={`menu-nav${navbarOpen ? " show-menu" : ""}`}>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path} onClick={() => setNavbarOpen(false)}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
