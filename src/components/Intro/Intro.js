import React from "react";
import "./Intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <p className="helloWorld">
            <code>&lt;</code>
            <span className="hello">Hello </span>
            <span className="world">World</span>
            <code>&frasl; &gt;</code>
          </p>
          <span className="introText">
            I'm <span className="introName">Adrian</span> <br />
            Fullstack Developer{" "}
          </span>
          <p className="introParagraf">
            I am an aspiring full-stack programmer dedicated to continuous
            <br />
            growth and learning. With a passion for technology and
            problem-solving, <br />I am committed to mastering both front-end
            and back-end development.
            <br />
            Eager to explore new technologies and expand my skill set, <br />I
            embrace challenges as opportunities for growth on my journey to
            <br />
            becoming a proficient full-stack developer.
          </p>
          <Link
            to="contactPage"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <button className="btn">
              <img src={btnImg} alt="Hire me" className="btnImg" /> Hire me
            </button>
          </Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
      </section>
    </div>
  );
};

export default Intro;
