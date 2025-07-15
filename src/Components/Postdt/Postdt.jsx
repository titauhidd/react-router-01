import React from "react";
import { useLoaderData } from "react-router";

const Postdt = () => {
  const post = useLoaderData();
  console.log(post);
  return (
    <div>
      <p>Post Details</p>
      <p>Title: {post.title}</p>
      <p className="text-3xl">{post.body}</p>
    </div>
  );
};

export default Postdt;
