import React from "react";
import { SelectorHover } from "./navWallStyles/NavWall";
import {IoIosArrowDown} from 'react-icons/all';




export default function SelectorLocation(){
    return(
        <div>
              <SelectorHover >
            <div className="lucho">
                <div className="Select">
                <p>Ubicacion</p>
                <IoIosArrowDown className="arrow"/>
                </div>
                <div className="Cont">
                <li>proximamente</li>
                </div>
                </div>
            </SelectorHover>


        </div>
    )
}