import React, { useEffect, useState } from "react";
import "./styles/Home.scss";
import LogoTitle from "../assets/images/logo-s.png";
import AnimatedLetters from "./AnimatedLetters";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
// import Logo from "./Logo";
import LogoS from "../assets/images/logo-s.png";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["h", "u", "b", "h", "a", "m"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  useEffect(() => {
    return () =>
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
  }, []);
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Shubham Lahoti - Web Developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>FULL Stack developer/ JS Developer/ Freelancer</h2>
          <Link to="/contact" className="flat-button" style={{ zIndex: "5" }}>
            CONTACT ME
          </Link>
        </div>
        {/* <Logo /> */}
        <div className="my-logo">
          <img src={LogoS} alt="Shubham logo" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
