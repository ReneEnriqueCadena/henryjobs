import React from "react";
import logo from '../../images/Logo.png'
import { NavLogo } from "../NavStyles/navbar";
import { Link } from "react-router-dom";

export default function Logo(){
    return(
        <NavLogo>
            <Link to={"/"}>
            <img src={logo} alt='Logo henry'/>
            </Link>
        </NavLogo>
    )
}