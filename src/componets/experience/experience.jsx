import React from "react";
import "./experience.css";
import { educationData, experienceData, honorsData } from "./data";
import Card from "./card";

const Experience = () => {
    return (
        <section className="resume container section" id="experience">
            <h2 className="section__title">Experience</h2>

            <div className="timeline__sections">
                <div className="timeline__section">
                    <h3 className="timeline__heading">Work Experiences</h3>
                    <div className="timeline">
                        {experienceData.map((item) => (
                            <Card
                                key={item.id}
                                icon={item.icon}
                                title={item.title}
                                year={item.year}
                                desc={item.desc}
                            />
                        ))}
                    </div>
                </div>

                <div className="timeline__section" id="education">
                    <h3 className="timeline__heading">Education</h3>
                    <div className="timeline">
                        {educationData.map((item) => (
                            <Card
                                key={item.id}
                                icon={item.icon}
                                title={item.title}
                                year={item.year}
                                desc={item.desc}
                            />
                        ))}
                    </div>
                </div>

                <div className="timeline__section" id="honors">
                    <h3 className="timeline__heading">Honors & Awards</h3>
                    <div className="timeline">
                        {honorsData.map((item) => (
                            <Card
                                key={item.id}
                                icon={item.icon}
                                title={item.title}
                                year={item.year}
                                issuer={item.issuer}
                                desc={item.desc}
                                link={item.link}
                                linkLabel={item.linkLabel}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
