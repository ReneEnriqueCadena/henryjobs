import React from "react";
import { useParams } from "react-router-dom";

export default function BusinessProfile(){

    const { userName } = useParams;
    
    console.log(userName)
    return(
        <div>hi, i m business proifle</div>
    )
}