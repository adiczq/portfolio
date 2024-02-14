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
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod cumque
          est pariatur tempore provident sed quasi doloremque. At repellendus,
          nobis sint quos aliquam quia. Quia architecto corrupti aperiam
          molestiae similique?
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
      </div>
    </section>
  );
};

export default Contact;
