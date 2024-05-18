'use client'
import { useState, useEffect } from "react"
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

const Projets = () => {
    return (
        <div id="projets">
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
            <Accueil />
            <Projets />
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
