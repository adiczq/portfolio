import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Gallery.css";
import WorkCard from "../WorkCard/WorkCard";
import walletAppImg from "../../assets/walletApp.png";
import projectIceCream from "../../assets/Project-IceCream.png";
import teamProjectFilmoteka from "../../assets/team-project-filmoteka.png";
import weatherApp from "../../assets/WeatherApp.png";
import diceGame from "../../assets/diceGame.png";
import billSpliter from "../../assets/billSpliter.png";

const Gallery = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    largedesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1200 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 800 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <WorkCard
        imageUrl={walletAppImg}
        websiteUrl="https://walletappbyadiczq.netlify.app/"
        title="Wallet App"
        description="In the Wallet project, both frontend and backend were constructed, utilizing React for the frontend and Node.js for the backend"
      />
      <WorkCard
        imageUrl={projectIceCream}
        websiteUrl="https://adiczq.github.io/Project-IceCream/"
        title="Project IceCraem"
        description="Sass served as the primary tool for enhancing styling efficiency and maintaining code modularity"
      />
      <WorkCard
        imageUrl={teamProjectFilmoteka}
        websiteUrl="https://adiczq.github.io/team-project-filmoteka/"
        title="Project Filmoteka"
        description="In the Filmoteka project, an API was integrated to enhance functionality, enabling seamless retrieval and display of movie data"
      />
      <WorkCard
        imageUrl={weatherApp}
        websiteUrl="https://adiczq.github.io/WeatherApp/"
        title="WeatherApp"
        description="In the WeatherApp project, real-time weather data was accessed and displayed through intuitive interfaces"
      />
      <WorkCard
        imageUrl={diceGame}
        websiteUrl="https://adiczq.github.io/diceGame/"
        title="DiceGame"
        description="The diceGame project is a fun and interactive application where users can roll virtual dice and enjoy a game of chance"
      />
      <WorkCard
        imageUrl={billSpliter}
        websiteUrl="https://adiczq.github.io/billSpliter/"
        title="BillSpliter"
        description="The BillSplitter project is a convenient tool for evenly dividing expenses among friends or groups, simplifying the process of splitting bills and managing shared costs"
      />
    </Carousel>
  );
};

export default Gallery;
