import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import FacebokIcon from "../../assets/facebook.png";
import TwitterIcon from "../../assets/twitter.png";
import LinkedinIcon from "../../assets/linkedin.png";
import Github from "../../assets/github-logo.png";

const Contact = () => {
  const form = useRef();
  const [toast, setToast] = useState({ text: "", type: "" });

  const showToast = (text, type) => {
    setToast({ text, type });

    setTimeout(() => {
      setToast({ text: "", type: "" });
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const messageText = form.current.message.value.trim();

    if (!name || !email || !messageText) {
      showToast("All fields are required.", "error");
      return;
    }

    emailjs
      .sendForm("service_rc9nse1", "template_dsnsgj7", form.current, {
        publicKey: "BBcLZfHjeG9FF0mQh",
      })
      .then(
        () => {
          showToast("Message sent successfully!", "success");
          form.current.reset();
        },
        () => {
          showToast("Something went wrong. Try again.", "error");
        }
      );
  };

  return (
    <section id="contactPage">
      <h2 className="contactPageTitle">Contact Me</h2>
      <span className="contactDesc">
        Feel free to reach out to me via{" "}
        <a href="mailto:adiczq@gmail.com" className="email">
          email
        </a>{" "}
        or{" "}
        <a href="tel:+48515253450" className="tele">
          phone
        </a>{" "}
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
          <a
            href="https://www.linkedin.com/in/adrian-lacheta-633270182/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedinIcon} alt="Linkedin Icon" className="link" />
          </a>
          <a href="https://github.com/adiczq" target="_blank" rel="noreferrer">
            <img src={Github} alt="Github Icon" className="link" />
          </a>
          <a
            href="https://www.facebook.com/Adiczq/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FacebokIcon} alt="Facebok Icon" className="link" />
          </a>
          <a
            href="https://twitter.com/Adiczq88"
            target="_blank"
            rel="noreferrer"
          >
            <img src={TwitterIcon} alt="Twitter Icon" className="link" />
          </a>
        </div>
      </form>
      {toast.text && <div className={`toast ${toast.type}`}>{toast.text}</div>}
    </section>
  );
};

export default Contact;
