import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectorDate from "../navWall/selectorDate";
import SelectorFrontBack from "../navWall/selectorFrontBack";
import { NaviCont } from "../navWall/navWallStyles/NavWall";
import SelectorLenguaje from "../navWall/selectorLenguage";
import SelectorLocation from "../navWall/selectorLocation";
import SelectorModality from "../navWall/selectorModality";
import SelectorTech from "../navWall/selectorTech";

export default function NavWall(){
    return(
        <NaviCont>
           
                <SelectorDate/>
                <SelectorLenguaje/>
                <SelectorFrontBack/>
            
                <SelectorLocation/>
                <SelectorModality/>
                <SelectorTech/>
            
        </NaviCont>
    )
}