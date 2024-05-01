'use client'
import { useState, useEffect } from "react"
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
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
        <HomePage />
        <Slides />
        <Skills />
        <Footer />
    </>
  );
};

function Home() {
  return <ExampleComponent />;
}

export default Home;
