import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const navigate = useNavigate();
  const postdata = useLoaderData();
  const { id, title, body } = postdata;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
