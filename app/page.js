'use client'
import { useState, useEffect, useDisclosure } from "react"
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

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
      <Navbar />  
      <br/>
      <HomePage />
      <br/><br/>
      <Footer />
    </>
  );
};

function Home() {
  return <ExampleComponent />;
}

export default Home;
