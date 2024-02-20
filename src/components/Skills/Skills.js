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
      <h2 className="skillTitle">Skills</h2>
      <div className="skillBars">
        <div className="skillBar">
          <img src={htmlCss} alt="Html and css logo" className="skillBarImg" />
          <div className="skillBarText">
            <h3>HTML5/CSS3</h3>
            <p>
              Proficient in HTML and CSS for creating and styling web content.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={js} alt="JavaScript logo" className="skillBarImg" />
          <div className="skillBarText">
            <h3>JavaScript</h3>
            <p>
              Skilled in JavaScript for developing dynamic and interactive web
              applications.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={react} alt="React logo" className="skillBarImg" />
          <div className="skillBarText">
            <h3>React</h3>
            <p>
              Experienced in working with React.js to build modern and efficient
              user interfaces for web applications.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={redux} alt="React redux logo" className="skillBarImg" />
          <div className="skillBarText">
            <h3>React Redux</h3>
            <p>
              Capable of utilizing React Redux to efficiently manage state and
              develop scalable and maintainable web applications.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={nodejs} alt="Nodejs logo" className="skillBarImg" />
          <div className="skillBarText">
            <h3>Node.Js</h3>
            <p>
              Proficient in utilizing Node.js to develop server-side
              applications and build scalable and high-performance web services.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={mongodb} alt="MongoDB logo" className="skillBarImg" />
          <div className="skillBarText">
            <h3>MongoDB</h3>
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
