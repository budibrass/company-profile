import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import { ListMenu } from "../utils/data";

const Home = () => {
  return (
    <>
      <Navbar
        imgSrc="/assets/logo.png"
        imgAlt="bannerFoto"
        imgHeight={30}
        listMenu={ListMenu}
      />
      <Hero heroImg="/assets/Banner2.jpg" heroAlt="heroImages" />
    </>
  );
};

export default Home;
