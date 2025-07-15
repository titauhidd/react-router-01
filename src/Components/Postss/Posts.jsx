import React from "react";
import { useLoaderData } from "react-router";
import Postsingle from "../Postsingle/Postsingle";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl font-bold">Posts: {posts.length}</h2>
      <div className="grid grid-cols-3 gap-6 px-12 py-6">
        {posts.map((postdata, idx) => {
          return <Postsingle key={idx} post={postdata}></Postsingle>;
        })}
      </div>
    </div>
  );
};

export default Posts;
