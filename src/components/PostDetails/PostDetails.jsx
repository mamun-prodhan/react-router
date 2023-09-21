import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const postdata = useLoaderData();
  const { id, title, body } = postdata;
  return (
    <div>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;
