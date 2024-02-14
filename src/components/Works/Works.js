import React from "react";
import "./Works.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam
        voluptatum dolore laborum voluptates ex, exercitationem accusamus quod
        veritatis cupiditate doloremque adipisci eum, tempore debitis?
        Voluptatibus pariatur earum ipsa veniam.
      </span>
      <div className="worksImgs">
        <a href="https://adiczq.github.io/Project-IceCream/">
          <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
        </a>
        <a href="https://adiczq.github.io/WeatherApp/">
          <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
        </a>
        <a href="https://adiczq.github.io/team-project-filmoteka/">
          <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
        </a>
        <a href="https://adiczq.github.io/diceGame/">
          <img src={Portfolio4} alt="Portfolio4" className="worksImg" />
        </a>
      </div>
    </section>
  );
};
export default Works;
