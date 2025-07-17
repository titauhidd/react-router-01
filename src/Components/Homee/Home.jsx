import React from "react";
import { Outlet, useLocation, useNavigation } from "react-router";
import Header from "../Header/Header";

const Home = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const location = useLocation();
  console.log(location);
  return (
    <div className="text-center ">
      <Header> </Header>
      {navigation.state === "loading" ? (
        <p>Loading..!!!!</p>
      ) : (
        <Outlet></Outlet>
      )}
    </div>
  );
};

export default Home;
