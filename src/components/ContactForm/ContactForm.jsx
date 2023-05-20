import { TfiEmail } from "react-icons/tfi";
import "./ContactForm.scss";

import React from "react";
import { FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div>
      <form
        action="https://formsubmit.co/c6cefa4aa2547d4b555ca6eab314e5c9"
        method="POST"
      >
        <label>Your name</label>
        <input type="text" name="name" required></input>
        <label>Email</label>
        <input type="email" name="email" required></input>
        <label>Subject</label>
        <input type="text" name="subject" required></input>
        <label>Message</label>
        <textarea
          name="message"
          rows="6"
          required
          placeholder="Type your message here"
        ></textarea>
        <button className="btn" type="submit">
          Submit
        </button>
        <input
          type="hidden"
          name="_next"
          value="http://www.franvaliente.com/"
        />
        <input type="hidden" name="_captcha" value="false" />
      </form>
      <h2>Other contact methods</h2>
      <div className="buttons">
        <a
          href="mailto:valiente.fco@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          <TfiEmail size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/francisco-valiente-fulllstack-developer"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          <FaLinkedin size={40} />
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
