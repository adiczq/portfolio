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
          <div className="introBtnCont">
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
            <a
              href="https://drive.google.com/file/d/1qfK8nbZKhZznpleh-9VCNqQXn9K1ZQl1/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="introBtn">
                <svg
                  className="introBtnCV"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.042 20h3l-5.021 4-4.979-4h3s0-8 7.812-8c-4.625 1.906-3.812 8-3.812 8zm6.437-12.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h1.766c.118-.596.303-1.283.578-2h-2.344c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-2.979c-.289.671-.437 1.38-.497 2h3.476c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z" />
                </svg>{" "}
                Download my CV
              </button>
            </a>
          </div>
        </div>
        <img src={bg} alt="Profile" className="portfolioImg" />
      </section>
    </div>
  );
};

export default Intro;
