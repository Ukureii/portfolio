'use client'
import { useState, useEffect, useDisclosure } from "react"
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import UserIcon from "@/components/UserIcon";

const ExampleComponent = () => {
  const [isToggle, setIsToggle] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsToggle((prevValue) => !prevValue);
    }, 1500);

    // Nettoyez l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <UserIcon showBadge={isToggle} />
    </>
  );
};

// Utilisez ExampleComponent dans votre composant principal
function Home() {
  return <ExampleComponent />;
}

export default Home;
