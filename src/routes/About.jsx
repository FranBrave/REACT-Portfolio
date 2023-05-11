import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroProjects from "../components/H/HeroProjects";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroProjects heading="ABOUT_" text="Passion meets profession" />
      <Footer />
    </div>
  );
};

export default About;
