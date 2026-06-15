import React from "react";
import "./about.css";


const About = () =>{
    return(
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            I am a full stack AI engineer with a background in software engineering,
                            machine learning, and applied research. I have a Master of Science
                            in Software and Machine Learning Engineering from the University of Calgary.
                            My work is usually closest to the place where models become useful products:
                            data pipelines, backend systems, model evaluation, cloud services, and
                            user-facing AI features.
                        </p>
                        <p className="about__description">
                            Recently, I have been working on healthcare-focused AI systems, including
                            cardiac arrest risk prediction from multi-lead ECG data and a Digital Twin
                            platform for continuous monitoring. I built an end-to-end system from scratch,
                            which shaped how I think about AI: strong models matter, but reliability,
                            clear evaluation, and thoughtful integration matter just as much.
                        </p>
                        <p className="about__description">
                            I have published work at Canadian AI 2025 and IEEE AIHC 2026. Outside of
                            engineering, I enjoy reading, cycling, and playing soccer.
                        </p>
                        {/* <a href="" className="btn">Download Resume</a> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
