import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";

const App = () => {
  return (
    <div className="app">
      <div className="blurred-background" />
      <Navbar />
      <Intro />
      <AboutMe />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
