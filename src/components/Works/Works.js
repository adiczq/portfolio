import React from "react";
import "./Works.css";
import Gallery from "../Gallery/Gallery";

const Works = () => {
  return (
    <div>
      <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">
          Welcome to my portfolio of web applications! Throughout my journey in
          programming and my time with GoIT course, I've had the pleasure of
          crafting various web applications that showcase my skills and passion
          for development. Each project in my portfolio is a testament to my
          dedication to creating functional, user-friendly experiences.
          Leveraging technologies such as HTML, CSS, JavaScript, and frameworks
          like React.js and Node.js, I've brought innovative ideas to life in
          the digital realm. Whether it's streamlining business processes,
          enhancing user engagement, or simply bringing creative concepts to
          fruition, my portfolio reflects the diverse range of projects I've
          tackled and the versatility I bring to the table as a developer.
        </span>
      </section>
      <Gallery />
    </div>
  );
};
export default Works;
