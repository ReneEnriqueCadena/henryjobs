import React from "react";
import { SelectorHover } from "./navWallStyles/NavWall";
import {IoIosArrowDown} from 'react-icons/all';



export default function SelectorFrontBack(){
    return(
        <div>
        <SelectorHover>

            <div className="lucho">
                <div className="Select">
                <p>Tendencia</p>
                <IoIosArrowDown className="arrow"/>
                </div>
                <div className="Cont">
                <li>Frontend</li>
                <li>Backend</li>
                <li>FullStack</li>
                </div>
                </div>


        </SelectorHover>
        </div>
    )
}