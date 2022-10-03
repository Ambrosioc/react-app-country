import React from "react";
import Countries from "../components/main/Countries";
import Logo from "../components/header/Logo";
import Nav from "../components/header/Nav";
const Home = () => {
  return (
    <div>
      <Logo />
      <Nav />
      <Countries />
    </div>
  );
};

export default Home;
