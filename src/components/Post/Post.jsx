import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();
  const userStyle = {
    backgroundColor: "green",
    padding: "10px",
    border: "2px solid yellow",
    borderRadius: "15px",
  };

  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div style={userStyle}>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <h3>{body}</h3>
      <button onClick={handleShowDetails}>Show Details</button>
    </div>
  );
};

export default Post;
