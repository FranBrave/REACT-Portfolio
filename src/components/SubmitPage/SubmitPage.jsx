import React from "react";
import { Link } from "react-router-dom";
import sent from "../../assets/sent.png";

const SubmitPage = () => {
  return (
    <div className="submit-page-container">
      <h1>Submitted!</h1>
      <img src={sent} alt="sent" />
      <h2>Thank you for contacting me. I will respond to you ASAP.</h2>
      <Link to="/">
        <button className="btn contact-btn">Home</button>
      </Link>
    </div>
  );
};

export default SubmitPage;
