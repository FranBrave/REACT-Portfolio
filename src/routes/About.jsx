import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroProjects from "../components/HeroProjects/HeroProjects";
import { AboutContent } from "../components/AboutContent/AboutContent";
import { Skills } from "../components/Skills/Skills";
import SoftSkills from "../components/SoftSkills/SoftSkills";
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroProjects heading="ABOUT ME" text="Passion meets profession" />
      <AboutContent />
      <Skills />
      <SoftSkills />
      <Footer />
    </div>
  );
};

export default About;
