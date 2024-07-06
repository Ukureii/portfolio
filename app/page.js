'use client'
import { useState, useEffect } from "react"
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Slides from "./components/Slides";

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
        <Hero />
        <Slides />
        <Skills />
        <Contact />
        <Footer />
      </>
  );
};

function Home() {
  return <ExampleComponent />;
}

export default Home;