import React from "react";
import { SelectorHover } from "./navWallStyles/NavWall";
import {IoIosArrowDown} from 'react-icons/all';



export default function SelectorTech(){
    return(
        <div>
              <SelectorHover >
            <div className="lucho">
                <div className="Select">
                <p>Tecnologia</p>
                <IoIosArrowDown className="arrow"/>
                </div>
                <div className="Cont">
                <li>Proximamente</li>
                </div>
                </div>
            </SelectorHover>
        </div>
    )
}