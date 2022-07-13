import React, { useEffect, useState } from "react";
import {  ContainerProfile, LoginCont } from './navLogin/navLoginStyles/navLogin';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { setGoogleUser, setLogout } from "../../../reducer/actions/actionPost";



export default function LoginApi() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userT, setUserT] = useState(false);
    const tal = localStorage.getItem('TK')
    const userType = JSON.parse(tal);

    const register =()=>{
        navigate('/login')
    }
    
    const Logout=()=>{
        localStorage.clear('TK')
        dispatch(setLogout())
        dispatch(setGoogleUser(false));
        navigate('/')
    }

    useEffect(() => {
        if(userType === null){
            setUserT(false)
        }   
        if(userType !== null) {
            setUserT(true)
        }
    })


    // const tal= localStorage.getItem('TK') TRAE UN ITEM DEL STORAGE
    // const SetearItem=localStorage.setItem(tal,'tal') SETEA UN ITEM DEL STORAGE
    // localStorage.clear() LIMPIA TODO EL STORAGE
    // localStorage.removeItem('nombre de item') REMUEVE UN ITEM ESPECIFICO DEL STORAGE
    // const token= JSON.parse(tal) PARSEO EL ITEM A FORMA DE OBJETO

    return (
        <ContainerProfile>
                <LoginCont>
                    
    {
        userT ?

        <button onClick={()=>Logout()}>Logout</button>
        
        :
        
        <button onClick={() => register()}>Login</button>
    }
                        
                        
                    
                </LoginCont>
        </ContainerProfile>
    )
}