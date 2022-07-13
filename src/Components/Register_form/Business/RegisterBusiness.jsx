import React, { useState } from "react";
import RegisterCompleted from "../RegisterCompleted"
import BusinessForm from "./BusinessForm";

export default function RegisterBusiness () {
    const [fase, setFase] = useState(1);
    
    const sumarFase = () => {
        setFase(fase => fase + 1);
    };

    if(fase === 1){
        return(
            <>
            <BusinessForm sumarFase={sumarFase} />
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