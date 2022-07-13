import React, { useEffect, useState } from "react";
import ButtonPremium from "../buttons/buttonPremium";
import { useSelector } from "react-redux";
import ButtonStudentsWall from '../buttons/buttonStudentsWall'
import ButtonHome from "../buttons/buttonHome";
import ButtonPerfil from "../buttons/buttonPerfil";
import { DivContSt,  NavSt } from "./Estilos/navStudent";


export default function BusinessNavBar() {

    const logout = useSelector((state) => state.fetchPostReducer.response);
    const [ prem , setPrem ] = useState(undefined);

    const tal = localStorage.getItem('TK')
    const userType = JSON.parse(tal);

    useEffect(() => {
        if(userType !== undefined && userType !== null){
            setPrem(userType.premium)
        }
    },[userType])
    

    return (
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
                            <ButtonPerfil />
                        </div>
                        {
                            prem === undefined ? null :

                            !prem ? <ButtonPremium /> : null // negar despues
                        }
                    </NavSt>
                    : null
            }

        </DivContSt>
    );
};