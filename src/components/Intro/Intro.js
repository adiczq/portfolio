import React from "react";
import "./Intro.css";
import bg from "../../assets/image.png";
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
          <h1 className="introText">
            I'm <span className="introName">Adrian</span> <br />
            Fullstack Developer{" "}
          </h1>
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
            <button className="introBtn">
              <svg
                className="introBtnImg"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M 20 3 C 18.355469 3 17 4.355469 17 6 L 17 9 L 3 9 C 1.347656 9 0 10.347656 0 12 L 0 25 C 0 26.652344 1.347656 28 3 28 L 47 28 C 48.652344 28 50 26.652344 50 25 L 50 12 C 50 10.347656 48.652344 9 47 9 L 33 9 L 33 6 C 33 4.355469 31.644531 3 30 3 Z M 20 5 L 30 5 C 30.5625 5 31 5.4375 31 6 L 31 9 L 19 9 L 19 6 C 19 5.4375 19.4375 5 20 5 Z M 25 22 C 26.105469 22 27 22.894531 27 24 C 27 25.105469 26.105469 26 25 26 C 23.894531 26 23 25.105469 23 24 C 23 22.894531 23.894531 22 25 22 Z M 0 27 L 0 44 C 0 45.652344 1.347656 47 3 47 L 47 47 C 48.652344 47 50 45.652344 50 44 L 50 27 C 50 28.652344 48.652344 30 47 30 L 3 30 C 1.347656 30 0 28.652344 0 27 Z"></path>
              </svg>
              Hire me
            </button>
          </Link>
        </div>
        <img src={bg} alt="Profile" className="portfolioImg" />
      </section>
    </div>
  );
};

export default Intro;
