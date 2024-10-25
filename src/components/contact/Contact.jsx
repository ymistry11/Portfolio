import React, { useRef } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_65y747q",
        "template_dzn90ua",
        form.current,
        "dx_UMkOWyHBANF96A"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contanct__option-icon" />
            <h4>Email</h4>
            {/* <h5>krisxxg@gmail.com</h5> */}
            <a href="mailto:yshmistryuk@gmail.com" target="#">
              Send an Email
            </a>
          </article>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2702445588666!2d0.015935876657056803!3d51.50825787181348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a80c3dcd1d2b%3A0x73ffcfab53cc5b8a!2sAdriatic%20Apartments%2C%2020%20Western%20Gateway%2C%20London%20E16%201BS!5e0!3m2!1sen!2suk!4v1729849225806!5m2!1sen!2suk"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
