import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="text-center ">
      <Header> </Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
