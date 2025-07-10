import React from "react";
import { useLoaderData } from "react-router";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>Users: {users.length}</h2>
      <div className="grid grid-cols-3 gap-6 px-12 py-6"> 
        {users.map((userd, i) => {
          return <User key={i} user={userd}></User>;
        })}
      </div>
    </div>
  );
};

export default Users;
