import React from "react";
import "./services.css";
import ImageService1 from "../../assets/service-1.svg";
import ImageService2 from "../../assets/service-2.svg";
import ImageService3 from "../../assets/service-3.svg";



const data = [
    {
      id: 1,
      image: ImageService1,
      title: "Software Development",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elitaenean commodo ligula eget.",
    },
    {
      id: 2,
      image: ImageService2,
      title: "Software Development",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elitaenean commodo ligula eget.",
    },
    {
      id: 3,
      image: ImageService3,
      title: "Software Development",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elitaenean commodo ligula eget.",
    },
  ];

const Service = () =>{
    return(
        <section className="services container section" id="services">
            <h2 className="section__title">Skills</h2>

            <div className="services__container grid">
                {data.map(({id, image, title, description})=>{
                    return(
                        <div className="services__card" key={id}>
                            <img src={image} alt="" className="services__img" />
                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Service;