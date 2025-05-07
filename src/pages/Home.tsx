import React from "react";
import homeImage from "../assets/images/home.jpg";

const Home = () => {
  return (
    <div
      className="relative h-[calc(100vh-64px)] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${homeImage})` }}
    ></div>
  );
};

export default Home;
