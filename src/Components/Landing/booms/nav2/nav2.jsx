import React from "react";
import { NavbarLineas, VerticalDiv } from "../../LandingStyles/vertiNav";
import Anuncio from '../../../images/anuncio.png'
import Proyectos from '../../../images/Protecto.png'
import Booms from '../../../images/booms.png'
import Cohete from '../../../images/cohete.png'
import About from '../../../images/about-icon.png'
import { Link } from "react-router-dom";

export default function VertiNav(){
    return(
        <VerticalDiv>
            <img src={Cohete} className='cohete'/>
           <NavbarLineas/>
           <div className='contenedor'>
           <Link to='/proyects' className="link">
                <img src={Proyectos} className='icon'/>
            </Link>
           </div>
           {/* <NavbarLineas/>
            <Link to='/ads' className="link">
                    <img src={Anuncio} className='icon'/>
            </Link> */}
           <NavbarLineas/>
            <Link to='/booms' className="link">
                    <img src={Booms} className='icon'/>
            </Link>
           <NavbarLineas/>
            <Link to='/about-as' className="link">
                    <img src={About} className='icon'/>
            </Link>
        </VerticalDiv>
    )
}