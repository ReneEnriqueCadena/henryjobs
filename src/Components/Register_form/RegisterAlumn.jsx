import React, { useEffect, useState } from "react";
import RegisterCompleted from "./RegisterCompleted";
import DevType from "./Students/devType";
import Instance from "./Students/instance";
import Languages from "./Students/Languages";

export default function RegisterAlumn(){
    const [fase, setFase] = useState(1);
    
    const sumarFase = () => {
        if(fase === 5){
            setFase(1);
        }
        else{
            setFase(fase => fase + 1)
        }
    };

    // useEffect(() => {
    // como resetear el estado una vez finalizado el registro
    // }, [fase])

    if(fase === 1){
        return(
        <>
        <Instance sumarFase={sumarFase}/>
        </>
        );
    }
    else if(fase === 2){
        return(
        <>
        <DevType sumarFase={sumarFase}/>
        </>
        );
    }
    else if(fase === 3){
        return(
        <>
        <Languages sumarFase={sumarFase}/>
        </>
        );
    }
    else if(fase === 4){
        return(
        <>
        <RegisterCompleted />
        </>
        );
    }
};