import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'; 
import { Link } from "react-router-dom";
import { useJwt } from "react-jwt";
import { profileID } from "../../../reducer/actions/actionPost";

export default function ButtonPerfil(){
    
    const dispatch= useDispatch();
    const[id, setId]=useState('')
    
    const tal = localStorage.getItem('TK')
    const userType = JSON.parse(tal);

    useEffect(()=>{
        if(userType !== null){
            setId(userType.id);
        } 
    },[tal])
    
    const handleID = function(){
        if(userType.id !== undefined){
            dispatch(profileID(userType.id))
        }
    }

    return(
        <div>
            <Link to={`/profile/${id}`}>
                <button onClick={handleID} >Perfil</button>
            </Link>
        </div>
    )
}