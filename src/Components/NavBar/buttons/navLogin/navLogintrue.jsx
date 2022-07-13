import React, { useEffect } from "react";
import ButtonHome from "../buttonHome";
import { ContnavLogin } from "./navLoginStyles/navLogin";
import ButtonPerfil from "../buttonPerfil";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonPremium from "../buttonPremium";
import { getInfoUser } from "../../../../reducer/actions/actionPost";
import ButtonStudentsWall from "../buttonStudentsWall";
import ButtonWorkWall from "../buttonWorkWall";


export default function NavLoginTrue(props) {

    const dispatch = useDispatch();
    const userType = useSelector((state) => state.fetchInfoUserReducer.userType)
    const isPremium = false/* useSelector((state) => state.fetchInfoUserReducer.premium) */
    const userRegister = useSelector((state) => state.fetchInfoUserReducer.isRegistered);

 

    return (
        <ContnavLogin>
            {
                userRegister

                    ?

                    <ButtonHome />

                    :

                    <p>Completa el registro para acceder a las herramientas <Link to='/register'>Registro</Link></p>

            }
            {
                userType === 3 ? null :
                <div>
                    <ButtonPerfil name={props.name} />
                </div>
            }
            {console.log('acarey',userType)}
            {
                userType === 1 || userType === 2 ? <div><ButtonWorkWall/></div> : <div><ButtonStudentsWall/></div>
            }
        </ContnavLogin>
    )
}