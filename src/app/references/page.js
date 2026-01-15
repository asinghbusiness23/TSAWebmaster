import React from "react";
import ReferencesHero from "../referencesComps/ReferencesHero";
import Navbar from "../components/LayoutComps/Navbar";
import Footer from "../components/LayoutComps/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import ReferencesPage from "../referencesComps/ReferencesPage";

const page = () => {
  return (
    <div>
      <Navbar />
      <ReferencesHero />
      <ReferencesPage />
      <Footer />
    </div>
  );
};

export default page;
