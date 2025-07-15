import React from "react";
import { Link } from "react-router";

const Postsingle = ({ post }) => {
  const { title, body, id } = post;
  return (
    <div className="border-amber-200 border-2 rounded-xl text-2xl p-6">
      <p className="mb-2 border-b-2">Title: {title}</p>
      {/* <p className="mb-2 border-b-2">{body}</p> */}
      <Link to={`/posts/${id}`}>Show Details</Link>
    </div>
  );
};

export default Postsingle;
