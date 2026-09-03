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
                            I recently completed my Master's degree in Software and Machine Learning
                            Engineering at the University of Calgary.
                        </p>
                        <p className="about__description">
                            During my two-year Master's, I worked across research, teaching, and
                            industry. Alongside my graduate courses, I worked as a teaching assistant
                            for software engineering and machine learning courses and as a research
                            assistant on a healthcare AI project focused on predicting sudden cardiac
                            arrest.
                        </p>
                        <p className="about__description">
                            My research had two main stages. I first focused on the machine learning
                            side, working with ECG data and evaluating different deep learning approaches,
                            including transfer learning, to identify patients at higher risk of cardiac
                            arrest. This work led to my first peer-reviewed publication at the Canadian
                            AI Conference in 2025.
                        </p>
                        <p className="about__description">
                            I then wanted to take the research beyond developing a model and see how it
                            could work as part of a real system. I designed and built a complete
                            cloud-based patient-monitoring system that could continuously process patient
                            data, run risk predictions, update patient information, display results to
                            clinicians, and send alerts when a patient was identified as high risk.
                        </p>
                        <p className="about__description">
                            Building the system gave me the opportunity to work across the full stack,
                            from data processing and machine learning to backend services, APIs, cloud
                            infrastructure, Digital Twins, Docker, monitoring, and the user-facing
                            dashboard. This became my second research publication, presented at IEEE AIHC
                            in 2026.
                        </p>
                        <p className="about__description">
                            One of the things I enjoyed most about my Master's was being able to do both
                            research and hands-on engineering. I wasn't only asking whether a model
                            performed well; I was also thinking about how to make it part of a reliable
                            system that someone could actually use.
                        </p>
                        <p className="about__description">
                            During my Master's, I also stayed involved with industry. At the ETC
                            Foundation, I worked as a Machine Learning Engineer on a four-month project
                            focused on optimizing methanol injection in gas wells. I worked with
                            large-scale operational and time-series sensor data, built data and
                            feature-engineering pipelines in Databricks, trained and compared machine
                            learning models, and used MLflow to manage experiments. This experience gave
                            me the chance to apply ML to a very different real-world problem and work
                            with the challenges that come with industrial data.
                        </p>
                        <p className="about__description">
                            I was also part of the University of Calgary's Evolve to Innovate (e2i)
                            program and later Lab2Market. These experiences introduced me to a different
                            side of technology: understanding the problem before building the solution. I
                            learned about customer discovery, speaking with potential users, validating
                            assumptions, and exploring whether a technical idea could become a useful
                            product. It helped me think more about why we are building something and who
                            we are building it for, not only how to build it.
                        </p>
                        <p className="about__description">
                            Before starting my Master's, I intentionally spent time exploring industry to
                            better understand what kind of work I wanted to pursue. I chose project-based
                            and contract roles that allowed me to work with different companies, products,
                            and domains rather than following only one path.
                        </p>
                        <p className="about__description">
                            Through those experiences, I worked in full-stack software development on
                            real products. I contributed to platforms at companies including Comet, Jambo
                            and Alethea Medical working across frontend development, backend services,
                            APIs, databases, and later AI-powered features.
                        </p>
                        <p className="about__description">
                            Looking back, these experiences have given me a background that combines
                            software engineering, machine learning, applied research, and product
                            development. I enjoy working on problems where I can understand the idea from
                            the research and user side, build the technical solution end to end, and turn
                            it into something that can work in the real world.
                        </p>
                        <p className="about__description">
                            Outside of work, I enjoy playing soccer and hiking. I also regularly attend
                            tech meetups to keep learning about new technologies and research.
                        </p>
                        {/* <a href="" className="btn">Download Resume</a> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
