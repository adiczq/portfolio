import React from "react";
import "./Skills.css";
import htmlCss from "../../assets/htmlCss.png";
import js from "../../assets/js.png";
import nodejs from "../../assets/node.png";
import mongodb from "../../assets/mongodb.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        explicabo eum distinctio nisi fugiat facilis fugit consequuntur
        incidunt! Quae eveniet perspiciatis numquam sapiente sint? Id porro
        corporis tenetur itaque voluptatem.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={htmlCss} alt="Html and css logo" className="skillBarImg" />
          <div className="skillBarText">
            <h2>HTML5/CSS3</h2>
            <p>
              Proficient in HTML and CSS for creating and styling web content.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={js} alt="JavaScript logo" className="skillBarImg" />
          <div className="skillBarText">
            <h2>JavaScript</h2>
            <p>
              Skilled in JavaScript for developing dynamic and interactive web
              applications.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={react} alt="React logo" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React</h2>
            <p>
              Experienced in working with React.js to build modern and efficient
              user interfaces for web applications.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={redux} alt="React redux logo" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React Redux</h2>
            <p>
              Capable of utilizing React Redux to efficiently manage state and
              develop scalable and maintainable web applications.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={nodejs} alt="Nodejs logo" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Node.Js</h2>
            <p>
              Proficient in utilizing Node.js to develop server-side
              applications and build scalable and high-performance web services.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={mongodb} alt="MongoDB logo" className="skillBarImg" />
          <div className="skillBarText">
            <h2>MongoDB</h2>
            <p>
              Experienced in working with MongoDB to develop and manage database
              systems for storing and retrieving data in web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
