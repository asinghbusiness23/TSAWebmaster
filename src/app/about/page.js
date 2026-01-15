import React from "react";
import Navbar from "../components/LayoutComps/Navbar";
import HeroAbout from "../components/aboutComps/HeroAbout";
import InDepthMission from "../components/aboutComps/InDepthMission";
import Why from "../components/aboutComps/Why";
import Offers from "../components/aboutComps/Offers";
import WhoItsFor from "../components/aboutComps/whoIt'sFor";
import Values from "../components/aboutComps/Values";
import Footer from "../components/LayoutComps/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroAbout />
      <InDepthMission />
      <Why />
      <Offers />
      <WhoItsFor />
      <Values />
      <Footer />
    </div>
  );
};

export default page;
