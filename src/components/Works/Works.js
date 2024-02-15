import React from "react";
import "./Works.css";
import Gallery from "../Gallery/Gallery";

const Works = () => {
  return (
    <div>
      <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          quam voluptatum dolore laborum voluptates ex, exercitationem accusamus
          quod veritatis cupiditate doloremque adipisci eum, tempore debitis?
          Voluptatibus pariatur earum ipsa veniam.
        </span>
      </section>
      <Gallery />
    </div>
  );
};
export default Works;
