import React from 'react';
import horiseonImg from '../../assets/images/horiseon-Home.png';
import runBuddyImg from '../../assets/images/run-buddy(mobile).png';
import project1Img from '../../assets/images/pick-my-meal.png';
import project2Img from '../../assets/images/rate-my-ride.png';
import portfolioImg from '../../assets/images/react-portfolio.png';
import WorkItems from '../WorkItems';

const items = [
  // {
  //   title: "Horiseon",
  //   desc: "Responsive Website",
  //   link: "https://albertjly.github.io/Horiseon-project/",
  //   img: {
  //     src: `${horiseonImg}`,
  //     alt: "Horiseon Project"
  //   }
  // },
  {
    title: "Run-Buddy",
    desc: "Responsive Website",
    link: "https://albertjly.github.io/git-albert/run-buddy/",
    img: {
      src: `${runBuddyImg}`,
      alt: "Run Buddy"
    }
  },
  {
    title: "Pick My Meal",
    desc: "Worked in a team to establish a fully functioned webpage",
    link: "https://albertjly.github.io/meal-music-picker/",
    img: {
      src: `${project1Img}`,
      alt: "pick my meal"
    }
  },
  {
    title: "CMS & MVC",
    desc: "Full-stack website project by using CMS and MVC",
    link: "https://rate-my-riide.herokuapp.com/",
    img: {
      src: `${project2Img}`,
      alt: "pick my meal"
    }
  },
  {
    title: "React",
    desc: "React Project",
    link: "https://react-portfolio-luyang-jiang.herokuapp.com/",
    img: {
      src: `${portfolioImg}`,
      alt: "react project"
    }
  }
];

function Portfolio() {
  return (
    <div className="work-right">
      <div className="work-top">
        <div className="work-top-title">
          <p>Horiseon</p>
          <p>Responsive Website</p>
        </div>
        <a href="https://albertjly.github.io/Horiseon-project/">
          <img src={horiseonImg} alt="Horiseon Project" />
        </a>
      </div>

      {
        items.map(item => <WorkItems {...item} />)
      }

    </div>
  )
};

export default Portfolio;