import React from "react";
import ButtonWorkWall from "../buttons/buttonWorkWall";
import ButtonHome from '../buttons/buttonHome';
import ButtonPerfil from '../buttons/buttonPerfil';
import ButtonStudentsWall from '../buttons/buttonStudentsWall';
import ButtonPremium from "../buttons/buttonPremium";
import { useSelector } from "react-redux";
import { NavSt,DivContSt } from "./Estilos/navStudent";




export default function StudentsNavBar () {
    
    const logout = useSelector((state) => state.fetchPostReducer.response);

    return(
        <DivContSt>
           
            {
                logout ?
                    
                    <NavSt>
                        
                        <div>
                            <ButtonHome />
                        </div>

                        <div>
                            <ButtonStudentsWall />
                        </div>

                        <div>
                            <ButtonWorkWall />
                        </div>
        
                        <div>
                            <ButtonPerfil />
                        </div>
                    </NavSt>
                    : null
            }

        </DivContSt>
    );
};