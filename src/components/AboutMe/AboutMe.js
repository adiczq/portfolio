import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <id id="aboutMe">
      <h2 className="aboutMeTitle">About me</h2>
      <div className="aboutMeDesc">
        <h3>
          <span className="pink">Interests</span> and{" "}
          <span className="green">Hobbies</span>{" "}
        </h3>{" "}
        My interests revolve around computers, electronics, and smart devices.
        Additionally, I'm passionate about DIY projects. An example of this is
        my home-built system for automatic gate and lighting control, which I
        designed and configured independently.
        <h3>
          {" "}
          <span className="green">Skills</span> and{" "}
          <span className="pink">Professional </span>Experience
        </h3>{" "}
        My professional journey began 16 years ago when I started working in
        metalworking as a CNC operator. Over the course of ten years, I gained
        extensive experience in metal fabrication before transitioning into CNC
        programming, a role I've been in for the past six years. Alongside my
        professional experience, I've been actively developing my programming
        skills for over a year now, starting with foundational web technologies
        like HTML/CSS and progressing to advanced frameworks like React and
        Node.js.
        <h3>
          <span className="green">Education </span>
        </h3>{" "}
        I graduated from the Silesian University of Technology with a Bachelor's
        degree in Management and Production Engineering. During my studies, I
        honed my analytical skills and gained knowledge in production
        management, which complements my professional experience well.
        <h3>
          {" "}
          <span className="pink">Unique</span> Qualities
        </h3>{" "}
        One of my distinguishing characteristics is my dedication to continuous
        improvement and lifelong learning. Furthermore, my diverse interests and
        technical skills allow me to approach problems from various perspectives
        and devise creative solutions.
        <h3>
          <span className="green">Professional</span> and{" "}
          <span className="pink">Personal</span> Goals
        </h3>{" "}
        My primary professional goal is to secure a position as a frontend,
        backend, or fullstack developer. Currently, I'm focusing on mastering
        TypeScript and Next.js to enhance my skill set and remain competitive in
        the job market. Simultaneously, I strive for continual growth both
        professionally and personally, aspiring to become the best version of
        myself.
      </div>
    </id>
  );
};

export default AboutMe;
