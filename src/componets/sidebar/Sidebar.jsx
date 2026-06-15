import React from "react";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <aside className="aside">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="fa-solid fa-user"></i>
                            <span>About</span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#experience" className="nav__link">
                            <i className="fa-solid fa-briefcase"></i>
                            <span>Work Experiences</span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#education" className="nav__link">
                            <i className="fa-solid fa-graduation-cap"></i>
                            <span>Education</span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#honors" className="nav__link">
                            <i className="fa-solid fa-award"></i>
                            <span>Honors & Awards</span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#publications" className="nav__link">
                            <i className="fa-solid fa-book-open"></i>
                            <span>Publications</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
