import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroProjects from "../components/HeroProjects/HeroProjects";
import Work from "../components/Work/Work";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroProjects heading="PROJECTS_" text="Some of my most recent works" />
      <Work />
      <Footer />
    </div>
  );
};

export default Projects;
