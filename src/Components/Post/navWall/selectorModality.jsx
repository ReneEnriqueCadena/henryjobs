import React from "react";
import {IoIosArrowDown} from 'react-icons/all';
import { SelectorHover } from "./navWallStyles/NavWall";


export default function SelectorModality(){
    return(
        <div>
             <SelectorHover >
            <div className="lucho">
                <div className="Select">
                <p>Modalidad</p>
                <IoIosArrowDown className="arrow"/>
                </div>
                <div className="Cont">
                <li>Remoto</li>
                <li>Presencial</li>
                <li>Hibrida</li>
                </div>
                </div>
            </SelectorHover>


        </div>
    )
}