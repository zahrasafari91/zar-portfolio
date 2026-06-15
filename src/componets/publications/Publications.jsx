import React from "react";
import "./publications.css";

const Publications = () => {
    return (
        <section className="publications container section" id="publications">
            <h2 className="section__title">Publications</h2>
            <div className="publications__content">
                <div className="publications__item">
                    <div>
                        <strong>Transfer Learning for Multi-Lead ECG Analysis in Cardiac Arrest Risk Classification</strong>
                        <span className="publications__meta">
                            <a
                                href="https://github.com/zahrasafari91/cardiac-arrest-risk-prediction"
                                className="publications__github"
                                aria-label="GitHub repository for Transfer Learning ECG publication"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                            Canadian AI 2025
                        </span>
                    </div>
                </div>
                <div className="publications__item">
                    <div>
                        <strong>End-to-End Digital Twin System for Cardiac Arrest Risk Detection</strong>
                        <span className="publications__meta">
                            <a
                                href="#publication-digital-twin-github"
                                className="publications__github"
                                aria-label="GitHub repository for Digital Twin publication"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                            IEEE AIHC 2026
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Publications;
