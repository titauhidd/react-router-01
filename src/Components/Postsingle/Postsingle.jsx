import React from "react";
import { Link, useNavigate } from "react-router";

const Postsingle = ({ post }) => {
  const { title, body, id } = post;

  const navigate = useNavigate();

  const handleSeeDetails = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <div className="border-amber-200 border-2 rounded-xl text-2xl p-6">
      <p className="mb-2 border-b-2">Title: {title}</p>
      {/* <p className="mb-2 border-b-2">{body}</p> */}
      {/* <Link to={`/posts/${id}`}>Show Details</Link> */}
      <button onClick={handleSeeDetails} className="px-6 py-2 border-1 rounded-2xl hover:bg-amber-100">See Details</button>
    </div>
  );
};

export default Postsingle;
