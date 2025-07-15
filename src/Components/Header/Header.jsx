import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-12 bg-amber-500 h-16">
      <h2>This is header</h2>
      <nav className="flex gap-12">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/posts"}>Posts</Link>
      </nav>
      {/* <p className="text-6xl bg-amber-800 text-white">This is my Home Page</p> */}
    </div>
  );
};

export default Header;
