import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const userStyle = {
    backgroundColor: "green",
    padding: "10px",
    border: "2px solid yellow",
    borderRadius: "15px",
  };
  return (
    <div style={userStyle}>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <h3>{body}</h3>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default Post;
