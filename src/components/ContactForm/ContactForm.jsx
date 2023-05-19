import "./ContactForm.scss";

import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form>
        <label>Your name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="text"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
