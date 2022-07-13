import React from "react";
import { SelectorHover } from "./navWallStyles/NavWall";
import {IoIosArrowDown} from 'react-icons/all';



export default function SelectorLenguaje(){
    return(
        <div>
            <SelectorHover>
            <div className="lucho">
                <div className="Select">
                <p>Nivel de ingles</p>
                <IoIosArrowDown className="arrow"/>
                </div>
                <div className="Cont">
                <li>A0</li>
                <li>A1</li>
                <li>A2</li>
                <li>B1</li>
                <li>B2</li>
                <li>C1</li>
                <li>C2</li>
                </div>
                </div>
            </SelectorHover>
        </div>
    )
}