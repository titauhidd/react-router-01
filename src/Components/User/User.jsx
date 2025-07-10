import React from "react";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="border-amber-200 border-2 rounded-xl text-2xl">
      <h2 className="underline">Data of Users</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone No: {phone}</p>
    </div>
  );
};

export default User;
