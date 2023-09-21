import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h2>This is Home Component</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
