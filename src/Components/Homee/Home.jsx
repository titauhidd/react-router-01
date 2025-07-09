import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <p>This is my Homeee</p>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
