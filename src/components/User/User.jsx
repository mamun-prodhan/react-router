import React from "react";

const User = ({ user }) => {
  const { name, email, website } = user;
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
    </div>
  );
};

export default User;
