import React from "react";
import { useLoaderData } from "react-router";

const Userdt = () => {
  const user = useLoaderData();
  const { name } = user;
  return (
    <div>
      <h2>Details of User Dynamically</h2>
      <p>Name: {name}</p>
    </div>
  );
};

export default Userdt;
