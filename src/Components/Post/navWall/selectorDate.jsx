import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectorHover } from "./navWallStyles/NavWall";
import {IoIosArrowDown} from 'react-icons/all';





export default function SelectorDate(){


    return(
        <div>
            <SelectorHover >
            <div className="lucho">
                <div className="Select">
                <p>Publicaciones</p>
                <IoIosArrowDown className="arrow"/>
                </div>
                <div className="Cont">
                <li>Mas reciente</li>
                <li>Mas antigua</li>
                </div>
                </div>
            </SelectorHover>
            
            
        </div>
    )
}