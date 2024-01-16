'use client'
import { useState, useEffect, useDisclosure } from "react"
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import HomePage from "@/app/components/HomePage";
import Footer from "@/app/components/Footer";
// import UserIcon from "@/components/UserIcon";

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
    // <UserIcon showBadge={isToggle} />
  );
};

function Home() {
  return <ExampleComponent />;
}

export default Home;
