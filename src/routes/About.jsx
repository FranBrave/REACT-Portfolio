import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroProjects from "../components/HeroProjects/HeroProjects";
import { AboutContent } from "../components/AboutContent/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroProjects heading="ABOUT ME" text="Passion meets profession" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
