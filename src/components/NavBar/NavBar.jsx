import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <li>Home</li>
        <li>Service</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default NavBar;
