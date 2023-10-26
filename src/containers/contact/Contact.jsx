import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. This feature is still in progress.");
  };

  return (
    <div className="contact section__padding" id="contact">
      <div className="contact-info">
        <h1 className="gradient__text">Contact Me</h1>
        <div className="contact-item">
          <p>
            <FaPhone />
            Call Me
          </p>
          <p className="contact-detail">+91 9503072082</p>
        </div>
        <div className="contact-item">
          <p>
            <FaEnvelope />
            Email Me
          </p>
          <p className="contact-detail">nitingovardhane000@gmail.com</p>
        </div>
        <div className="contact-item">
          <p>
            <FaMapMarkerAlt />
            Location
          </p>
          <p className="contact-detail">Nashik, Maharashtra, India</p>
        </div>
      </div>
      <div className="contact-form">
        <h2>I want to Hear from You</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              placeholder="Enter Your Name"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="Enter Your Email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject"></label>
            <input
              type="text"
              placeholder="Enter Subject"
              id="subject"
              name="subject"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message"></label>
            <textarea
              id="message"
              placeholder="Your Message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
