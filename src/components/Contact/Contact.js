import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import FacebokIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hr2nzec", "template_dsnsgj7", form.current, {
        publicKey: "BBcLZfHjeG9FF0mQh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Feel free to reach out to me via{" "}
        <a href="mailto:adiczq@gmail.com" className="email">
          email
        </a>
        or
        <a href="tel:+48515253450" className="tele">
          phone
        </a>
        if you'd like to discuss potential opportunities or collaborate on
        projects. I'm always open to new challenges and opportunities for
        growth.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="formInputName"
          placeholder="Your name"
          name="from_name"
        />
        <input
          type="email"
          className="formInputEmail"
          placeholder="Your email"
          name="from_email"
        />
        <textarea
          name="message"
          className="formInputMsg"
          rows="5"
          placeholder="Your message"
        ></textarea>
        <button type="submit" value="Send" className="formSubmitBtn">
          Submit
        </button>
        <div className="links">
          <img src={FacebokIcon} alt="Facebok Icon" className="link" />
          <img src={TwitterIcon} alt="Twitter Icon" className="link" />
          <img src={YouTubeIcon} alt="YouTube Icon" className="link" />
          <img src={InstagramIcon} alt="Instagram Icon" className="link" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
