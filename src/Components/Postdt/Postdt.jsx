import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const Postdt = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const handleGoback = () => {
    navigate(-1); //piche niye jay
  };
  console.log(post);
  return (
    <div>
      <p>Post Details</p>
      <p>Title: {post.title}</p>
      <p className="text-3xl">{post.body}</p>
      <button
        onClick={handleGoback}
        className="px-6 py-2 border-1 rounded-2xl hover:bg-amber-100"
      >
        Go back
      </button>
    </div>
  );
};

export default Postdt;
