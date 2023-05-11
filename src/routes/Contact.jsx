import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroProjects from "../components/H/HeroProjects";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroProjects heading="CONTACT ME_" text="It all begins with a message" />
      <Footer />
    </div>
  );
};

export default Contact;
