import React, { useState } from "react";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [page, setPage] = useState("/");

  function newPage() {
    setPage("/");
  }
  return (
    <>
      <div className="navbar">
        <div className="navbar_logo">
          <h1>Food Ranger</h1>
        </div>
        <div className="navbar_button">
          <NavLink className="nav_button" to="/">
            Home
          </NavLink>
          <NavLink className="nav_button" to="/foodphotography">
            Food Photography
          </NavLink>
          <NavLink className="nav_button" to="/blog">
            Blog
          </NavLink>
          <NavLink className="nav_button" to="/auth/login">
            Sign In
          </NavLink>
          {/* <button className="button" onClick={newPage}>
            HOME
          </button>
          <button>FOOD PHOTOGRAPHY</button>
          <button>BLOG</button>
          <button>SIGN IN</button> */}
        </div>
      </div>
    </>
  );
}
export default Navbar;
