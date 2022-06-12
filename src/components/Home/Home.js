import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects/Projects';




const Home = () => {
    return (
        <div>


            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Contact href="#contact"></Contact>

        </div>
    );
};

export default Home;