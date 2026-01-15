import SuggestResourceForm from "../components/suggestComps/SuggestResourceForm";
import Navbar from "../components/LayoutComps/Navbar";
import Footer from "../components/LayoutComps/Footer";
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";


const page = () => {
  return (
    <div>
      <Navbar />
      <SuggestResourceForm />
      <Footer />
    </div>
  );
};

export default page;
