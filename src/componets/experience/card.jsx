import React from "react";

const Card = (props) =>{
    return(
        <article className="timeline__item">
            <i className={props.icon}></i>
            <h3 className="timeline__title">{props.title}</h3>
            <span className="timeline__date">{props.year}</span>
            {props.issuer && <span className="timeline__issuer">{props.issuer}</span>}
            {Array.isArray(props.desc) ? (
                <div className="timeline__paragraphs">
                    {props.desc.map((item, index) => (
                        <p key={index} className="timeline__text">{item}</p>
                    ))}
                </div>
            ) : (
                <p className="timeline__text">{props.desc}</p>
            )}
            {props.link && (
                <a
                    className="timeline__link"
                    href={props.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    {props.linkLabel || "View reference"}
                </a>
            )}
        </article>
    )
}

export default Card;
