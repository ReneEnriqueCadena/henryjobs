import React, { useState } from "react";
import RecruiterForm from "./RecruiterForm";
import RegisterCompleted from "../RegisterCompleted";


export default function RegisterRecruiter () {
    const [fase, setFase] = useState(1);
    
    const sumarFase = () => {
        setFase(fase => fase + 1);
    };

    if(fase === 1){
        return(
            <>
            <RecruiterForm sumarFase={sumarFase} />
            </>
        );
    }
    else{
        return(
            <>
            <RegisterCompleted />
            </>
        );
    }
};