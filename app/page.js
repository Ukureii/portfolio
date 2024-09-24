'use client'
import { useState, useEffect } from "react"
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Slides from "./components/Slides";
import Projets from "./components/Projets";

const ExampleComponent = () => {
  const [isToggle, setIsToggle] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsToggle((prevValue) => !prevValue);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
      <>
          <NavBar/>

          <section id="hero">
              <Hero/>
          </section>

          <section id="competences">
              <Skills/>
          </section>

          <section id="projets">
              <Projets/>
          </section>

          <section id="contact">
              <Contact/>
          </section>

          <Footer/>
      </>
  );
};

function Home() {
    return <ExampleComponent/>;
}

export default Home;