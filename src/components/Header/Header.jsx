import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    display: "flex",
    justifyItems: "space-between",
    fontSize: "35px",
    fontWeight: "bold",
  };
  return (
    <div>
      <h2>Navbar</h2>
      <nav style={headerStyle}>
        <Link style={{ marginRight: "40px" }} to="/">
          Home
        </Link>
        <Link style={{ marginRight: "40px" }} to="/users">
          Users
        </Link>
        <Link style={{ marginRight: "40px" }} to="/posts">
          Posts
        </Link>
        <Link style={{ marginRight: "40px" }} to="/about">
          About
        </Link>
        <Link style={{ marginRight: "40px" }} to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Header;
