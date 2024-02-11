import React, { useEffect } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Mentro from "../components/Mentors/Mentro";
import ReactGA from "react-ga";

const Homepage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <>
      <Hero />
      <About />
      <Mentro/>
      <Contact />
    </>
  );
};

export default Homepage;
