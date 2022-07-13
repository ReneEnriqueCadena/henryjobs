import React from "react";
import '../LandingStyles/accordion.css'

export default function Accordion({title, active, setActive, p}) {
    return (
        <div className="accordion">
            <div className="accordionHeading">
                <div className="conteiner">
                    <p>{title}</p>
                    <span onClick={()=> setActive(title)}>
                        {active === title ? "-" : "+"}
                    </span>
            
                </div>
            </div>

        <div className={(active === title ? "show" : "") + " accordionContent"}>
            <div className="conteiner">
                <p>
                    {p}
                </p>
            </div>
        </div>
    </div>
    );
};