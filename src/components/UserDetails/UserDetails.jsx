import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email, website } = user;
  console.log(user);
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Email: {email}</h2>
      <h3>Website: {website}</h3>
    </div>
  );
};

export default UserDetails;
