import React from "react";
import "./home.css";
import HeaderSocials from "./HeaderSocial";
import Shapes from "./Shapes";

const Home = () =>{
    return(
       <section className="home container" id="home">
        <div className="intro">
            <h1 className="home__name">Zar Safari</h1>
            <span className="home__education">
                Software and Machine Learning Engineer focused on building end-to-end AI and data-driven applications.
            </span>

            <HeaderSocials />
            {/* <a href="#contact" className="btn">Let's Get In Touch</a> */}
        </div>

        <Shapes />
       </section>
    )
}

export default Home;
