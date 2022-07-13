import React from "react";
import { ContStart } from "../LandingStyles/vertiNav";
import imagen from "../../images/about.png"
export default function Starting(){
    
    return(
        <ContStart>
            
                <img src={imagen} className="about"/>
            
        </ContStart>
    )
}