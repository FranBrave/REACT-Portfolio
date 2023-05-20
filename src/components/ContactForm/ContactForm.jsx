import "./ContactForm.scss";

import React from "react";

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
        <input type="hidden" name="_next" value="http://localhost:3000/" />
        <input type="hidden" name="_captcha" value="false" />
      </form>
    </div>
  );
};

export default ContactForm;
