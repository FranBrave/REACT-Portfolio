import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroProjects from "../components/HeroProjects/HeroProjects";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroProjects heading="CONTACT ME" text="It all begins with a message" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
