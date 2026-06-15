import React from "react";
import "./home.css";
import HeaderSocials from "./HeaderSocial";
import Shapes from "./Shapes";

const Home = () =>{
    return(
       <section className="home container" id="home">
        <div className="intro">
            <h1 className="home__name">Zar Safari</h1>
            <span className="home__education">Full Stack AI Engineer building practical ML systems</span>
            <p className="home__summary">
                I work across software engineering, machine learning, and product-minded AI systems,
                with a focus on turning complex data into useful, reliable applications.
            </p>

            <HeaderSocials />
            {/* <a href="#contact" className="btn">Let's Get In Touch</a> */}
        </div>

        <Shapes />
       </section>
    )
}

export default Home;
