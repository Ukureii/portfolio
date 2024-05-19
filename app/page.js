'use client'
import { useState, useEffect } from "react"
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Slides from "./components/Slides";
import Contact from "./components/Contact";

const Accueil = () => {
    return (
        <div id="accueil">
            <Hero />
        </div>
    );
};

const Projects = () => {
    return (
        <div id="projects">
            <Slides />
        </div>
    );
};

const Competences = () => {
    return (
        <div id="competences">
            <Skills />
        </div>
    );
};

const Cont = () => {
    return (
        <div id="contact">
            <Contact />
        </div>
    );
};

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
            <NavBar />
            <Accueil />
            <Projects />
            <Competences />
            <Cont />
            <Footer />
        </>
    );
};

function Home() {
    return <ExampleComponent />;
}

export default Home;
