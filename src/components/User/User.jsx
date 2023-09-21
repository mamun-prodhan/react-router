import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, website } = user;
  const style = {
    backgroundColor: "green",
    padding: "10px",
    border: "2px solid yellow",
    borderRadius: "15px",
  };
  return (
    <div style={style}>
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <p>Website: {website}</p>
      <Link to={`/user/${id}`}>
        <h3>Show Details</h3>
      </Link>
    </div>
  );
};

export default User;
