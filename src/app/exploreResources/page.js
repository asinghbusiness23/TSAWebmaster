import React from "react";
import Navbar from "../components/LayoutComps/Navbar";
import HeroExplore from "../components/exploreResourcesComps/HeroExplore";
import SearchResources from "../components/exploreResourcesComps/SearchResources";
import Footer from "../components/LayoutComps/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";

const page = () => {
  return (
    <div className="scroll-smooth">
      <Navbar></Navbar>
      <HeroExplore></HeroExplore>
      <SearchResources />
      <Footer />
    </div>
  );
};

export default page;
